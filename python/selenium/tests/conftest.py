""" 
this module contains shared fixtures.
"""
import json
import pytest
import selenium.webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

@pytest.fixture
def config(scope='session'):

    # read config file
    with open('config.json' ) as config_file:
        config = json.load(config_file)

    # assert values are acceptable
    assert config['browser'] in ['Firefox', 'Chrome', 'Headless Chrome']
    assert isinstance(config['implicit_wait'], int)
    assert config['implicit_wait'] > 0
    
    # return config 
    return config

@pytest.fixture
def browser(config):


    # initialize chromedriver instance
    # browser_path = "C:/myTools/ungoogled-chromium-portable-103.0.5060.114-15/ungoogled-chromium-portable.exe"
    # driver_path =  "C:/myTools/chromedriver_win32/chromedriver.exe"
    # service = Service(executable_path = driver_path)
    # options = selenium.webdriver.ChromeOptions()
    # options.binary_location = browser_path
    # # you may need some other options
    # #options.add_argument('--no-sandbox')
    # #options.add_argument('--no-default-browser-check')
    # #options.add_argument('--no-first-run')
    # #options.add_argument('--disable-gpu')
    # #options.add_argument('--disable-extensions')
    # #options.add_argument('--disable-default-apps')
    # options.add_argument("--start-maximized")
    # b = selenium.webdriver.Chrome(service= service,
    #             options=options)


    if config['browser'] == 'Firefox':
        b = selenium.webdriver.Firefox()
    elif config['browser'] == 'Chrome':
        b = selenium.webdriver.Chrome()
    elif config['browser'] == 'Headless Chrome':
        opts = selenium.webdriver.ChromeOptions()
        opts.add_argument('headless')
        b = selenium.webdriver.Chrome(options=opts)
    else:
        raise Exception(f'Browser "{config["browser"]}" is not supported')
    
 
    # wait up to 10 seconds for elements to appear
    b.implicitly_wait(config['implicit_wait'])

    # return the webdriver instance for the setup
    yield b 

    # quit the instance for cleanup
    # b.close()
    b.quit()





