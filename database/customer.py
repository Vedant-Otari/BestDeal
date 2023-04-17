import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'

my_client = pymongo.MongoClient(connect_string)
# First define the database name
dbname = my_client['sample_products']
# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
collection_name = dbname["customer_details"]

customer = {
    "username": "user",
    "password": "password"
}

# Insert the documents
collection_name.insert_many([customer])
# Check the count
count = collection_name.count_documents({})
print(count)

# Read the documents
customer_details = collection_name.find({})
# Print on the terminal
for r in customer_details:
    print(r["username"], format("\n"))