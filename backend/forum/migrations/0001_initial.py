# Generated by Django 4.1 on 2022-09-05 07:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Counsellor",
            fields=[
                (
                    "counsellorID",
                    models.BigAutoField(primary_key=True, serialize=False),
                ),
                ("name", models.CharField(max_length=100)),
                ("address", models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name="Post",
            fields=[
                ("pid", models.BigAutoField(primary_key=True, serialize=False)),
                ("content", models.TextField(max_length=500)),
                ("title", models.CharField(max_length=200)),
                ("numLikes", models.IntegerField()),
                ("numComments", models.IntegerField()),
                ("createdAt", models.DateTimeField()),
                (
                    "uid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={"ordering": ["-createdAt"],},
        ),
        migrations.CreateModel(
            name="Comment",
            fields=[
                ("cid", models.BigAutoField(primary_key=True, serialize=False)),
                ("content", models.TextField(max_length=300)),
                (
                    "pid",
                    models.ForeignKey(
                        db_column="pid",
                        on_delete=django.db.models.deletion.CASCADE,
                        to="forum.post",
                    ),
                ),
                (
                    "uid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Appointment",
            fields=[
                ("aid", models.BigAutoField(primary_key=True, serialize=False)),
                ("date", models.DateField()),
                ("completed", models.BooleanField()),
                (
                    "counsellorID",
                    models.ForeignKey(
                        db_column="counelloerID",
                        on_delete=django.db.models.deletion.CASCADE,
                        to="forum.counsellor",
                    ),
                ),
                (
                    "uid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Like",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "pid",
                    models.ForeignKey(
                        db_column="pid",
                        on_delete=django.db.models.deletion.CASCADE,
                        to="forum.post",
                    ),
                ),
                (
                    "uid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={"unique_together": {("pid", "uid")},},
        ),
    ]
