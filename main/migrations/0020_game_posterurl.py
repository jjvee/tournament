# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-28 03:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0019_auto_20161120_1601'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='posterurl',
            field=models.TextField(blank=True, null=True),
        ),
    ]
