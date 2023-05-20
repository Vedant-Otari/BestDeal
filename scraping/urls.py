from django.urls import path
from .views import *

urlpatterns = [
    path('api/amazon/<str:product>', getAmazonData),
    path('api/flipkart/<str:product>', getFlipkartData),
    path('api/product/<str:product>', getProductData),
    path('api/recomendations', getRecomendationItem),
    path('api/rankedItems', getRankedItem),
    path('api/signIn', isSignIn),
    path('api/signUp', isSignUp),
    path('api/customer_details', getCustomerData),
    path('api/ProductSentiment', getProductSentiment),
    path('api/ProductWordClouds', getWordClouds)
]
