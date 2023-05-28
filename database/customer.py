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
# 			"product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
# 			"date": datetime.utcnow(),
# 			"description": "Amazing product with great features. The volume and sound quality is perfect.",
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
# 			"product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
# 			"date": datetime.utcnow(),
# 		},
# 		{
# 			"product_name": "Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver, 2022 Model)",
# 			"date": datetime.utcnow(),
# 		}
# 	]
# }


# customer1 = {
#     "username": "user1",
#     "email_id": "user1@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "The speaker has excellent sound quality and a sleek design. I highly recommend it!",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer2 = {
#     "username": "user2",
#     "email_id": "user2@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "I'm very satisfied with this speaker. It delivers rich bass and clear audio. Solid 4 out of 5!",
#             "rating": 4
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer3 = {
#     "username": "user3",
#     "email_id": "user3@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "The cable was not compatible between my macbook and iphone.  Also the connector came apart and the cables started fraying.",
#             "rating": 1
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer4 = {
#     "username": "user4",
#     "email_id": "user4@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "I absolutely love this speaker! The sound is crystal clear, and it's easy to connect. A solid 5 out of 5!",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer5 = {
#     "username": "user5",
#     "email_id": "user5@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "The speaker is compact and portable, making it perfect for travel. Definitely a 4 out of 5.",
#             "rating": 4
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer6 = {
#     "username": "user6",
#     "email_id": "user6@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "This product is useless garbage. Don't buy it. Terrible sound quality.",
#             "rating": 1
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer7 = {
#     "username": "user7",
#     "email_id": "user7@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "This speaker exceeded my expectations! The sound quality is fantastic, and the battery life is impressive. Solid 5 out of 5!",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer8 = {
#     "username": "user8",
#     "email_id": "user8@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "Bad build quality. Battery dosent work properly and the case was damaged when I received it.",
#             "rating": 1
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer9 = {
#     "username": "user9",
#     "email_id": "user9@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "This speaker is excellent! The sound is crisp and clear, and it's easy to set up. Definitely deserves a 5 out of 5!",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer10 = {
#     "username": "user10",
#     "email_id": "user10@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow(),
#             "description": "I'm very impressed with the speaker's durability. It feels solid and well-built. A solid 4 out of 5!",
#             "rating": 4
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "Bose SoundLink Color Bluetooth Speaker II Portable Blue...",
#             "date": datetime.utcnow()
#         }
#     ]
# }


# #Insert the documents
# collection_name.insert_many([customer, customer1, customer2, customer3, customer4, customer5, customer6, customer7, customer8, customer9, customer10])
# #Check the count
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

def add_product_to_wishlist(product_name, cookie):
	customer_details = collection_name.find({"cookies": cookie})

	new_wishlist_item = {
    "product_name": str(product_name),
    "date": datetime.utcnow()
	}

	customer_details["wishlist"].append(new_wishlist_item)
	collection_name.update_one({"cookies": cookie}, {"$set": customer_details})

def remove_product_from_wishlist(product_name, cookie):
	customer_details = collection_name.find({"cookies": cookie})

	# Remove the wishlist item based on its product_name
	product_name_to_remove = str(product_name)
	wishlist = customer_details["wishlist"]
	updated_wishlist = [item for item in wishlist if item["product_name"] != product_name_to_remove]

	#Update the wishlist in the document
	collection_name.update_one({"cookies": cookie}, {"$set": {"wishlist": updated_wishlist}})

# print(get_customer("user", "password")+"\n")
# print(get_customer_comments("user", "password"))
