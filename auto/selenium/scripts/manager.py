# download selenium manager, then download browser and webdriver via selenium manager

"""
INFO    Driver path: C:/Users/jason.JIGJOG/.cache/selenium/chromedriver/win64/114.0.5735.90/chromedriver.exe
INFO    Browser path: C:/Users/jason.JIGJOG/.cache/selenium/chrome/win64/114.0.5735.133/chrome.exe
"""
import json
import os
import platform
import tempfile
import subprocess
from urllib.request import urlretrieve
import sys
from pprint import pprint


def download_browser(browser: str, version: str) -> (str, str):
    browser_driver = {"chrome": "chromedriver", "firefox": "geckodriver"}
    if browser not in browser_driver:
        raise Exception("browser must be chrome or firefox")
    current_os = platform.system()
    if sys.platform == "win32":
        manager_url = "https://raw.githubusercontent.com/SeleniumHQ/selenium/trunk/common/manager/windows/selenium-manager.exe"
    elif sys.platform == "linux":
        manager_url = "https://raw.githubusercontent.com/SeleniumHQ/selenium/trunk/common/manager/linux/selenium-manager"
    elif current_os == "darwin":
        manager_url = "https://raw.githubusercontent.com/SeleniumHQ/selenium/trunk/common/manager/macos/selenium-manager"
    else:
        raise Exception(
            "Unindentified system : selenium manager only support Win/Linux/Mac"
        )

    manager_filename = manager_url.split("/")[-1]
    manager_path = tempfile.gettempdir() + "/" + manager_filename

    # download
    name, msg = urlretrieve(url=manager_url, filename=manager_path)
    args = [
        manager_path,
        "--browser",
        browser,
        "--driver",
        browser_driver[browser],
        "--browser-version",
        version,
        "--debug",
        "--output",
        "json",
    ]
    if sys.platform == "win32":
        result = subprocess.run(
            args, capture_output=True, creationflags=subprocess.CREATE_NO_WINDOW
        )
    else:
        result = subprocess.run(args, capture_output=True)
    stdout = result.stdout.decode("utf-8").rstrip("\n")
    stderr = result.stderr.decode("utf-8").rstrip("\n")
    json_result = json.loads(stdout)["result"]
    return json_result["browser_path"], json_result["driver_path"]


if __name__ == "__main__":
    browser_path, driver_path = download_browser("chrome", "114")
    print("downloaded : ", browser_path, driver_path)
