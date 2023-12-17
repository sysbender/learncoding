import pytest
import os
from scripts.manager import download_browser


# @pytest.fixture(scope="session", autouse=True)
# def add_driver_path(chrome_browser_driver_path):
#     browser_path, driver_path = chrome_browser_driver_path
#     os.environ["PATH"] += os.pathsep + driver_path
#     print("++++++++++++++++++++++++++++++++ add driver to path")


@pytest.fixture(scope="session")
def chrome_browser_driver_path():
    path = download_browser("chrome", "114")
    return path


@pytest.fixture
def chrome_options(chrome_options, chrome_browser_driver_path):
    browser_path, driver_path = chrome_browser_driver_path
    chrome_options.binary_location = browser_path
    # chrome_options.add_extension("/path/to/extension.crx")
    # chrome_options.add_argument("--kiosk")
    return chrome_options


@pytest.fixture
def driver_path(request, chrome_browser_driver_path):
    browser_path, driver_path = chrome_browser_driver_path
    return driver_path


# @pytest.fixture
# def driver_args(chrome_browser_driver_path):
#     browser_path, driver_path = chrome_browser_driver_path
#     return driver_path
#     return ['--log-path=foo.log']
