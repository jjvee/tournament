# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-18 00:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_auto_20160816_0518'),
    ]

    operations = [
        migrations.CreateModel(
            name='TournamentTeam',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Game')),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Team')),
                ('tournament', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Tournament')),
            ],
        ),
    ]
