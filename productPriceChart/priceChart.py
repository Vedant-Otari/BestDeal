from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

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
    print(productName)
    c = 1
    d = ''
    while c<20:
        j = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[1]/div/div[3]/div[1]/ul/li["+str(c)+"]/div/div[2]/div[1]/h2/a")
        if j.get_attribute("title")==productName: 
            d = j.get_attribute("href")
            break
        c += 1
        print(c,j.get_attribute("title"))
    driver.get(d)
    # html = driver.execute_script("return document.documentElement.innerHTML")

    # ele = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div[1]/div[3]/div[2]/canvas")
    string = """<canvas id="price_history_chart" style="width: 100%; display: block;" width="950" height="475" class="chartjs-render-monitor"></canvas><script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js" defer=""></script>"""

    # print(ele.get_attribute("innerHTML"))

    # t = driver.find_element(By.XPATH, "/html/body/script[7]")
    # print(t.get_attribute("innerHTML"))
    # f = open("test1.html",'bw')
    # f.write(ele.get_attribute("outerHTML").encode('utf-8'))

    # string += ele.get_attribute("outerHTML") + t.get_attribute("outerHTML")


    # f.write(t.get_attribute("outerHTML").encode('utf-8'))

    import re

    for i in range(5,10):
        t = driver.find_element(By.XPATH, "/html/body/script["+str(i)+"]")
        print(re.findall("window.addEventListener", t.get_attribute("innerHTML")))


    t = driver.find_element(By.XPATH, "/html/body/script[8]")
    string += t.get_attribute("outerHTML")
    # f.write(t.get_attribute("outerHTML").encode('utf-8'))

    # f.close()
    print (string)

    driver.quit()
    return string
# print(getchart('Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers'))
