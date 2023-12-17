from selenium import webdriver

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service 
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import pytest
import os
browser_path = "C:/myTools/ungoogled-chromium-portable-103.0.5060.114-15/ungoogled-chromium-portable.exe"
driver_path =  "C:/myTools/chromedriver_win32/chromedriver.exe"

site_url = 'https://toolsqa.com/'

assert os.path.exists(browser_path) == True
assert os.path.exists(driver_path) == True

service = Service(executable_path = driver_path)
options = webdriver.ChromeOptions()
options.binary_location = browser_path
# you may need some other options
#options.add_argument('--no-sandbox')
#options.add_argument('--no-default-browser-check')
#options.add_argument('--no-first-run')
#options.add_argument('--disable-gpu')
#options.add_argument('--disable-extensions')
#options.add_argument('--disable-default-apps')
options.add_argument("--start-maximized")
driver = webdriver.Chrome(service= service,
            options=options)
driver.get('https://google.com')
 

print(driver.title)
search_input = driver.find_element(By.ID, 'APjFqb')
search_btn = driver.find_element(By.NAME, 'btnK')
driver.implicitly_wait(2)
print(search_input)
search_input.send_keys('playwright')
driver.implicitly_wait(2)
search_btn.click()



# driver.close() # close table
# driver.quit() # close browser