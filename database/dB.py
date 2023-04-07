from django.conf import settings
from django.shortcuts import render
import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'

my_client = pymongo.MongoClient(connect_string)
# First define the database name
dbname = my_client['sample_products']
# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
collection_name = dbname["product_details"]

# let's create two documents
product_1 = {
    "ASIN": "B09SH8QD3G",
    "product_name": "Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
    "discounted_price": 57998,
    "actual_price": 85999,
    "discount_percentage": 32.56,
    "image_url": "https://m.media-amazon.com/images/I/41mt0QQkvKL._SX300_SY300_QL70_ML2_.jpg",
    "product_rating": 4.3,
    "product_rating_count": 1312
}
product_2 = {
    "ASIN": "B08SC2ZTDP",
    "product_name": "Samsung 192 L 2 Star Direct Cool Single Door Refrigerator (RR19A241BGS/NL, Grey Silver, 2022 Model)",
    "discounted_price": 13190,
    "actual_price": 14990,
    "discount_percentage": 12.01,
    "image_url": "https://m.media-amazon.com/images/I/21W8zxx8rLS._SX342_SY445_QL70_ML2_.jpg",
    "product_rating": 4.3,
    "product_rating_count": 5704
}
# Insert the documents
collection_name.insert_many([product_1, product_2])
# Check the count
count = collection_name.count_documents({})
print(count)

# Read the documents
product_details = collection_name.find({})
# Print on the terminal
for r in product_details:
    print(r["product_name"], format("\n"))
# Update one document
#update_data = collection_name.update_one({'product_id':'B09SH8QD3G'}, {'$set':{'product_rating':4.4}})

# Delete one document
delete_data = collection_name.delete_one({'product_id': 'B09SH8QD3G'})
# delete_data = collection_name.delete_many({})

