from bs4 import BeautifulSoup
import requests
import json

def getFlipkartProductDetail(productName):
    
    HEADERS = ({'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
                        'Accept-Language': 'en-US, en;q=0.5'})
    URL = "https://www.flipkart.com/search?q="+productName
    webpage = requests.get(URL, headers=HEADERS)
    soup = BeautifulSoup(webpage.content, "lxml")

            # Scraping the product name
    productNameSoup = soup.find("div",attrs={"class":'_4rR01T'})
    productNameStr = productNameSoup.text

            # Scraping the product link
    productLinkSoup = soup.find("a",attrs={"class":'_1fQZEK'})
    productLink = "https://www.flipkart.com"+productLinkSoup['href']   




            # Scraping the product price discounted
    productPriceSoup = soup.find("div",attrs={"class":'_30jeq3 _1_WHN1'})
    productPriceStr = productPriceSoup.text.replace('₹', '')
    productPriceInt = int(productPriceStr.replace(',', ''))
    

            # Scraping the product price actual
    productPriceActualSoup = soup.find("div",attrs={"class":'_3I9_wc _27UcVY'})
    productPriceActualStr = productPriceActualSoup.text.replace('.', '').replace('₹', '')
    productPriceActualInt = int(productPriceActualStr.replace(',', ''))


    productDiscount = (productPriceActualInt - productPriceInt)/productPriceActualInt*100


#             # Scraping the product image
    productImageSoup = soup.find("div",attrs={"class":'_2QcLo-'})
    productImageStr = productImageSoup.div.div.img['src']
    
    
#             # Scraping the product stars
    productStarSoup = soup.find("div",attrs={"class":'_3LWZlK'})
    producStarStr = productStarSoup.text
        

#             # Scraping the ratings 
    productRatingSoup = soup.find("span",attrs={"class":'_2_R_DZ'})
    producRatingStr = productRatingSoup.span.text.split()[0]
#     print(producRatingStr)

#     # TODO
#     # productNameSoup = soup.find("p",attrs={"class":'a-spacing-mini a-size-base-plus'})
#     # # productNameStr = productNameSoup.text
#     # print(productNameSoup)

    productData = {
        "link" : productLink,
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
