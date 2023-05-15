
from bs4 import BeautifulSoup
import requests
# from .test import getDriver
from selenium.webdriver.common.by import By

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager



def getDriver():

    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"

    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument(f'user-agent={user_agent}')
    

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    # driver.get("https://pricehistoryapp.com/product/amazonbasics-premium-hardside-spinner-luggage-with-built-in-tsa-lock-20-inch-carry-on-black")
    # ele = driver.find_element(By.CLASS_NAME, "jsx-4019944628 container")
    # print(driver.get_attribute('innerHTML'))
    # html = driver.execute_script("return document.documentElement.innerHTML")
    # print (html)
    # driver.quit()
    return driver


def getASIN(productName):
	
	productNameString = productName.replace(" ", "+")
	driver = getDriver()
	URL = "https://www.amazon.in"

	print(URL)

	driver.get(URL)
	# driver.implicitly_wait(5)
	search_box = driver.find_element(By.ID, 'twotabsearchtextbox')
	
	search_box.send_keys(productName)

	print(driver.current_url)
	search_button = driver.find_element(By.ID, 'nav-search-submit-button').click()
	print(driver.current_url)
        
	
	# driver.implicitly_wait(5)
	i = 0
	while True:
		result = driver.find_element(By.XPATH , "//*[@id='search']/div[1]/div[1]/div/span[1]/div[1]/div["+ str(i+1) +"]")
		className = result.get_attribute('class')
		ASIN = result.get_attribute('data-asin')
		print(className)
		if className == "sg-col-20-of-24 s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 sg-col s-widget-spacing-small sg-col-12-of-16":
			break
		else:
			i += 1
			continue

	driver.quit()
	return ASIN

# print(getASIN("Samsung s22 ultra"))