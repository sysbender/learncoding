
from playwright.sync_api import Page ,expect
def test_basic_duckduckgo_search(page : Page)-> None:

    keyword: str =  'panda'
    # gerkin, given when then
    # given the duckduckgo home page is displayed
    page.goto('https://www.duckduckgo.com')
    # when the user searches for a phrase
    page.locator('id=searchbox_input').fill(keyword)
    page.locator('.searchbox_searchButton__F5Bwq').click()


    # then the search result query is the phrase
    
    expect(  page.locator( '[name=q]')).to_have_value(keyword)
    # and search result links pertain to the phrase

    page.locator('[data-testid="result-title-a"]').nth(4).wait_for()  # explicit wait when multiple elements are expected
    titles = page.locator('[data-testid="result-title-a"]').all_text_contents()

    matches = [ t for t in titles if keyword in t.lower() ]
    assert len(matches) > 0
    print( 'len = ',  len(matches))
    # and the search result title contains the phrase

    expect(page).to_have_title(f"{keyword} at DuckDuckGo")
    pass