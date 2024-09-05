from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.conf import settings  

class cart_table(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # Use settings.AUTH_USER_MODEL
    product_ids = ArrayField(models.IntegerField(), blank=True, default=list)
    quandity = ArrayField(models.IntegerField(default=1), blank=True, default=list)
    total_price = models.IntegerField(default=0)

    def __str__(self):
        return f"Cart {self.id} for User {self.user_id}"
