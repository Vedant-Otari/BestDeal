from bs4 import BeautifulSoup
import requests
import json
import pymongo
from bson import json_util
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'


def getFlipkartProductDetail(productName):

    HEADERS = ({'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                'Accept-Language': 'en-US, en;q=0.5'})
    productName = productName.replace('&', 'and')
    URL = "https://www.flipkart.com/search?q="+productName
    webpage = requests.get(URL, headers=HEADERS)
    soup = BeautifulSoup(webpage.content, "lxml")

    # Scraping the product name
    
    if soup.find("div", attrs={"class": '_13oc-S _1t9ceu'}):

        productNameSoup = soup.find("a", attrs={"class": 'IRpwTa'})
        productNameStr = productNameSoup.text

        productLinkSoup = soup.find("a", attrs={"class": 'IRpwTa'})
        productLink = "https://www.flipkart.com"+productLinkSoup['href']

        productPriceSoup = soup.find("div", attrs={"class": '_30jeq3'})
        productPriceStr = productPriceSoup.text.replace('₹', '')
        productPriceInt = int(productPriceStr.replace(',', ''))

        productPriceActualSoup = soup.find(
            "div", attrs={"class": '_3I9_wc'})
        productPriceActualStr = productPriceActualSoup.text.replace(
            '.', '').replace('₹', '')
        productPriceActualInt = int(productPriceActualStr.replace(',', ''))

        productDiscount = (productPriceActualInt -
                        productPriceInt)/productPriceActualInt*100
        
        productImageSoup = soup.find("div", attrs={"class": '_312yBx SFzpgZ'})
        productImageStr = productImageSoup.img['src']

        productData = {
            "link": productLink,
            "name": productNameStr,
            "image": productImageStr,
            "price": productPriceInt,
            "mrp": productPriceActualInt,
            "discount": productDiscount
        }

        addDB(productData)
        return json_util.dumps(productData)

    elif soup.find("div", attrs={"class": '_13oc-S'}):
        div = soup.find("div", attrs={"class": '_13oc-S'})
        divStyle = div.div['style']
        print(divStyle)
                
        if(divStyle=="width:100%"):
            productNameSoup = soup.find("div", attrs={"class": '_4rR01T'})
            productNameStr = productNameSoup.text

            productLinkSoup = soup.find("a", attrs={"class": '_1fQZEK'})
            productLink = "https://www.flipkart.com"+productLinkSoup['href']

            productPriceSoup = soup.find("div", attrs={"class": '_30jeq3 _1_WHN1'})
            productPriceStr = productPriceSoup.text.replace('₹', '')
            productPriceInt = int(productPriceStr.replace(',', ''))

            productPriceActualSoup = soup.find("div", attrs={"class": '_3I9_wc _27UcVY'})
            productPriceActualStr = productPriceActualSoup.text.replace( '.', '').replace('₹', '')
            productPriceActualInt = int(productPriceActualStr.replace(',', ''))

            productDiscount = (productPriceActualInt - productPriceInt)/productPriceActualInt*100
            
            productImageSoup = soup.find("div", attrs={"class": 'CXW8mj'})
            productImageStr = productImageSoup.img['src']

        elif(divStyle=="width:25%"):
            productNameSoup = soup.find("a", attrs={"class": 's1Q9rs'})
            productNameStr = productNameSoup.text
            productLink = "https://www.flipkart.com"+productNameSoup['href']

            productPriceSoup = soup.find("div", attrs={"class": '_30jeq3'})
            productPriceStr = productPriceSoup.text.replace('₹', '')
            productPriceInt = int(productPriceStr.replace(',', ''))

            productPriceActualSoup = soup.find("div", attrs={"class": '_3I9_wc'})
            productPriceActualStr = productPriceActualSoup.text.replace( '.', '').replace('₹', '')
            productPriceActualInt = int(productPriceActualStr.replace(',', ''))

            productDiscount = (productPriceActualInt - productPriceInt)/productPriceActualInt*100
            
            productImageSoup = soup.find("div", attrs={"class": 'CXW8mj'})
            productImageStr = productImageSoup.img['src']

        productData = {
            "link": productLink,
            "name": productNameStr,
            "image": productImageStr,
            "price": productPriceInt,
            "mrp": productPriceActualInt,
            "discount": productDiscount
        }

        addDB(productData)
        return json_util.dumps(productData)

    else:
        productNameSoup = soup.find("div", attrs={"class": '_4rR01T'})
        productNameStr = productNameSoup.text

        # Scraping the product link
        productLinkSoup = soup.find("a", attrs={"class": '_1fQZEK'})
        productLink = "https://www.flipkart.com"+productLinkSoup['href']

        # Scraping the product price discounted
        productPriceSoup = soup.find("div", attrs={"class": '_30jeq3 _1_WHN1'})
        productPriceStr = productPriceSoup.text.replace('₹', '')
        productPriceInt = int(productPriceStr.replace(',', ''))

        # Scraping the product price actual
        productPriceActualSoup = soup.find(
            "div", attrs={"class": '_3I9_wc _27UcVY'})
        productPriceActualStr = productPriceActualSoup.text.replace(
            '.', '').replace('₹', '')
        productPriceActualInt = int(productPriceActualStr.replace(',', ''))

        productDiscount = (productPriceActualInt -
                        productPriceInt)/productPriceActualInt*100


    #             # Scraping the product image
        productImageSoup = soup.find("div", attrs={"class": '_2QcLo-'})
        productImageStr = productImageSoup.div.div.img['src']


    #             # Scraping the product stars
        productStarSoup = soup.find("div", attrs={"class": '_3LWZlK'})
        producStarStr = productStarSoup.text


    #             # Scraping the ratings
        productRatingSoup = soup.find("span", attrs={"class": '_2_R_DZ'})
        producRatingStr = productRatingSoup.span.text.split()[0]
    #     print(producRatingStr)

    #     # TODO
    #     # productNameSoup = soup.find("p",attrs={"class":'a-spacing-mini a-size-base-plus'})
    #     # # productNameStr = productNameSoup.text
    #     # print(productNameSoup)

        productData = {
            "link": productLink,
            "name": productNameStr,
            "image": productImageStr,
            "price": productPriceInt,
            "mrp": productPriceActualInt,
            "discount": productDiscount,
            "stars": producStarStr,
            "ratings": producRatingStr,
            "website" : "flipkart"
        }

        addDB(productData)
        return json_util.dumps(productData)

# print(getProductDetail())


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
        { "$set": {
                    "name": product["name"],
                    "image": product["image"],
                    "price": product["price"],
                    "mrp": product["mrp"],
                    "discount": product["discount"],
                    # "stars": product["stars"],
                    # "ratings": product["ratings"],
                    "website": "amazon"
                    },
            "$inc": { "view_count": 1}
        },
        upsert=True
        )
    



