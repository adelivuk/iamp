# Generated by Django 5.0.9 on 2024-10-08 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=30, null=True)),
                ('last_name', models.CharField(blank=True, max_length=30, null=True)),
                ('email', models.EmailField(blank=True, max_length=100, null=True)),
                ('sponsor_email', models.EmailField(blank=True, max_length=100, null=True)),
                ('is_verified', models.BooleanField(default=False)),
            ],
        ),
    ]