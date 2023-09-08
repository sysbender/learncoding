from playwright.sync_api import Page, expect

class DuckDuckGoSearchPage:
    URL = 'https://www.duckduckgo.com'  # should be a parameter # managing the test data nightmare

    def __init__(self, page: Page) -> None:
        self.page = page
        self.search_input = page.locator('id=searchbox_input')
        self.search_button = page.locator('.searchbox_searchButton__F5Bwq')


    def load(self)->None:
        self.page.goto(self.URL)

    def search(self, phrase: str)-> None:
        self.search_input.fill(phrase)
        self.search_button.click()


 
