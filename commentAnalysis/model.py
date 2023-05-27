import warnings
warnings.filterwarnings('ignore')
import pandas as pd
import json
from bson import json_util
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score
# import matplotlib.pyplot as plt
from wordcloud import WordCloud
import nltk
# nltk.download('punkt')
# nltk.download('stopwords')
from nltk.corpus import stopwords


data = pd.read_csv("commentAnalysis/TrainingData.csv")
# print(data.head(),format("\n"))
#print(data.info())
data.dropna(inplace=True)

#1,2->negative(i.e 0)
data.loc[data['Sentiment']<3,'Sentiment'] = 0
#3,4,5->positive(i.e 1)
data.loc[data['Sentiment']>=3,'Sentiment'] = 1


stp_words=stopwords.words('english')
def clean_review(review):
    cleanreview=" ".join(word for word in review.split() if word not in stp_words)
    return cleanreview

data['Review']=data['Review'].apply(clean_review)

cv = TfidfVectorizer(max_features=2500)
X = cv.fit_transform(data['Review'] ).toarray()


from sklearn.model_selection import train_test_split
x_train ,x_test,y_train,y_test=train_test_split(X, data['Sentiment'], test_size=0.95,random_state=42)


from sklearn.linear_model import LogisticRegression
model=LogisticRegression()
#Model fitting
model.fit(x_train,y_train)

# testing the model
# pred=model.predict(x_test)
# model accuracy
# print(accuracy_score(y_test,pred))
# print("Positive Reviews : ", (pred == 1).sum(), format("\n"))
# print("Negative Reviews : ", (pred == 0).sum())




import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'
my_client = pymongo.MongoClient(connect_string)
dbname = my_client['sample_products']
collection_name = dbname["customer_details"]


def getComments(productName):
    productComments = None
    productComments = collection_name.aggregate([
        {
            "$match": {
                "comments.product_name": str(productName)
            }
        },
        {
            "$project": {
                "comments": {
                    "$filter": {
                        "input": "$comments",
                        "cond": {
                            "$eq": ["$$this.product_name", str(productName)]
                        }
                    }
                }
            }
        },
        {
            "$project": {
                "username": 1,
                "comments.description": 1,
                "comments.rating": 1
            }
        }
    ])
    return productComments

def getSentiment(productName):
    productComments = getComments(productName)
    #return json_util.dumps(productComments)

    descriptions = []

    for document in productComments:
        comments = document["comments"]
        for comment in comments:
            description = comment["description"]
            descriptions.append(description)
            
    sentiment = {
            "positive": 0,
            "negative": 0
        }
 
    if len(descriptions)>0:
        # Create a dictionary from the arrays
        data = {"Description": descriptions}
        # Create a pandas DataFrame
        df = pd.DataFrame(data)

        df['Description']=df['Description'].apply(clean_review)
        X = cv.transform(df['Description'] ).toarray()
        pred=model.predict(X)
    
        sentiment = {
            "positive": (pred == 1).sum(),
            "negative": (pred == 0).sum()
        }
    return sentiment

print(getSentiment("Bose SoundLink Color Bluetooth Speaker II Portable Blue..."))




# consolidated=' '.join(word for word in data['Review'][data['Sentiment']==0].astype(str))
# wordCloud=WordCloud(width=1600,height=800,random_state=21,max_font_size=110)
# plt.figure(figsize=(15,10))
# plt.imshow(wordCloud.generate(consolidated),interpolation='bilinear')
# plt.axis('off')
# plt.show()


# consolidated=' '.join(word for word in data['Review'][data['Sentiment']==1].astype(str))
# wordCloud=WordCloud(width=1600,height=800,random_state=21,max_font_size=110)
# plt.figure(figsize=(15,10))
# plt.imshow(wordCloud.generate(consolidated),interpolation='bilinear')
# plt.axis('off')
# plt.show()


def getWordClouds(productName):
    productComments = getComments(productName)
    #return json_util.dumps(productComments)

    descriptions = []
    ratings = []
    for document in productComments:
        comments = document["comments"]
        for comment in comments:
            description = comment["description"]
            rating = comment["rating"]
            descriptions.append(description)
            ratings.append(rating)

    consolidated_negative = ''
    consolidated_positive = ''

    if len(descriptions)>0:
        # Create a dictionary from the arrays
        data = {"Description": descriptions, "Rating": ratings}
        # Create a pandas DataFrame
        df = pd.DataFrame(data)
        df['Description']=df['Description'].apply(clean_review)
        X = cv.transform(df['Description'] ).toarray()
        df["Rating"]=model.predict(X)
        # print(df)
    
        consolidated_negative = ' '.join(word for word in df['Description'][df['Rating'] == 0].astype(str))
        consolidated_positive = ' '.join(word for word in df['Description'][df['Rating'] == 1].astype(str))
        # print(str(consolidated_positive))

    wordCloud_negative = WordCloud(width=1600, height=800, random_state=21, max_font_size=110)
    wordCloud_positive = WordCloud(width=1600, height=800, random_state=21, max_font_size=110)

    wordCloud_image_negative = None
    wordCloud_image_positive = None

    if consolidated_negative:
        wordCloud_negative.generate(consolidated_negative)
        wordCloud_image_negative = wordCloud_negative.to_image()

    if consolidated_positive:
        wordCloud_positive.generate(consolidated_positive)
        wordCloud_image_positive = wordCloud_positive.to_image()

    wordCloud_data_negative = wordCloud_image_negative.tobytes() if wordCloud_image_negative else None
    wordCloud_data_positive = wordCloud_image_positive.tobytes() if wordCloud_image_positive else None

    # Create a dictionary to hold both Word Clouds
    wordClouds_data = {
        'negative': wordCloud_data_negative,
        'positive': wordCloud_data_positive
    }

    # Serialize the dictionary as a JSON string
    return wordClouds_data


