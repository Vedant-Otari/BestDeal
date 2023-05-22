import pymongo
import bcrypt 
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.message import EmailMessage
import smtplib
import ssl
connect_string = 'mongodb+srv://Sanket:Sanket123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'

my_client = pymongo.MongoClient(connect_string)
# First define the database name
dbname = my_client['sample_products']
# Now get/create collection name (remember that you will see the database in your mongodb cluster only after you create a collection
collection_name = dbname["customer_details"]

def addCookies(username, password, cookie):
    collection_name.update_one({"username": username, "password": password}, {"$set": {"cookies":cookie}})


def isUserExist(username):
    customer_details = collection_name.find({"username": username})
    if len(list(customer_details.clone()))>0:
        return True
    else:
        return False

def signUp(username, email, password):
    cookie = username+password
    cookie = cookie.encode('utf-8')
    hashedPassword = bcrypt.hashpw(cookie, bcrypt.gensalt())
    customer = {
        "username": username,
        "email_id": email,
        "password": password,
        "cookies": str(hashedPassword)
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
            "msg" : "Account created succesfully"
        }

def signIn(username, password):
    if isUserExist(username):
        customer_details = collection_name.find({"username": username, "password": password})
        if len(list(customer_details.clone()))>0:
            cookie = username+password
            cookie = cookie.encode('utf-8')
            hashedPassword = bcrypt.hashpw(cookie, bcrypt.gensalt())
            addCookies(username, password, str(hashedPassword))
            return {
                "error" : False,
                "msg" : "Sign In successful",
                "cookies" : str(hashedPassword)
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

def sendVerificationCodeEmail(email):
    import random
    recivers = ["sklord25@gmail.com"]  # to be updated the email by user
    msg = EmailMessage()
    msg['subject'] = "Testing mail code"
    msg['from'] = "lordmovie555@gmail.com"   #to be updated mail created for BestDeal
    msg['to'] = ", ".join(recivers)

    code = random.randrange(1001, 9999) 

    text = """ Just checking the mail automation code Your Verification code is: """+ str(code)
    msg.set_content(text)
    # with open('Untitled.png','rb') as f:
    #     content = f.read()
    #     msg.add_attachment(content,maintype='application', subtype='png', filename='YourName.png')
    try:
        server = smtplib.SMTP("smtp.gmail.com",587)
        server.ehlo()
        server.starttls()
        server.login("officialbestdeal2023@gmail.com","bestdeal@2023")


        server.send_message(msg)
        print("done")
    except Exception as e:
        print(e)
    finally:
        collection_name = dbname["verification"]
        collection_name.update_one({"email_id": email},{"$set": {"otp":str(code)}}, upsert=True)
        server.quit()

def verify(email, code):
    collection_name = dbname["verification"]
    doc = collection_name.find({"email_id": email, "otp":code})
    array = []
    for obj in doc:
        array.append(obj["email_id"])
    print(len(array))
    if len(array):
        return True
    else:
        return False

# sendVerificationCodeEmail("sklord25@gmail.com")
# print(verify("sklord25@gmail.com", "2222"))

# sendVerificationCodeEmail("email")
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