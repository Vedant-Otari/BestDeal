from bs4 import BeautifulSoup
import requests
import json
from .getAsinAmazon import getASIN
import pymongo
from bson import json_util
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'

def getAmazonProductDetail(productName):
    
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
        "ratings" : producRatingStr
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
        collection_name.update_one(
        { "name": product["name"] },
        { "$inc": { "view_count": 1}}
    )