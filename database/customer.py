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
# 			"product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
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
# 			"product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
# 			"date": datetime.utcnow(),
# 		},
# 		{
# 			"product_name": "Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver, 2022 Model)",
# 			"date": datetime.utcnow(),
# 		}
# 	]
# }


# customer1 = {
#     "username": "user11",
#     "email_id": "user11@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "This phone is amazing! The camera captures stunning photos, and the display is vibrant. It's a powerful device with great performance and ample storage. Highly recommended!",
# 			"rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer2 = {
#     "username": "user12",
#     "email_id": "user12@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "Disappointed with this phone. The battery life is poor, and the software interface is confusing. Very unimpressive.",
#             "rating": 2
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer3 = {
#     "username": "user13",
#     "email_id": "user13@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "I love this phone! The sleek design and stunning display are impressive. The camera performs exceptionally well, and the battery lasts all day. Worth every penny",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer4 = {
#     "username": "user14",
#     "email_id": "user14@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "Unhappy with this phone. Experienced lag and freezes soon after purchase. Fingerprint sensor and sound quality are disappointing.",
#             "rating": 2
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer5 = {
#     "username": "user15",
#     "email_id": "user15@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "Solid performer! The sharp and vibrant display provides an immersive viewing experience. Great features. Definitely a 5 out of 5.",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer6 = {
#     "username": "user16",
#     "email_id": "user16@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "This product is useless garbage. Don't buy it. Terrible sound quality.",
#             "rating": 1
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer7 = {
#     "username": "user17",
#     "email_id": "user17@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "This mobile is fantastic! The camera quality is outstanding, capturing stunning photos even in low light. The display is crisp and vibrant, making videos and gaming a delight. Highly satisfied with its performance!",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer8 = {
#     "username": "user18",
#     "email_id": "user18@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "Bad build quality. Battery dosent work properly and the case was damaged when I received it.",
#             "rating": 1
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer9 = {
#     "username": "user19",
#     "email_id": "user19@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "I'm loving this phone! The display is beautiful and immersive, with vibrant colors. The performance is snappy and multitasking is a breeze. The camera takes stunning photos, and the storage capacity is ample. Definitely worth the investment!",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer10 = {
#     "username": "user20",
#     "email_id": "user20@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "This phone exceeds expectations! The battery life is impressive. The UI is clean and user-friendly. The audio quality is excellent, providing an immersive audio experience. I'm extremely satisfied!",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }


# customer11 = {
#     "username": "user21",
#     "email_id": "user21@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "The device heats up a lot and gives a lot of lag. Very terrible experience.",
#             "rating": 1
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer12 = {
#     "username": "user22",
#     "email_id": "user22@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "This product is useless garbage. Don't buy it. Terrible sound quality.",
#             "rating": 1
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer13 = {
#     "username": "user23",
#     "email_id": "user23@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "This phone is incredible! Stunning camera, vibrant display, and smooth performance . Highly recommended .",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer14 = {
#     "username": "user24",
#     "email_id": "user24@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "Impressed with this mobile! Sleek design, long-lasting battery, and excellent user experience. Worth every penny",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }

# customer15 = {
#     "username": "user25",
#     "email_id": "user25@gmail.com",
#     "password": "password",
#     "comments": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow(),
#             "description": "Loving this phone! Beautiful display, powerful performance, and great camera quality. Best phone I've had!",
#             "rating": 5
#         }
#     ],
#     "wishlist": [
#         {
#             "product_name": "SAMSUNG Galaxy S22 Plus 5G (Phantom Black, 128 GB)",
#             "date": datetime.utcnow()
#         }
#     ]
# }



# #Insert the documents
# collection_name.insert_many([customer1, customer2, customer3, customer4, customer5, customer6, customer7, customer8, customer9, customer10, customer11, customer12, customer13, customer14, customer15])
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
