import warnings
warnings.filterwarnings('ignore')
import pandas as pd
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

#1,2,3->negative(i.e 0)
data.loc[data['Sentiment']<=3,'Sentiment'] = 0
#4,5->positive(i.e 1)
data.loc[data['Sentiment']>3,'Sentiment'] = 1


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
x_train ,x_test,y_train,y_test=train_test_split(X, data['Sentiment'], test_size=0.25,random_state=42)


from sklearn.linear_model import LogisticRegression
model=LogisticRegression()
#Model fitting
model.fit(x_train,y_train)
#testing the model
pred=model.predict(x_test)
#model accuracy
# print(accuracy_score(y_test,pred))

print("Positive Reviews : ", (pred == 1).sum(), format("\n"))
print("Negative Reviews : ", (pred == 0).sum())




import pymongo
connect_string = 'mongodb+srv://Hrishi:Hrishi123@cluster0.fkj1i6o.mongodb.net/test?retryWrites=true&w=majority'
my_client = pymongo.MongoClient(connect_string)
dbname = my_client['sample_products']
collection_name = dbname["product_details"]

