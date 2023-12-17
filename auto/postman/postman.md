

# intro api
## api contract

* request
  * endpoint
  * headers
  * body


* response
  * status code
  * headers
  * body


## example
amazon - suggestion , completion
spotify, all api are public

## tools

 dev tool
 proxy tool: 
    fiddler - free
    charles - windows/mac, paid

# explore API with postman


## get
http://worldtimeapi.org/api/timezone
http://worldtimeapi.org/api/timezone/America/New_York


amazon suggestion api
* copy from devtool as cUrl and import in postman
* toggle : bulk edit/ key-value edit


## post

signin bigfishgames.com
the password was sent in clear text

## restful booker : API playground


bugs:
https://restful-booker.herokuapp.com

0. create a collection
1. import all the curls samples
2. run auth and get token from response
3. run update booking (replace token in header)
4. export the collection to json

# api testing strategy
correct
provide value
intuitive

poised
* parameters
* output
* interop
* security
* errors
* data

## setup restful-booker locally

 
setup production
1. create a production environment
2. add a variable : rb_url as base url
3. select production env, and replace url with {{rb_url}}
4. check if it is working

setup local

1. clone restful-booker
2. run npm install and npm start
3. check localhost:3001
4. create local environment in postman

add authorization to all endpoint
1. right click the project
2. edit
3. authorization

## test parameter
classic boundary style testing for each parameter
* valid value should work
* empty string
* space
* missing this parameter

result:
* ok
* internal server error

## test output
200, 204 
201 - error
* change to xml in header: Accept = application/xml
* give wrong parameter - check the log

## interop
date format - 
get detail info

## security
cross site script security- 
<script></script>

## Errors
handle wrong info without crashing

bad password get status code = 200
never have a 500 error
400 - give detail of error

## data
scalability - a lot of data, paging?

# test automation
postman use javascript 















