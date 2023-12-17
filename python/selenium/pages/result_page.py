""" 
get result link titles
get search input value
get the title

"""
from selenium.webdriver.common.by import By
class  ResultPage:
    RESULT_LINKS = (By.CSS_SELECTOR, "a[data-testid='result-title-a']")
    SEARCH_INPUT = (By.ID, 'search_form_input')
    def __init__(self, browser):
        self.browser = browser

    def result_link_titles(self):
        links = self.browser.find_elements(*self.RESULT_LINKS)
        titles = [ link.text for link in links]
        return titles

    def search_input_value(self):
        search_input = self.browser.find_element(*self.SEARCH_INPUT)
        value = search_input.get_attribute('value')  # .text is empty for input element
        return value

    def title(self):
        return self.browser.title