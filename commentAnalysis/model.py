import warnings
warnings.filterwarnings('ignore')
import pandas as pd
from bson import json_util
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt
from wordcloud import WordCloud
import nltk
#nltk.download('punkt')
#nltk.download('stopwords')
from nltk.corpus import stopwords


data = pd.read_csv("TrainingData.csv")
print(data.head(),format("\n"))
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


consolidated=' '.join(word for word in data['Review'][data['Sentiment']==0].astype(str))
wordCloud=WordCloud(width=1600,height=800,random_state=21,max_font_size=110)
# plt.figure(figsize=(15,10))
# plt.imshow(wordCloud.generate(consolidated),interpolation='bilinear')
# plt.axis('off')
# plt.show()


consolidated=' '.join(word for word in data['Review'][data['Sentiment']==1].astype(str))
wordCloud=WordCloud(width=1600,height=800,random_state=21,max_font_size=110)
# plt.figure(figsize=(15,10))
# plt.imshow(wordCloud.generate(consolidated),interpolation='bilinear')
# plt.axis('off')
# plt.show()


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


def getSentiment(productName):
    productComments = collection_name.aggregate([
        {
            "$match": {
                "comments.product_name": productName
            }
        },
        {
            "$project": {
                "comments": {
                    "$filter": {
                        "input": "$comments",
                        "cond": {
                            "$eq": ["$$this.product_name", productName]
                        }
                    }
                }
            }
        },
        {
            "$project": {
                "comments.description": 1,
                "comments.rating": 1
            }
        }
    ])
    #return json_util.dumps(productComments)

    descriptions = []

    for document in productComments:
        comments = document["comments"]
        for comment in comments:
            description = comment["description"]
            descriptions.append(description)
            
    
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

print(getSentiment("Samsung Galaxy S22 5G (Phantom White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"))