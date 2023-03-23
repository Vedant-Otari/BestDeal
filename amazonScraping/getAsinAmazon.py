
from bs4 import BeautifulSoup
import requests

def getASIN(productName):
	HEADERS = ({'User-Agent':
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41',
					'Accept-Language': 'en-US, en;q=0.5'})
	productNameString = productName.replace(" ", "+")
	URL = "https://www.amazon.in/s?k="+productNameString
	webpage = requests.get(URL, headers=HEADERS)
	soup = BeautifulSoup(webpage.content, "lxml")

	result = soup.find("div",attrs={"class":'sg-col-20-of-24 s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 sg-col s-widget-spacing-small sg-col-12-of-16'})
	print(soup)
	ASIN = result['data-asin']
	return ASIN

# print(getASIN(input()))