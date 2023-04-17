import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'
from bson import json_util

my_client = pymongo.MongoClient(connect_string)
# First define the database name
dbname = my_client['sample_products']
# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
collection_name = dbname["customer_details"]

customer = {
    "username": "user",
    "email_id": "user@gmail.com",
    "password": "password"
}

# Insert the documents
#collection_name.insert_many([customer])
# Check the count
count = collection_name.count_documents({})
print(count)

# Read the documents
customer_details = collection_name.find({})
# Print on the terminal
for r in customer_details:
    print(r["username"], format("\n"))

def get_customer(uname, pword):
	customer_details = collection_name.find({"username": uname, "password": pword})
	if(customer_details == None):
		return "User not found \n"
	else:
		return json_util.dumps(customer_details)

print(get_customer("user", "password"))
