

## reference

projects using python seleium:
https://github.com/SamR1/FitTrackee   = active
* https://github.com/hasgeek/funnel
* https://github.com/geometalab/osmaxx
* https://github.com/mozilla/experimenter
* https://github.com/zauberzeug/nicegui
* https://github.com/mozilla/mozillians-tests
* https://github.com/TimurNurlygayanov/ui-tests-example - russian
* https://github.com/mozilla/bedrock - mozilla.org

 https://github.com/mozilla/bedrock/blob/main/docs/testing.rst
 



https://testautomationu.applitools.com/selenium-webdriver-python-tutorial/chapter2.html

github - tau-intro-selenium-py
 

##  setup
1. setup pytest


2. setup selenium

### selenium manager
new in 4.12

## page object
 for each web page or component
 * locator
 * interaction methods

## selenium

### webdriver instance
each test case should have its own webdriver instance
always quit(not close) the webdriver



### webdriver call
* current_url
* find_element
* find_elements
* find_element_by_*
* get
* maximize_window
* quit
* refresh
* save_screenshot
* title


### element method
* clear
* click
* find_element*
* get_attribute - defined in html code
* get_property  - dom object property created by browser
* is_displayed
* location
* send_keys
* size
* text


## wait
don't mix implicit and explicit wait

explicit wait:
WebDriverWait(driver, 10).until()



