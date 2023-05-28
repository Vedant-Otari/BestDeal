from bson import json_util
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'
from .test import getDriver
from selenium.webdriver.common.by import By

def amazonProductDetail(productLink):
    
    driver = getDriver()
    
    driver.get(productLink)

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
