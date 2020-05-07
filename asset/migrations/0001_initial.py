# Generated by Django 2.2.1 on 2020-05-07 11:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('department', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('aid', models.CharField(max_length=30, primary_key=True, serialize=False, verbose_name='设备编号')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('name', models.CharField(max_length=50, verbose_name='设备名称')),
                ('description', models.TextField(blank=True, verbose_name='描述信息')),
            ],
        ),
        migrations.CreateModel(
            name='AssetCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='设备类别名称')),
            ],
        ),
        migrations.CreateModel(
            name='AssetSKU',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skuid', models.CharField(max_length=50, unique=True, verbose_name='货格编号')),
                ('acquired_at', models.DateTimeField(auto_now_add=True, verbose_name='购置日期')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='更新日期')),
                ('note', models.TextField(blank=True, verbose_name='备注')),
                ('model', models.CharField(blank=True, max_length=30, verbose_name='设备型号')),
                ('spec', models.CharField(blank=True, max_length=30, verbose_name='设备规格')),
                ('manufacturer', models.CharField(blank=True, max_length=50, null=True, verbose_name='生产厂商')),
                ('produced_on', models.DateField(blank=True, null=True, verbose_name='生产日期')),
                ('expired_on', models.DateField(blank=True, null=True, verbose_name='保质日期')),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='单价')),
                ('asset', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='skus', to='asset.Asset', verbose_name='所属设备')),
            ],
            options={
                'verbose_name': 'Asset Stock Keeping Unit',
                'verbose_name_plural': 'Asset Stock Keeping Units',
                'ordering': ['skuid'],
            },
        ),
        migrations.CreateModel(
            name='BaseAppModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='更新时间')),
                ('type', models.CharField(default='Unknown', max_length=20, verbose_name='申请类型')),
                ('note', models.TextField(blank=True, verbose_name='备注')),
                ('status', models.CharField(default='审核中', max_length=10, verbose_name='审批状态')),
                ('opinion', models.TextField(blank=True, verbose_name='审批意见')),
                ('reviewer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='baseappmodel_reviewed_assets', to=settings.AUTH_USER_MODEL, verbose_name='审批人')),
                ('sku', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='baseappmodel_sku', to='asset.AssetSKU', verbose_name='关联SKU')),
                ('transactor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='baseappmodel_transacted_assets', to=settings.AUTH_USER_MODEL, verbose_name='经办人')),
            ],
            options={
                'verbose_name': 'Base Application',
                'verbose_name_plural': 'Base Applications',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='AssetBorrowReturn',
            fields=[
                ('baseappmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='asset.BaseAppModel')),
                ('borrowed_at', models.DateTimeField(verbose_name='借出时间')),
                ('estimate_return_on', models.DateField(verbose_name='预计归还时间')),
                ('returned_at', models.DateTimeField(verbose_name='实际归还时间')),
            ],
            options={
                'verbose_name': 'Asset borrow return application',
                'verbose_name_plural': 'Asset borrow return applications',
            },
            bases=('asset.baseappmodel',),
        ),
        migrations.CreateModel(
            name='AssetChange',
            fields=[
                ('baseappmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='asset.BaseAppModel')),
                ('change_type', models.CharField(blank=True, max_length=50, null=True, verbose_name='变更类型')),
                ('change_field', models.CharField(max_length=50, verbose_name='变动字段')),
                ('change_description', models.CharField(max_length=100, verbose_name='变动内容')),
            ],
            options={
                'verbose_name': 'Asset change application',
                'verbose_name_plural': 'Asset change applications',
            },
            bases=('asset.baseappmodel',),
        ),
        migrations.CreateModel(
            name='AssetCreate',
            fields=[
                ('baseappmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='asset.BaseAppModel')),
                ('credentials', models.FileField(blank=True, upload_to='credentials/%Y/%m', verbose_name='建账证明')),
            ],
            options={
                'verbose_name': 'Asset create application',
                'verbose_name_plural': 'Asset create applications',
            },
            bases=('asset.baseappmodel',),
        ),
        migrations.CreateModel(
            name='AssetFix',
            fields=[
                ('baseappmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='asset.BaseAppModel')),
                ('contact', models.CharField(default='', max_length=20, verbose_name='维修方联系方式')),
                ('returned_at', models.DateTimeField(blank=True, null=True, verbose_name='维修结束时间')),
            ],
            options={
                'verbose_name': 'Asset fix application',
                'verbose_name_plural': 'Asset fix applications',
            },
            bases=('asset.baseappmodel',),
        ),
        migrations.CreateModel(
            name='AssetScrap',
            fields=[
                ('baseappmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='asset.BaseAppModel')),
                ('reason', models.TextField(blank=True, null=True, verbose_name='报废原因')),
            ],
            options={
                'verbose_name': 'Asset scrap application',
                'verbose_name_plural': 'Asset scrap applications',
            },
            bases=('asset.baseappmodel',),
        ),
        migrations.CreateModel(
            name='AssetSet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(default='建账审核中', max_length=20, verbose_name='状态')),
                ('quantity', models.IntegerField(default=1, verbose_name='数量')),
                ('address', models.CharField(blank=True, max_length=100, null=True, verbose_name='所在地址')),
                ('app', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='asset_sets_app', to='asset.BaseAppModel', verbose_name='关联申请')),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='department.Department', verbose_name='所在部门')),
                ('manager', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='assetset_manager', to=settings.AUTH_USER_MODEL, verbose_name='负责人')),
                ('sku', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sets', to='asset.AssetSKU', verbose_name='所属货格')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='assetset_user', to=settings.AUTH_USER_MODEL, verbose_name='使用人')),
            ],
            options={
                'verbose_name': 'Asset Set',
                'verbose_name_plural': 'Asset Sets',
                'ordering': ['id'],
            },
        ),
        migrations.AddField(
            model_name='asset',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='asset.AssetCategory', verbose_name='设备类别'),
        ),
    ]
