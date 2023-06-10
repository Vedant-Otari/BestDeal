from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from difflib import SequenceMatcher
import numpy as np
import itertools
import time

def getPriceHistoryChart(productName):

    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument(f'user-agent={user_agent}')
    options.add_argument("--window-size=1920,1080")
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--allow-running-insecure-content')
    options.add_argument("--disable-extensions")
    options.add_argument("--proxy-server='direct://'")
    options.add_argument("--proxy-bypass-list=*")
    options.add_argument("--start-maximized")
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--no-sandbox')
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    driver.get("https://www.pricebefore.com/search/?category=all&q="+productName)

    count = 1
    d = ''
    strToCompare = [productName,'']
    maxSimilarity = 0

    while count < 20:
        j = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[1]/div/div[3]/div[1]/ul/li["+str(count)+"]/div/div[2]/div[1]/h2/a")
        strToCompare[1] = j.get_attribute("title")
        similarity = lambda x: np.mean([SequenceMatcher(None, a,b).ratio() for a,b in itertools.combinations(x, 2)])

        currentStrSimilarity = similarity(strToCompare)
        if j.get_attribute("title")==productName: 
            d = j.get_attribute("href")
            break
        if currentStrSimilarity>maxSimilarity:
            maxSimilarity = currentStrSimilarity
            d = j.get_attribute("href")
        count += 1
    print(d)
    driver.get(d)

    # string = """<canvas id="price_history_chart" style="width: 100%; display: block;" width="950" height="475" class="chartjs-render-monitor"></canvas><script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js" defer=""></script>"""
    # f = open("chart.html",'bw')
    # import re
    
    try:
        ele1 = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div[1]/div[2]")
        print(ele1)
        driver.execute_script("return arguments[0].scrollIntoView();", ele1) 
        ele = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div[1]/div[4]/div[2]/canvas")
    except:
        ele1 = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div[1]/div[2]")
        driver.execute_script("return arguments[0].scrollIntoView();", ele1) 
        ele = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div[1]/div[3]/div[2]/canvas")
    
    


    image = ele.screenshot_as_base64
    # for i in range(5,10):
    #     t = driver.find_element(By.XPATH, "/html/body/script["+str(i)+"]")
    #     if(re.findall("var data", t.get_attribute("innerHTML"))):
    #         break

    # string += t.get_attribute("outerHTML")
    # f.write( bytes(string.encode('utf-8')))
    # f.close()
    # print (string)

    driver.quit()
    return "data:image/jpeg;base64,"+image
# print(getPriceHistoryChart('Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB ram, 256GB Storage) with No Cost EMI/Additional Exchange Offers'))