# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-10-28 05:23
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0015_auto_20161027_1058'),
    ]

    operations = [
        migrations.CreateModel(
            name='TeamPlayer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Team')),
            ],
        ),
        migrations.AddField(
            model_name='game',
            name='regtype',
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
        migrations.AddField(
            model_name='game',
            name='teamtype',
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
    ]
