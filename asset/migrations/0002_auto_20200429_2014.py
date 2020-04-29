# Generated by Django 2.2.1 on 2020-04-29 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='asset',
            name='acquired_on',
            field=models.DateField(blank=True, null=True, verbose_name='购置日期'),
        ),
        migrations.AlterField(
            model_name='asset',
            name='expire_on',
            field=models.DateField(blank=True, null=True, verbose_name='保质日期'),
        ),
        migrations.AlterField(
            model_name='asset',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='单价'),
        ),
        migrations.AlterField(
            model_name='asset',
            name='produced_on',
            field=models.DateField(blank=True, null=True, verbose_name='生产日期'),
        ),
    ]
