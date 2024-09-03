from rest_framework import serializers
from .models import Checkout_Table
# from category_Table.serializers import CategorySerializer

class Checkout_Serializer(serializers.ModelSerializer):
    Check_product_id = serializers.IntegerField(write_only = True)

    class Meta:
        model = Checkout_Table
        fields = ["id","Check_User_id","Check_product_id","Check_Quantity"]
        read_only_fields=['id']