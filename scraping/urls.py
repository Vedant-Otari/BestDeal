from django.urls import path
from .views import *

urlpatterns = [
    path('api/amazon/<str:product>', getAmazonData),
    path('api/flipkart/<str:product>', getFlipkartData),
    path('api/product/<str:product>', getProductData),
]
