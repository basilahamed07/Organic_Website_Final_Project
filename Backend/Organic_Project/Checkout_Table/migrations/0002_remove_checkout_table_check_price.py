<<<<<<< HEAD
# Generated by Django 3.2.19 on 2024-09-04 10:30
=======
# Generated by Django 3.2.19 on 2024-09-04 10:06
>>>>>>> 585e0993c81d2c85e085d80f7a23183dfa4a9604

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Checkout_Table', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='checkout_table',
            name='Check_Price',
        ),
    ]
