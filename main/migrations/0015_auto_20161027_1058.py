# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-10-27 10:58
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0014_game_mastername'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='mastername',
        ),
        migrations.AddField(
            model_name='game',
            name='masteruser',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
