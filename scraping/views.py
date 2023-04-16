import json
from django.shortcuts import render
from django.http import HttpResponse
from amazonScraping.getProductDetailAmazon import getAmazonProductDetail
from flipkartScraping.getProductDetailFlipkart import getFlipkartProductDetail
from homeScreenData.homeScreen import getHomeScreenItems


# Create your views here.
def hello(request):
    return HttpResponse("Hello Try test")

def getAmazonData(request, product):
    data = getAmazonProductDetail(product)
    return HttpResponse(data)

def getFlipkartData(request, product):
    data = getFlipkartProductDetail(product)
    return HttpResponse(data)

def getProductData(request, product):
    data = getAmazonProductDetail(product)
    data += getFlipkartProductDetail(product)
    return HttpResponse(data)

def getRecomendationItem(request):
    data = getHomeScreenItems()
    L = []
    for i in data:
        L.append(i)
    print(L)
    return HttpResponse("str(data)")