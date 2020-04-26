# Generated by Django 2.2.1 on 2020-04-25 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='asset',
            name='aid',
            field=models.CharField(max_length=30, null=True, unique=True, verbose_name='设备编号'),
        ),
        migrations.AlterField(
            model_name='asset',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
