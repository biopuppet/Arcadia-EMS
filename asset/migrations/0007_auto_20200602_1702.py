# Generated by Django 2.2.1 on 2020-06-02 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0006_auto_20200514_2206'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assetsku',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='单价(元)'),
        ),
    ]