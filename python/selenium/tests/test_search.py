
"""
test duckduckgo search
"""
from pages.result_page import ResultPage
from pages.search_page import SearchPage

def test_basic_search(browser):
    search_page = SearchPage(browser)
    result_page = ResultPage(browser)
    PHRASE = 'panda'
    # given homepage
    search_page.load()

    # when the user search
    search_page.search(PHRASE)



    # and the search result query is PHRASE
    assert PHRASE == result_page.search_input_value()

    # and the search result links pertain to PHRASE
    for title in result_page.result_link_titles():
        assert PHRASE.lower() in title.lower()
    
    # result page title contains PHRASE

    # from selenium.webdriver.support.ui import WebDriverWait
    # from selenium.webdriver.support import expected_conditions as EC
    # WebDriverWait(browser.dri, 10).until(EC.title_contains(PHRASE))
    assert PHRASE in result_page.title()