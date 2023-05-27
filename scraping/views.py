import json
from bson import json_util
from django.shortcuts import render
from django.http import HttpResponse
from amazonScraping.getProductDetailAmazon import getAmazonProductDetail
from flipkartScraping.getProductDetailFlipkart import getFlipkartProductDetail
from homeScreenData.homeScreen import getHomeScreenItems
from homeScreenData.homeScreen import getMostViewedItems
from signinSignup.loginInterface import signIn,signUp, verify
from database.customer import get_customer
from database.dB import get_product_details
from commentAnalysis.model import getComments, getSentiment, getWordClouds
from productPriceChart.priceChart import getPriceHistoryChart


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
    OTP = request.GET['OTP']
    res = signUp(userName, email, password, OTP)
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
    return HttpResponse(json_util.dumps(L))

def getProductFromDB(request):
    productName = request.GET['product_name']
    res = get_product_details(productName)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json_util.dumps(L))

def getProductComments(request):
    productName = request.GET['product_name']
    res = getComments(productName)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json_util.dumps(L))

def getProductSentiment(request):
    productName = request.GET['product_name']
    res = getSentiment(productName)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json.dumps(L))

def getProductWordClouds(request):
    productName = request.GET['product_name']
    res = {}
    res = getWordClouds(productName)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(json.dumps(L))

def getProductChart(request):
    productName = request.GET['product_name']
    productName = getPriceHistoryChart(productName)
    
    return HttpResponse(productName)

def verifyOTP(request):
    code = request.GET['OTP']
    email = request.GET['email']
    result = verify(code, email)
    return HttpResponse(json_util.dumps(result))
