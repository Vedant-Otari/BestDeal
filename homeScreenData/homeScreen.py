import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'

def getHomeScreenItems():
    my_client = pymongo.MongoClient(connect_string)
    dbname = my_client['sample_products']
    collection_name = dbname["product_details"]
    product_details = collection_name.aggregate([ { "$sample" : { "size": 1 } } ])
    # for i in product_details:
    print(type(product_details))
    return product_details

print(getHomeScreenItems())