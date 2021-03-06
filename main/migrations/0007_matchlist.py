# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-12 06:38
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_tournament'),
    ]

    operations = [
        migrations.CreateModel(
            name='Matchlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('matchid', models.CharField(blank=True, max_length=5, null=True)),
                ('matchseq', models.CharField(blank=True, max_length=5, null=True)),
                ('team_a', models.CharField(blank=True, max_length=20, null=True)),
                ('team_b', models.CharField(blank=True, max_length=20, null=True)),
                ('team_a_score', models.CharField(blank=True, max_length=10, null=True)),
                ('winner', models.CharField(blank=True, max_length=20, null=True)),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Game')),
                ('tournament', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.Tournament')),
            ],
        ),
    ]
