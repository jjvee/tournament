# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-12 06:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_matchlist'),
    ]

    operations = [
        migrations.AddField(
            model_name='matchlist',
            name='team_b_score',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
