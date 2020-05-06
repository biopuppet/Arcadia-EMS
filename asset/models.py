from django.db import models
from user.models import UserProfile
from user.models import Department


class AssetCategory(models.Model):
    name = models.CharField(max_length=50, verbose_name='设备类别名称')


class Asset(models.Model):
    """
    A general, abstract asset model.
    """
    aid = models.CharField(max_length=30, primary_key=True, verbose_name='设备编号')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')
    name = models.CharField(max_length=50, verbose_name='设备名称')
    category = models.ForeignKey(AssetCategory, null=True, on_delete=models.SET_NULL, verbose_name='设备类别')
    description = models.TextField(blank=True, verbose_name='描述信息')


class AssetSKU(models.Model):
    """
    An asset SKU(Stock Keeping Unit) is the smallest asset unit that could be operated.
    The SKU ID is composed of an alphanumeric combination code of the *static* attributes of
    the asset, e.g. the spec, model, the manufacturer, etc. It can be thought of as
    a code assigned to a set of indistinct entities.
    """
    skuid = models.CharField(max_length=50, unique=True, verbose_name='货格编号')
    acquired_at = models.DateTimeField(auto_now_add=True, verbose_name='购置日期')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新日期')
    note = models.TextField(blank=True, verbose_name='备注')

    # static attributes
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE, related_name='skus', verbose_name='所属设备')
    model = models.CharField(max_length=30, blank=True, verbose_name='设备型号')
    spec = models.CharField(max_length=30, blank=True, verbose_name='设备规格')
    manufacturer = models.CharField(max_length=50, null=True, blank=True, verbose_name='生产厂商')
    produced_on = models.DateField(null=True, blank=True, verbose_name='生产日期')
    expired_on = models.DateField(null=True, blank=True, verbose_name='保质日期')
    price = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=2, verbose_name='单价')

    class Meta:
        verbose_name = "Asset Stock Keeping Unit"
        verbose_name_plural = verbose_name + "s"
        ordering = ['skuid']

    def __str__(self):
        return self.skuid.__str__()

    def make_skuid(self):
        skuid = '%s/%s/%s/%s/' % (self.asset.aid, str(self.model), str(self.spec), str(self.manufacturer))
        skuid += '%s/%s/%s/' % (str(self.produced_on), str(self.expired_on), str(self.price))
        return skuid

    def set_skuid(self, skuid):
        if skuid:
            self.skuid = skuid
        else:
            self.skuid = self.make_skuid()


class AssetSet(models.Model):
    """
    A subset of asset sku model. To keep track of the status, address, user, etc of asset sku.
    For example, half of a set of HP PC sku is damaged, we just have to fork the original AssetSet associated with
    the HP PC sku with the quantity splitting into half-&-half, then change the child AssetSet's status to 'broken'.

    Borrow & Return:
        When borrowing some asset entities from a specific department, the user submits the application form, copies
        the `status` field to `status when borrowed`, input a number, etc. If the app was granted, fork the AssetSet,
        change the department or address, specify a manager, etc.
        When returning, the user inputs the `status when returned`, `quantity`, etc. If the return was granted,
        combine the 2 rows if everything's consistent. Otherwise, keep as it is.
    """
    sku = models.ForeignKey(AssetSKU, on_delete=models.CASCADE, related_name='sets', verbose_name='所属货格')
    app = models.ForeignKey('BaseAppModel', on_delete=models.SET_NULL, null=True, related_name='asset_sets_app',
                            verbose_name='关联申请')

    status = models.CharField(max_length=20, default='建账审核中', verbose_name='状态')
    quantity = models.IntegerField(default=1, verbose_name='数量')
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, verbose_name='所在部门')
    address = models.CharField(max_length=100, blank=True, null=True, verbose_name='所在地址')
    manager = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True,
                                related_name='%(class)s_manager', verbose_name='负责人')
    user = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True,
                             related_name='%(class)s_user', verbose_name='使用人')

    class Meta:
        verbose_name = "Asset Set"
        verbose_name_plural = verbose_name + "s"
        ordering = ['id']

    def __str__(self):
        return self.id.__str__()


class BaseAppModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')
    type = models.CharField(max_length=20, default='Unknown', verbose_name='申请类型')
    sku = models.ForeignKey(AssetSKU, on_delete=models.CASCADE, related_name='%(class)s_sku', verbose_name='关联SKU')
    transactor = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True,
                                   related_name='%(class)s_transacted_assets',
                                   verbose_name='经办人')
    note = models.TextField(blank=True, verbose_name='备注')
    status = models.CharField(max_length=10, default='审核中', verbose_name='审批状态')
    reviewer = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True,
                                 related_name='%(class)s_reviewed_assets',
                                 verbose_name='审批人')
    opinion = models.TextField(blank=True, verbose_name='审批意见')

    class Meta:
        verbose_name = "Base Application"
        verbose_name_plural = verbose_name + "s"
        ordering = ['id']

    def __str__(self):
        return 'Base' + self.id.__str__() + '@' + self.created_at.__str__()

    def transit(self, event):
        if event is None or event == '':
            return self.status

        if event == 'reject':
            self.status = '已驳回'
        elif event == 'approve':
            self.status = '已通过'
        else:
            self.status = '异常'

        # Transit all of the asset sets under this application
        for asset_set in self.asset_sets_app.all():
            # e.g. '建账已通过', '报废已驳回'
            asset_set.status = self.type + self.status
            asset_set.save()

# 设备报表


class AssetCreate(BaseAppModel):
    credentials = models.FileField(upload_to='credentials/%Y/%m', blank=True, verbose_name='建账证明')

    class Meta:
        verbose_name = "Asset create application"
        verbose_name_plural = verbose_name + "s"

    def __str__(self):
        return 'Create: ' + self.sku.id.__str__() + '@' + self.created_at.__str__()


class AssetScrap(BaseAppModel):
    reason = models.TextField(null=True, blank=True, verbose_name='报废原因')

    class Meta:
        verbose_name = "Asset scrap application"
        verbose_name_plural = verbose_name + "s"

    def __str__(self):
        return 'Scrap: ' + self.sku.id.__str__() + '@' + self.created_at.__str__()


class AssetFix(BaseAppModel):
    contact = models.CharField(max_length=20, default="", verbose_name="维修方联系方式")
    returned_at = models.DateTimeField(null=True, blank=True, verbose_name='维修结束时间')

    class Meta:
        verbose_name = "Asset fix application"
        verbose_name_plural = verbose_name + "s"

    def __str__(self):
        return 'Fix: ' + self.sku.id.__str__() + '@' + self.created_at.__str__()


class AssetChange(BaseAppModel):
    change_type = models.CharField(max_length=50, blank=True, null=True, verbose_name='变更类型')
    change_field = models.CharField(max_length=50, verbose_name='变动字段')
    change_description = models.CharField(max_length=100, verbose_name='变动内容')

    class Meta:
        verbose_name = "Asset change application"
        verbose_name_plural = verbose_name + "s"

    def __str__(self):
        return 'Change: ' + self.sku.id.__str__() + '@' + self.created_at.__str__()


class AssetBorrowReturn(BaseAppModel):
    borrowed_at = models.DateTimeField(verbose_name='借出时间')
    estimate_return_on = models.DateField(verbose_name='预计归还时间')
    returned_at = models.DateTimeField(verbose_name='实际归还时间')

    class Meta:
        verbose_name = "Asset borrow return application"
        verbose_name_plural = verbose_name + "s"

    def __str__(self):
        return 'B&R: ' + self.sku.id.__str__() + '@' + self.created_at.__str__()
