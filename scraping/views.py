import json
from bson import json_util
from django.shortcuts import render
from django.http import HttpResponse
from amazonScraping.getProductDetailAmazon import getAmazonProductDetail
from flipkartScraping.getProductDetailFlipkart import getFlipkartProductDetail
from homeScreenData.homeScreen import getHomeScreenItems
from homeScreenData.homeScreen import getMostViewedItems
from signinSignup.loginInterface import signIn,signUp
from database.customer import get_customer
from commentAnalysis.model import getSentiment, getWordClouds


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
    return HttpResponse(json_util.dumps(L))

def getRankedItem(request):
    data = getMostViewedItems()
    L = []
    for i in data:
        L.append(i)
    print(L)
    return HttpResponse(json_util.dumps(L))

def isSignIn(request):
    userName = request.GET['username']
    password = request.GET['password']
    res = signIn(userName, password)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json.dumps(L))

def isSignUp(request):
    userName = request.GET['username']
    password = request.GET['password']
    email = request.GET['email']
    res = signUp(userName, email, password)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json.dumps(L))


def getCustomerData(request):
    cookie = request.GET['cookie']
    res = get_customer(cookie)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json.dumps(L))

def getProductSentiment(request):
    productName = request.GET['product_name']
    res = getSentiment(productName)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json.dumps(L))

def getProductWordClouds(request):
    productName = request.GET['product_name']
    res = getWordClouds(productName)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json.dumps(L))