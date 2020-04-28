from django.db import models
from user.models import UserProfile
from user.models import Department


class AssetCategory(models.Model):
    name = models.CharField(max_length=50, verbose_name='设备类别名称')


class Asset(models.Model):
    aid = models.CharField(max_length=30, unique=True, verbose_name='设备编号')
    name = models.CharField(max_length=50, verbose_name='设备名称')
    category = models.ForeignKey(AssetCategory, null=True, on_delete=models.SET_NULL,
                                 related_name='%(class)s_category_assets',
                                 verbose_name='设备类别')
    model = models.CharField(max_length=30, null=True, blank=True, verbose_name='设备型号')
    spec = models.CharField(max_length=30, null=True, blank=True, verbose_name='设备规格')
    manufacturer = models.CharField(max_length=50, null=True, blank=True, verbose_name='生产厂商')
    produced_on = models.DateField(null=True, blank=True, verbose_name='生产日期')
    acquired_on = models.DateField(null=True, blank=True, verbose_name='购置日期')
    expire_on = models.DateField(null=True, blank=True, verbose_name='保质日期')
    transactor = models.ForeignKey(UserProfile, null=True, on_delete=models.SET_NULL,
                                   related_name='%(class)s_transacted_assets',
                                   verbose_name='经办人')
    department = models.ForeignKey(Department, null=True, on_delete=models.SET_NULL,
                                   related_name='%(class)s_department_assets',
                                   verbose_name='所在部门')
    status = models.CharField(max_length=20, default='Good', verbose_name='状态')
    quantity = models.IntegerField(default=1, verbose_name='数量')
    price = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=2, verbose_name='单价')
    note = models.TextField(null=True, blank=True, verbose_name='备注')


class AssetCreate(models.Model):
    id = models.CharField(max_length=30, primary_key=True, unique=True, verbose_name='建账编号')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='建账时间')
    transactor = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True,
                                   related_name='%(class)s_transacted_assets',
                                   verbose_name='经办人')
    reviewer = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True,
                                 related_name='%(class)s_reviewed_assets',
                                 verbose_name='审批人')
    asset_id = models.CharField(max_length=30, verbose_name='设备编号')
    asset_name = models.CharField(max_length=50, verbose_name='设备名称')
    asset_category = models.ForeignKey(AssetCategory, null=True, blank=True, on_delete=models.SET_NULL,
                                       related_name='%(class)s_category_assets', verbose_name='设备类别')
    asset_model = models.CharField(max_length=30, null=True, blank=True, verbose_name='设备型号')
    asset_spec = models.CharField(max_length=30, null=True, blank=True, verbose_name='设备规格')
    asset_manufacturer = models.CharField(max_length=50, null=True, blank=True, verbose_name='生产厂商')
    produced_on = models.DateField(null=True, blank=True, verbose_name='生产日期')
    acquired_on = models.DateField(null=True, blank=True, verbose_name='购置日期')
    expire_on = models.DateField(null=True, blank=True, verbose_name='保质日期')
    asset_department = models.ForeignKey(Department, null=True, on_delete=models.SET_NULL,
                                         related_name='%(class)s_department_assets', verbose_name='使用部门')
    asset_status = models.CharField(max_length=30, default='Good', verbose_name='设备状态')
    asset_quantity = models.IntegerField(default=1, verbose_name='设备数量')
    asset_price = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=2, verbose_name='设备单价')
    asset_note = models.TextField(null=True, blank=True, verbose_name='设备备注')
    credentials = models.TextField(null=True, blank=True, verbose_name='建账证明')
    status = models.CharField(max_length=10, default='审批中', verbose_name='建账审批状态')
    opinion = models.TextField(null=True, blank=True, verbose_name='审批意见')
    note = models.TextField(null=True, blank=True, verbose_name='备注')


class AssetScrap(models.Model):
    id = models.CharField(max_length=30, primary_key=True, unique=True, verbose_name='报废记录编号')
    created_on = models.DateTimeField(auto_now_add=True, verbose_name='报废日期')
    asset = models.ForeignKey(Asset, null=True, on_delete=models.SET_NULL, related_name='%(class)s_scrap_assets',
                              verbose_name='设备编号')
    transactor = models.ForeignKey(UserProfile, null=True, on_delete=models.SET_NULL,
                                   related_name='%(class)s_transacted_assets',
                                   verbose_name='申请人')
    reviewer = models.ForeignKey(UserProfile, null=True, on_delete=models.SET_NULL,
                                 related_name='%(class)s_reviewed_assets',
                                 verbose_name='审批人')
    reason = models.TextField(null=True, blank=True, verbose_name='报废原因')
    status = models.CharField(max_length=10, default='审批中', verbose_name='报废审批状态')
    opinion = models.TextField(null=True, blank=True, verbose_name='审批意见')
    note = models.TextField(null=True, blank=True, verbose_name='备注')


class AssetFix(models.Model):
    id = models.CharField(max_length=30, primary_key=True, unique=True, verbose_name='维修记录编号')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='报修时间')
    asset = models.ForeignKey(Asset, null=True, on_delete=models.SET_NULL, related_name='%(class)s_fixed_assets',
                              verbose_name='设备编号')
    transactor = models.ForeignKey(UserProfile, null=True, on_delete=models.SET_NULL,
                                   related_name='%(class)s_transacted_assets',
                                   verbose_name='申请人')
    reviewer = models.ForeignKey(UserProfile, null=True, on_delete=models.SET_NULL,
                                 related_name='%(class)s_reviewed_assets',
                                 verbose_name='审批人')
    contact = models.CharField(max_length=20, default="", verbose_name="维修方联系方式")
    returned_at = models.DateTimeField(null=True, blank=True, verbose_name='维修结束时间')
    status = models.CharField(max_length=10, default='审批中', verbose_name='维修状态')
    opinion = models.TextField(null=True, blank=True, verbose_name='审批意见')
    note = models.TextField(null=True, blank=True, verbose_name='备注')
