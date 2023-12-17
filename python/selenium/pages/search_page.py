
""" 
* load the page
* search a phrase
"""
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

class SearchPage:
    URL = 'https://www.duckduckgo.com'
    SEARCH_INPUT = (By.ID, 'searchbox_input')
    def __init__(self, browser):
        self.browser = browser

    def load(self):
        self.browser.get(self.URL)

    def search(self, phrase):
        search_input = self.browser.find_element(*self.SEARCH_INPUT)  #  Unpacking Argument Lists
        search_input.send_keys(phrase + Keys.ENTER)