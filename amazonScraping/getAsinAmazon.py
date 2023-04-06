
from bs4 import BeautifulSoup
import requests

def getASIN(productName):
	HEADERS = ({'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0'})
	productNameString = productName.replace(" ", "+")
	URL = "https://www.amazon.in/s?k="+productNameString
	webpage = requests.get(URL, headers=HEADERS)
	soup = BeautifulSoup(webpage.content, "lxml")

	result = soup.find("div",attrs={"class":'sg-col-20-of-24 s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 sg-col s-widget-spacing-small sg-col-12-of-16'})
	print(soup)
	ASIN = result['data-asin']
	return ASIN

# print(getASIN(input()))