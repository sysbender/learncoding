from pages.search import DuckDuckGoSearchPage

from pages.result import DuckDuckGoResultPage
from playwright.sync_api import Page, expect

def test_basic_duckduckgo_search_p(page : Page)->None:
    search_page = DuckDuckGoSearchPage(page)
    result_page = DuckDuckGoResultPage(page)


    keyword: str = 'panda'


    # gerkin, given when then
    # given the duckduckgo home page is displayed
    search_page.load()
    # when the user searches for a phrase
    search_page.search(keyword)


    # then the search result query is the phrase
    expect( page).to_have_title(f"{keyword} at DuckDuckGo" , timeout=5000)

    expect(  result_page.search_input ).to_have_value(keyword)
    # and search result links pertain to the phrase

    result_page.result_links.nth(4).wait_for()  # explicit wait when multiple elements are expected

 
    assert result_page.result_link_titles_contains_phrase(keyword) == True

    # and the search result title contains the phrase






