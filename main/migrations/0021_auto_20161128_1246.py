# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-28 03:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0020_game_posterurl'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='posterurl',
        ),
        migrations.AlterField(
            model_name='game',
            name='poster',
            field=models.ImageField(default='def.jpg', upload_to='static/img/poster/'),
        ),
    ]
