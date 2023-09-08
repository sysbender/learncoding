from playwright.sync_api import sync_playwright, Page
 
def test_without_pytest_playwright(playwright  ):
    b = playwright.chromium.launch()
    
    browser = playwright.chromium.launch()
    context = browser.new_context()
    page = context.new_page()


def add(a : int, b: int):   
    return a+b


if __name__ =='__main__':
    print( add(2,3))

