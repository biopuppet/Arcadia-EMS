from django.db import models
from user.models import UserProfile
from user.models import Department


class AssetCategory(models.Model):
    name = models.CharField(max_length=50, verbose_name='设备类别名称')


class Asset(models.Model):
    aid = models.CharField(max_length=30, null=True, unique=True, verbose_name='设备编号')
    name = models.CharField(max_length=50, verbose_name='设备名称')
    category = models.ForeignKey(AssetCategory, null=True, on_delete=models.SET_NULL,
                                 related_name='%(class)s_category_assets',
                                 verbose_name='设备类别')
    model = models.CharField(max_length=30, blank=True, verbose_name='设备型号')
    spec = models.CharField(max_length=30, blank=True, verbose_name='设备规格')
    manufacturer = models.CharField(max_length=50, null=True, blank=True, verbose_name='生产厂商')
    produced_on = models.DateField(null=True, blank=True, verbose_name='生产日期')
    acquired_at = models.DateTimeField(auto_now_add=True, verbose_name='购置日期')
    expired_on = models.DateField(null=True, blank=True, verbose_name='保质日期')
    department = models.ForeignKey(Department, null=True, on_delete=models.SET_NULL,
                                   related_name='%(class)s_department_assets',
                                   verbose_name='所在部门')
    status = models.CharField(max_length=20, default='审核中', verbose_name='状态')
    quantity = models.IntegerField(default=1, verbose_name='数量')
    price = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=2, verbose_name='单价')
    note = models.TextField(blank=True, verbose_name='备注')


class BaseAppModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')
    asset = models.ForeignKey(Asset, null=True, on_delete=models.SET_NULL, related_name='+', verbose_name='关联设备')
    transactor = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True,
                                   related_name='%(class)s_transacted_assets',
                                   verbose_name='经办人')
    note = models.TextField(blank=True, verbose_name='备注')
    status = models.CharField(max_length=10, default='审核中', verbose_name='审批状态')
    reviewer = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True,
                                 related_name='%(class)s_reviewed_assets',
                                 verbose_name='审批人')
    opinion = models.TextField(blank=True, verbose_name='审批意见')


class AssetCreate(BaseAppModel):
    credentials = models.FileField(upload_to='credentials/%Y/%m', blank=True, verbose_name='建账证明')


class AssetScrap(BaseAppModel):
    reason = models.TextField(null=True, blank=True, verbose_name='报废原因')


class AssetFix(BaseAppModel):
    contact = models.CharField(max_length=20, default="", verbose_name="维修方联系方式")
    returned_at = models.DateTimeField(null=True, blank=True, verbose_name='维修结束时间')
