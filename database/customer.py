import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'
from bson import json_util
from datetime import datetime

my_client = pymongo.MongoClient(connect_string)
# First define the database name
dbname = my_client['sample_products']
# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
collection_name = dbname["customer_details"]

# customer = {
#     "username": "user",
#     "email_id": "user@gmail.com",
#     "password": "password",
# 	"comments": [
# 		{
# 			"product_name": "Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
# 			"date": datetime.utcnow(),
# 			"description": "Amazing product with great features. The image and sound quality is perfect.",
# 			"rating": 5
# 		},
# 		{
# 			"product_name": "Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver, 2022 Model)",
# 			"date": datetime.utcnow(),
# 			"description": "Very spacious and well organized.",
# 			"rating": 5
# 		}
# 	],
# 	"wishlist": [
# 		{
# 			"product_name": "Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
# 			"date": datetime.utcnow(),
# 		},
# 		{
# 			"product_name": "Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver, 2022 Model)",
# 			"date": datetime.utcnow(),
# 		}
# 	]
# }

# Insert the documents
#collection_name.insert_many([customer])
# Check the count
# count = collection_name.count_documents({})
# print(count)

# # Read the documents
# customer_details = collection_name.find({})
# # Print on the terminal
# for r in customer_details:
#     print(r["username"], format("\n"))

def get_customer(cookie):
	customer_details = collection_name.find({"cookies": cookie})
	if(customer_details == None):
		return "User not found"
	else:
		return customer_details

def get_customer_comments(uname, pword):
	customer_details = collection_name.find({"username": uname, "password": pword}, {"comments": 1})
	if(customer_details == None):
		return "User not found"
	else:
		return customer_details


# print(get_customer("user", "password")+"\n")
# print(get_customer_comments("user", "password"))
