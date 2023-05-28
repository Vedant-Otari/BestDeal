from django.conf import settings
from django.shortcuts import render
from bson import json_util
import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'

my_client = pymongo.MongoClient(connect_string)
# First define the database name
dbname = my_client['sample_products']
# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
notification_collection = dbname["notification"]

def add_notification(username, product_name, current_price, target_price):
    notification = {
        "username" : str(username),
        "product_name": str(product_name),
        "current_price": current_price,
        "target_price": target_price

    }
    notification_collection.insert_one(notification)

add_notification("test user", "test product", 15000, 12000)