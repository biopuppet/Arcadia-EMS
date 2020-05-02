# Generated by Django 2.2.1 on 2020-05-01 22:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0002_auto_20200501_2245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assetset',
            name='sku',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sets', to='asset.AssetSKU', verbose_name='所属货格'),
        ),
    ]