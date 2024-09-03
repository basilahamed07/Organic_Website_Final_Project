# Generated by Django 3.2.19 on 2024-09-03 18:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Product_Table', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Checkout_Table',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Check_User_id', models.IntegerField()),
                ('Check_Quantity', models.IntegerField()),
                ('Check_Price', models.FloatField()),
                ('Check_product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Product_Table.product_table')),
            ],
        ),
    ]
