import pytest


def test_google(selenium):
    selenium.get("https://google.com")
    assert "Google" in selenium.title
