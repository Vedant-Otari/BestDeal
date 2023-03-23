from bs4 import BeautifulSoup
import requests
import json
from .getAsinAmazon import getASIN

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
    productNameStr = productNameSoup.text

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

    return json.dumps(productData)

# print(getProductDetail())
