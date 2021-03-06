# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-08 02:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20160808_0152'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='begindate',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='enddate',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='entryfee',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='gameclass',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='gender',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='level',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='poster',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='region',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='stadium',
            field=models.CharField(max_length=300, null=True),
        ),
    ]
