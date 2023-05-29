from django.conf import settings
from django.shortcuts import render
from bson import json_util
import pymongo
from .getProductDetailAmazon import amazonProductDetail
from .getProductDetailFlipkart import flipkartProductDetail
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'
from email.message import EmailMessage
import smtplib
from background_task import background



my_client = pymongo.MongoClient(connect_string)
# First define the database name
dbname = my_client['sample_products']
# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
notification_collection = dbname["notification"]

def add_notification(cookie, product_name, productLink, target_price, website):
    customer_details = collection_name.find({"cookies": cookie})
    
    notification = {
        "username" : customer_details["username"],
        "email" : customer_details["email_id"],
        "product_name": str(product_name),
        "productLink" : productLink,
        "target_price": target_price,
        "website" : website,
        "status" : "notify"
    }
    notification_collection.insert_one(notification)

# add_notification("test user","sklord25@gmail.com", "test product", "https://www.amazon.in/dp/B09SH8QD3G", 60000, "amazon")

def checkPrice(productLink, targetPrice,website):
    if (website=="amazon"):
        dataAmazon = amazonProductDetail(productLink)
        price = json_util.loads(dataAmazon)['price']
        if price > targetPrice:
            return False
        else:
            return price
    else:
        dataFlipKart = flipkartProductDetail(productLink)
        price = json_util.loads(dataFlipKart)['price']
        if price > targetPrice:
            return False
        else:
            return price

def checkNotificationStatus():
    notification_details = notification_collection.find({})
    for i in notification_details:
        print(i["status"])
        if(i["status"]=="notify"):
            result = checkPrice(i["productLink"], i["target_price"], i["website"])
            if(result):
                sendNotification(i["username"], i["email"], i["product_name"], i["productLink"], result)
                notification_collection.update_one({"_id": i["_id"]}, {"$set": {"status":"doen"}})

def sendNotification(cookie, product_name, productLink, price):
    customer_details = collection_name.find({"cookies": cookie})

    username = customer_details["username"]
    email = customer_details["email_id"]
    
    import random
    recivers = [email]
    msg = EmailMessage()
    msg['subject'] = "Price Droped"
    msg['from'] = "officialbestdeal2023@gmail.com"
    msg['to'] = ", ".join(recivers)

    code = random.randrange(1001, 9999) 

    text = f""" Hello {username}, Having grate day? Guase whate it's going to be greater.\n 
                    The price of {product_name} just droped to {price}.\n 
                    clink the {productLink} to grab the offer """
    print(text)
    msg.set_content(text)
    # with open('Untitled.png','rb') as f:
    #     content = f.read()
    #     msg.add_attachment(content,maintype='application', subtype='png', filename='YourName.png')
    try:
        server = smtplib.SMTP("smtp.gmail.com",587)
        server.ehlo()
        server.starttls()
        server.login("officialbestdeal2023@gmail.com","rktqfcijyxkriwhu")


        server.send_message(msg)
        print("done")
    except Exception as e:
        print(e)
    # finally:
    #     collection_name = dbname["verification"]
    #     collection_name.update_one({"email_id": email},{"$set": {"otp":str(code)}}, upsert=True)
    #     server.quit()

# checkPrice("https://www.amazon.in/dp/B09SH8QD3G", 1234, "amazon")


@background(schedule=60*5)
def notificationBackground():
    print("bg called")
    checkNotificationStatus()


