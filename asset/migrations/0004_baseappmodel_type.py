# Generated by Django 2.2.1 on 2020-05-02 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0003_auto_20200502_2204'),
    ]

    operations = [
        migrations.AddField(
            model_name='baseappmodel',
            name='type',
            field=models.CharField(default='Unknown', max_length=20, verbose_name='申请类型'),
        ),
    ]
