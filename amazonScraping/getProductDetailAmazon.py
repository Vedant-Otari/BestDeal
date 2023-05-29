from bs4 import BeautifulSoup
import requests
import json
from .getAsinAmazon import getASIN
import pymongo
from bson import json_util
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'
from .test import getDriver
from selenium.webdriver.common.by import By

def getAmazonProductDetail(productName):
    
    driver = getDriver()
    
#     HEADERS = ({'User-Agent':
#                         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
#                         'Accept-Language': 'en-US, en;q=0.5'})
    
    ASIN = getASIN(productName)
    URL = "https://www.amazon.in/dp/"+ASIN

    driver.get(URL)

    productName = driver.find_element(By.ID, "productTitle")
    productNameStr = productName.text

    productPrice = driver.execute_script("return document.getElementsByClassName('a-price-whole');") #driver.find_element(By.CLASS_NAME, "a-price-whole")
    productPriceStr = productPrice[4].text.replace('.', '').replace(',', '')
    if productPriceStr == '':
        productPriceStr = productPrice[0].text.replace('.', '').replace(',', '')

    productPriceInt = int(productPriceStr)

    productPriceActual = driver.execute_script("return document.getElementsByClassName('a-price a-text-price');") #driver.find_element(By.CLASS_NAME, "a-price a-text-price")
    productPriceActualStr = productPriceActual[0].text
    productPriceActualInt = int(productPriceActualStr.replace(',', '').replace('.', '').replace('₹', ''))

    productDiscount = (productPriceActualInt - productPriceInt)/productPriceActualInt*100

    productImage = driver.find_element(By.ID, "imgTagWrapperId")
    productImage = productImage.find_element(By.TAG_NAME, "img")
    productImageStr = productImage.get_attribute("src")

    productStar= driver.execute_script("return document.getElementsByClassName('a-size-base a-color-base');") #driver.find_element(By.XPATH,"/html/body/div[2]/div[2]/div[5]/div[32]/div/div/div/div/div/div[1]/span[1]/div/div/div/div/div/div[2]/div/div[2]/div/span/span")
    producStarStr = productStar[1].text

    productRating = driver.execute_script("return document.getElementById('acrCustomerReviewText');") #driver.find_element(By.XPATH,"/html/body/div[2]/div[2]/div[5]/div[32]/div/div/div/div/div/div[1]/span[1]/div/div/div/div/div/div[3]/span")
    producRatingStr = productRating.text

    productData = {
        "link" : "https://www.amazon.in/dp/"+ASIN,
        "name" : productNameStr,
        "image" : productImageStr,
        "price": productPriceInt,
        "mrp" : productPriceActualInt,
        "discount" : productDiscount,
        "stars" : producStarStr,
        "ratings" : producRatingStr,
        "website" : "amazon"
    }

    driver.quit()

    return json_util.dumps(productData)

def BS4Code(productName):
    
    HEADERS = ({'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                        'Accept-Language': 'en-US, en;q=0.5'})
    
    ASIN = getASIN(productName)
    URL = "https://www.amazon.in/dp/"+ASIN

    webpage = requests.get(URL, headers=HEADERS)
    soup = BeautifulSoup(webpage.content, "lxml")

            # Scraping the product name
    productNameSoup = soup.find("span",attrs={"id":'productTitle'})
#     print(soup)
    productNameStr = productNameSoup.text.strip()

            # Scraping the product price discounted
    productPriceSoup = soup.find("span",attrs={"class":'a-price-whole'})
    productPriceStr = productPriceSoup.text.replace('.', '')
    productPriceInt = int(productPriceStr.replace(',', ''))

            # Scraping the product price actual
    productPriceActualSoup = soup.find("span",attrs={"class":'a-price a-text-price'})
    productPriceActualStr = productPriceActualSoup.span.text.replace('.', '').replace('₹', '')
    productPriceActualInt = int(productPriceActualStr.replace(',', ''))

    productDiscount = (productPriceActualInt - productPriceInt)/productPriceActualInt*100

            # Scraping the product image
    productImageSoup = soup.find("div",attrs={"id":'imgTagWrapperId'})
    productImageStr = productImageSoup.img['src']
    
            # Scraping the product stars
    productStarSoup = soup.find("i",attrs={"class":'a-icon a-icon-star a-star-4-5'})
    producStarStr = productStarSoup.span.text[0:3]
            # Scraping the ratings 
    productRatingSoup = soup.find("span",attrs={"id":'acrCustomerReviewText'})
    producRatingStr = productRatingSoup.text.split()[0]

    # TODO
    # productNameSoup = soup.find("p",attrs={"class":'a-spacing-mini a-size-base-plus'})
    # # productNameStr = productNameSoup.text
    # print(productNameSoup)

    productData = {
        "link" : "https://www.amazon.in/dp/"+ASIN,
        "name" : productNameStr,
        "image" : productImageStr,
        "price": productPriceInt,
        "mrp" : productPriceActualInt,
        "discount" : productDiscount,
        "stars" : producStarStr,
        "ratings" : producRatingStr,
        "website" : "amazon"
    }

    addDB(productData)
    return json_util.dumps(productData)


def addDB(product):
    my_client = pymongo.MongoClient(connect_string)
    # First define the database name
    dbname = my_client['sample_products']
    # Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
    collection_name = dbname["product_details"]

    if(collection_name.count_documents({"name": product["name"]}) == 0):
        product["view_count"] = 1
        collection_name.insert_one(product)
    else:
        product["view_count"] = product["view_count"] + 1
        collection_name.replace_one({ "name": product["name"] }, product)
    