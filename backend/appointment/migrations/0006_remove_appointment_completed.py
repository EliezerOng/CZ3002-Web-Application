# Generated by Django 4.1.2 on 2022-11-03 14:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appointment', '0005_counsellor_postal_code_alter_counsellor_images'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='completed',
        ),
    ]