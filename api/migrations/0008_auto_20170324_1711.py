# -*- coding: utf-8 -*-
# Generated by Django 1.11b1 on 2017-03-24 15:11
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20170324_0949'),
    ]

    operations = [
        migrations.RenameField(
            model_name='topic',
            old_name='desription',
            new_name='description',
        ),
    ]
