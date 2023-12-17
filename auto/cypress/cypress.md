some projects using Cypress for UI testing included:

Ghost:

GitHub Repository: Ghost GitHub Repository
Open Event Frontend:

GitHub Repository: Open Event Frontend GitHub Repository
RealWorld Example App (Cypress Version):

GitHub Repository: RealWorld Example App
TodoMVC (Cypress Version):

GitHub Repository: TodoMVC Cypress
React Redux RealWorld Example App (Cypress Version):

GitHub Repository: React Redux RealWorld Example

# crash

https://www.youtube.com/watch?v=avb-VDa3ZG4&t=4847s

```shell
npm install
npm start

npm init
npm install cypress --save-dev

npx cypress open


```

cypress.json

```json
{
  "baseUrl": "http://localhost:3000",
  "ignoreTestFiles": "**/examples/*",
  "viewportWidth": 1920,
  "viewportHeight": 1080
}
```

### cy is not defined warning

To specify globals using a comment inside of your JavaScript file, use the following format:

/_ global var1, var2 _/

This defines two global variables, var1 and var2. If you want to optionally specify that these global variables can be written to (rather than only being read), then you can set each with a "writable" flag:

/_ global var1:writable, var2:writable _/

## locators

- get
- contains
- child

### first test

```javascript
/// <reference types="cypress" />
```

blocks

- context
  - it
    - message: string
    - test : funcion
