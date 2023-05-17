import pymongo
connect_string = 'mongodb+srv://Sanket:Sanket123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'

my_client = pymongo.MongoClient(connect_string)
# First define the database name
dbname = my_client['sample_products']
# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
collection_name = dbname["customer_details"]

def isUserExist(username):
    customer_details = collection_name.find({"username": username})
    if len(list(customer_details.clone()))>0:
        return True
    else:
        return False

def signUp(username, email, password):
    customer = {
        "username": username,
        "email_id": email,
        "password": password
    }
    if isUserExist(username):
       return {
           "error" : True,
           "msg" : "Username already exists"
       }
    else:
        collection_name.insert_many([customer])
        return {
            "error" : False,
            "msg" : "Account created succesfuly"
        }

def signIn(username, password):
    if isUserExist(username):
        customer_details = collection_name.find({"username": username, "password": password})
        if len(list(customer_details.clone()))>0:
            cookie = username+password
            cookie = cookie.encoding()
            return {
                "error" : False,
                "msg" : "Sign In successful",
                "cookies" : cookie
            }
        else:
            return {
                "error" : True,
                "msg" : "Invalid Password"
            }
    else:
        return {
            "error" : True,
            "msg" : "Invalid Username"
        }
# Insert the documents

# Check the count
# count = collection_name.count_documents({})
# print(count)

# # Read the documents
# customer_details = collection_name.find({})
# # Print on the terminal
# for r in customer_details:
#     print(r["username"], format("\n"))

# print(signUp("sanket","sklord25@gmail.com","12345678"))