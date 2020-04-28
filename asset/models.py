from django.db import models
from user.models import UserProfile
from user.models import Department
# Create your models here.
class AssetCategory(models.Model):
    name = models.CharField(max_length=50, verbose_name='设备类别名称')


class Asset(models.Model):
    aid = models.CharField(max_length=30, null=True, unique=True, verbose_name='设备编号')
    name = models.CharField(max_length=50, verbose_name='设备名称')
    category = models.ForeignKey(AssetCategory, on_delete=models.CASCADE, related_name='assets', verbose_name='设备类别')
    model = models.CharField(max_length=30, blank=True, unique=True, verbose_name='设备型号')
    spec = models.CharField(max_length=30, null=True, blank=True, verbose_name='设备规格')
    manufacturer = models.CharField(max_length=50, null=True, blank=True, verbose_name='生产厂商')
    produced_on = models.DateField(null=True, blank=True, verbose_name='生产日期')
    acquired_on = models.DateField(auto_now_add=True, verbose_name='购置日期')
    expire_on = models.DateField(null=True, blank=True, verbose_name='保质日期')
    transactor = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='assets', verbose_name='经办人')
    # TODO: FK department
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='assets', verbose_name='所在部门')
    status = models.CharField(max_length=30, default='Good', verbose_name='状态')
    quantity = models.PositiveIntegerField(default=1, verbose_name='数量')
    price = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=2, verbose_name='单价')
    note = models.TextField(null=True, blank=True, verbose_name='备注')

class CreateAsset(models.Model):
    cr_id = models.CharField(max_length=30, null=True, unique=True, verbose_name='建账编号')
    cr_time = models.DateField(auto_now_add=True, verbose_name='建账时间')
    cr_tran = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='newassets', verbose_name='经办人')
    cr_appr = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='newassets', verbose_name='审批人')
    cr_ass_id = models.CharField(max_length=30, null=True, verbose_name='设备编号')
    cr_ass_name = models.CharField(max_length=50, verbose_name='设备名称')
    #姑且认为建账表之前没有种类表
    cr_ass_cate = models.CharField(max_length=50, verbose_name='设备类别')
    cr_ass_model = models.CharField(max_length=30, blank=True, verbose_name='设备型号')
    cr_ass_spec = models.CharField(max_length=30, null=True, blank=True, verbose_name='设备规格')
    cr_ass_manu = models.CharField(max_length=50, null=True, blank=True, verbose_name='生产厂商')
    cr_ass_prod = models.DateField(null=True, blank=True, verbose_name='生产日期')
    cr_ass_acqu = models.DateField(null=True, blank=True, verbose_name='购置日期')
    cr_ass_expi = models.DateField(null=True, blank=True, verbose_name='保质日期')
    cr_ass_depa = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='newassets', verbose_name='使用部门')
    cr_ass_status = models.CharField(max_length=30, default='Good', verbose_name='设备状态')
    cr_ass_quantity = models.PositiveIntegerField(default=1, verbose_name='设备数量')
    cr_ass_price = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=2, verbose_name='设备单价')
    cr_ass_note = models.TextField(null=True, blank=True, verbose_name='设备备注')
    cr_cred = models.TextField(null=True,blank=True, verbose_name='建账证明')
    cr_status = models.CharField(max_length=30, default='Waiting', verbose_name='建账审批状态')
    cr_opinion = models.TextField(null=True, blank=True, verbose_name='审批意见')
    cr_note = models.TextField(null=True,blank=True, verbose_name='备注')

class ScrapAsset(models.Model):
    scrap_id = models.CharField(max_length=30, null=True, unique=True, verbose_name='报废记录编号')
    scrap_time = models.DateField(null=True, blank=True, verbose_name='报废日期')
    scrap_ass_id = models.ForeignKey(Asset, on_delete=models.CASCADE, related_name='scrapassets', verbose_name='设备编号')
    scrap_tran = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='scrapassets', verbose_name='申请人')
    scrap_appr = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='scrapassets', verbose_name='审批人')
    scrap_reason = models.TextField(null=True,blank=True, verbose_name='报废原因')
    scrap_ass_status = models.CharField(max_length=30, default='Waiting', verbose_name='报废审批状态')
    scrap_opinion = models.TextField(null=True, blank=True, verbose_name='审批意见')
    scrap_note = models.TextField(null=True, blank=True, verbose_name='备注')

class FixAsset(models.Model):
    fix_id = models.CharField(max_length=30, null=True, unique=True, verbose_name='维修记录编号')
    fix_time = models.DateField(auto_now_add=True, verbose_name='报修时间')
    fix_ass_id = models.ForeignKey(Asset, on_delete=models.CASCADE, related_name='fixassets', verbose_name='设备编号')
    fix_tran = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='fixassets',verbose_name='申请人')
    fix_appr = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='fixassets',verbose_name='审批人')
    fix_contact = models.CharField(max_length=20, default="", verbose_name="维修方联系方式")
    fix_return_date = models.DateField(null=True, blank=True, verbose_name='维修结束日期')
    fix_status = models.CharField(max_length=50, default='Waiting', verbose_name='维修状态')
    fix_opinion = models.TextField(null=True, blank=True, verbose_name='审批意见')
    fix_note = models.TextField(null=True, blank=True, verbose_name='备注')





