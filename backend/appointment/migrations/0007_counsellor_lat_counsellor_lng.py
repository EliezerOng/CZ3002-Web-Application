# Generated by Django 4.1.2 on 2022-11-04 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointment', '0006_remove_appointment_completed'),
    ]

    operations = [
        migrations.AddField(
            model_name='counsellor',
            name='lat',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
        migrations.AddField(
            model_name='counsellor',
            name='lng',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
    ]
