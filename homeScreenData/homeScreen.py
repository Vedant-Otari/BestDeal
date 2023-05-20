import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'

my_client = pymongo.MongoClient(connect_string)
dbname = my_client['sample_products']
collection_name = dbname["product_details"]

def getHomeScreenItems():
    product_details = collection_name.aggregate([ { "$sample" : { "size": 10 } } ])
    # for i in product_details:
    print(type(product_details))
    return product_details

def getMostViewedItems():
    product_details = collection_name.aggregate([ { "$sort" : { "view_count": -1 } }, {"$limit": 5} ])
    # for i in product_details:
    print(type(product_details))
    return product_details

#print(getMostViewedItems())

# for document in getMostViewedItems():
#     print(document)
#     print("\n")