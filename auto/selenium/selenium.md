

## reference

https://bonigarcia.dev/webdrivermanager/

https://www.selenium.dev/documentation/overview/


##  webdrivermanager

## selenium manger 
is a rust 
download binary from https://bonigarcia.dev/webdrivermanager/

https://github.com/SeleniumHQ/selenium/tree/trunk/common/manager

https://github.com/SeleniumHQ/selenium/blob/trunk/common/manager/windows/selenium-manager.exe


* browser version discovery - google-chrome --version
* driver version discovery - chromedriver, geckodriver, or msedgedriver
* driver download
* driver cache - ~/.cache/selenium
* automated browser management - 
  * download - ~/.cache/selenium/chrome
  * browserVersion - stable, 113, 
  * browser
    *  chrome for testing - https://googlechromelabs.github.io/chrome-for-testing/
    *  public Firefox release -https://ftp.mozilla.org/pub/firefox/releases/
    *  Edge downloads - https://www.microsoft.com/en-us/edge/download


## class hierrachy
* searchContext - findElement(), findElements()
  * webDriver - 
    * control of browser
      * get() - load a page
      * getWindowHandle()
      * close(), quit()
      * ImeHandler
      * Navigation
      * Options
      * TargetLocator
      * Timeout
      * Window
    * selection of WebElements
    * debugging

* RemoteWebDriver
    * WebDriver
    * JavascriptExecutor
      * executescript()
      * executeAsyncScript()
    * TakeScreenshot


## overview

### first script

```python
from selenium import webdriver
from selenium.webdriver.common.by import By


def test_eight_components():
    driver = webdriver.Chrome()

    driver.get("https://www.selenium.dev/selenium/web/web-form.html")

    title = driver.title
    assert title == "Web form"

    driver.implicitly_wait(0.5)

    text_box = driver.find_element(by=By.NAME, value="my-text")
    submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")

    text_box.send_keys("Selenium")
    submit_button.click()

    message = driver.find_element(by=By.ID, value="message")
    value = message.text
    assert value == "Received!"

    driver.quit()

```

### browser Options
 replace the Capabilities.
 * browserName
 * browserVersion
 * pageLoadStrategy - query document.readState, normal/eager/none
 * acceptInsecureCerts
 * timeouts 
   * script timeout
   * page load timeout
   * implicit wait timeout
   * 


```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
options = Options()
options.page_load_strategy = 'normal'
driver = webdriver.Chrome(options=options)
driver.get("http://www.google.com")
driver.quit()
```
#### chrome options

```python
    options.binary_location = CHROME_LOCATION
    options.binary_location = FIREFOX_LOCATION

```

#### firefox options

### service
 managing the starting and stoping of local drivers
 * driver location
 * port
 * logging


```python
    service = webdriver.ChromeService()
    service = webdriver.ChromeService(executable_path=chromedriver_path)
    service = webdriver.ChromeService(port=1234)
    service = webdriver.ChromeService(service_args=['--append-log', '--readable-timestamp'], log_output=log_path)

    driver = webdriver.Chrome(service=service)
```