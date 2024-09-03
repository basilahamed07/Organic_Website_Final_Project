from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import Checkout_ViewSet
 
router = DefaultRouter()
router.register('', Checkout_ViewSet, basename='Checkout')
app_name ='Checkout'
 
urlpatterns=[
    path('', include(router.urls))
]