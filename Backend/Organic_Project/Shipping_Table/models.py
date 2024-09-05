from django.db import models
from category_Table.models import Category_Table
from django.core.validators import MaxValueValidator,MinValueValidator
# Create your models here.
class Shipping_table(models.Model):
    order=models.ForeignKey(Category_Table,on_delete=models.CASCADE)
    tracking_number=models.CharField(max_length=12,min_length=12)
    shipping_date=models.DateField()
    estimated_date=models.DateField()