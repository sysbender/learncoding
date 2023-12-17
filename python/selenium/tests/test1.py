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
 

 

driver.get("https://www.selenium.dev/selenium/web/web-form.html")

title = driver.title
print('title=', title)

driver.implicitly_wait(0.5)

text_box = driver.find_element(by=By.NAME, value="my-text")
submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")

text_box.send_keys("Selenium")
submit_button.click()

message = driver.find_element(by=By.ID, value="message")
text = message.text
print('text=', text)
driver.quit()