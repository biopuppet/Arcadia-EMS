# Generated by Django 2.2.1 on 2020-05-02 22:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0002_auto_20200502_2202'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='baseappmodel',
            options={'ordering': ['id'], 'verbose_name': 'Base Application', 'verbose_name_plural': 'Base Applications'},
        ),
    ]
