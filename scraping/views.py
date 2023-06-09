import json
from bson import json_util
from django.shortcuts import render
from django.http import HttpResponse
from amazonScraping.getProductDetailAmazon import getAmazonProductDetail
from flipkartScraping.getProductDetailFlipkart import getFlipkartProductDetail
from homeScreenData.homeScreen import getHomeScreenItems
from homeScreenData.homeScreen import getMostViewedItems
from signinSignup.loginInterface import signIn,signUp,sendVerificationCodeEmail
from database.customer import get_customer, add_product_to_wishlist, remove_product_from_wishlist, add_product_comment, delete_product_comment, get_specific_user_product_comment
from database.dB import get_product_details
from commentAnalysis.model import getComments, getSentiment, getWordClouds
from productPriceChart.priceChart import getPriceHistoryChart
from notification.notification import add_notification
from django.http import JsonResponse


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
    res = getWordClouds(productName)
    L = []
    L.append(res)
    print(res)
    return HttpResponse(res)

def getProductChart(request):
    productName = request.GET['product_name']
    temp = getPriceHistoryChart(productName)
    L=[productName]
    # return render(request, "chart.html")
    return HttpResponse(temp)
    # serialized_html = json.dumps({'html': productName})
    # return HttpResponse(serialized_html, content_type='application/json')
    # return HttpResponse(json_util.dumps(L))

def sendVerificationCode(request):
    email = request.GET['email']
    result = sendVerificationCodeEmail(email)
    
    return HttpResponse(json_util.dumps(result))

def addProductToWishlist(request):
    productName = request.GET['product_name']
    cookie = request.GET['cookie']
    # add_notification(cookie, product_name, productLink, target_price, website)
    add_product_to_wishlist(productName, cookie)
    return HttpResponse("")
    
def removeProductFromWishlist(request):
    cookie = request.GET['cookie']
    productName = request.GET['product_name']
    remove_product_from_wishlist(productName, cookie)

def addProductComment(request):
    product_name = request.GET['product_name']
    description = request.GET['description']
    rating = request.GET['rating']
    cookie = request.GET['cookie']
    result = add_product_comment(product_name, description, rating, cookie)
    return HttpResponse(json_util.dumps(result))

def getSpecificUserProductComment(request):
    print(request)
    product_name = request.GET['product_name']
    cookie = request.GET['cookie']
    result = get_specific_user_product_comment(product_name, cookie)
    return HttpResponse(json_util.dumps(result))

# def updateProductComment(request):
#     product_name = request.GET['product_name']
#     description = request.GET['description']
#     rating = request.GET['rating']
#     cookie = request.GET['cookie']
#     update_product_comment(product_name, description, rating, cookie)

def deleteProductComment(request):
    product_name = request.GET['product_name']
    cookie = request.GET['cookie']
    delete_product_comment(product_name, cookie)

def addNotification(request):
    product_name = request.GET['product_name']
    productLink = request.GET['productLink']
    target_price = request.GET['target_price']
    cookie = request.GET['cookie']
    website = request.GET['website']
    add_notification(cookie, product_name, productLink, target_price, website)
    