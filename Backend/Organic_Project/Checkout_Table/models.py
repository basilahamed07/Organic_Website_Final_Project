from django.db import models
from Product_Table.models import Product_Table
# Create your models here.
class Checkout_Table(models.Model):
    Check_User_id = models.IntegerField()
    Check_product = models.ForeignKey(Product_Table, on_delete=models.CASCADE)
    Check_Quantity = models.IntegerField()