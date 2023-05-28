from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By


def getDriver():

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
    # driver.get("https://pricehistoryapp.com/product/amazonbasics-premium-hardside-spinner-luggage-with-built-in-tsa-lock-20-inch-carry-on-black")
    # ele = driver.find_element(By.CLASS_NAME, "jsx-4019944628 container")
    # print(driver.get_attribute('innerHTML'))
    # html = driver.execute_script("return document.documentElement.innerHTML")
    # print (html)
    # driver.quit()
    return driver

def getchart(name):

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
    driver.get("https://www.pricebefore.com/search/?category=all&q="+name)
    
    c = 1
    d = ''
    while c<=20:
        j = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[1]/div/div[3]/div[1]/ul/li["+str(c)+"]/div/div[2]/div[1]/h2/a")
        if j.get_attribute("title")==name:
            d = j.get_attribute("href")
        c += 1
    driver.get(d)
    # html = driver.execute_script("return document.documentElement.innerHTML")

    ele = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div[1]/div[3]/div[2]/canvas")
    string = ""

    # print(ele.get_attribute("innerHTML"))

    t = driver.find_element(By.XPATH, "/html/body/script[7]")
    # print(t.get_attribute("innerHTML"))
    # f = open("test1.html",'bw')
    # f.write(ele.get_attribute("outerHTML").encode('utf-8'))

    string += ele.get_attribute("outerHTML") + t.get_attribute("outerHTML")


    # f.write(t.get_attribute("outerHTML").encode('utf-8'))


    t = driver.find_element(By.XPATH, "/html/body/script[8]")
    string += t.get_attribute("outerHTML")
    # f.write(t.get_attribute("outerHTML").encode('utf-8'))

    # f.close()
    # print (string)

    driver.quit()
    return string
# print(getchart('Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers'))