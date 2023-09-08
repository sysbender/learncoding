

https://www.youtube.com/watch?v=JEll871aplI

Playwright - using debug protocaol (not webdriver)
*  automatic waiting
*  arrange , action , assert


# env

setup the environment, run pytest, should found one test and pass
```
python -m venv .venv

# activate
# packages - playwright, browser automation, 
# pytest, pytest-playwright

pip freeze
# install brower for playwright - not use the main browser  (in %AppData%)
playwright install
```

# concept

web driver
* init web driver instance 
* which start chrome
* driver.func
* driver.quit

playwright
* browser - test suite
* context - test case ; is isolated.  fast to spin up
* pages - tab ; only need one per test case
* 


## run test
```
pytest --headed --slowmo 2000
```


## print to console in pytest
```
pytest -s
```
