from playwright.sync_api import Page, expect, Locator
from typing import List


# don't put assertion in page object

class DuckDuckGoResultPage:

    def __init__(self, page:Page):
        self.page = page

        self.result_links : Locator = page.locator('[data-testid="result-title-a"]')
        self.search_input : Locator = page.locator( '[name=q]')

    def result_link_titles(self)->List[str]:
        self.result_links.nth(4).wait_for()  # explicit wait when multiple elements are expected

        return self.result_links.all_text_contents()

    def result_link_titles_contains_phrase(self, phrase: str, minimum: int =1) -> bool:
        matches = [ t for t in self.result_link_titles() if phrase.lower() in t.lower() ]
        return len(matches) >= minimum


