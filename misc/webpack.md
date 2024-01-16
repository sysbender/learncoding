## reference

SurviveJS – Webpack 5
https://survivejs.com/webpack/

## intro

peer dependency -

- (separated dependency that not included in the bundle)
- example, bootstrap use jquery as a peer dependency.

choose webpack vs rollup

- webpack - for static asset first
- rollup - for library first

webpack as dev dependency

```shell
npm install --save-dev webpack, webpack-cli
```

## webpack concept

dependency graph

- avoid bundling more than is needed

entry point -

- primary file of js lib
- main file for js app
- home page of a website

output

- folder you publish as lib, app, or website

can be configured to target different environments - ES5, ES6

loader

- extension for content other than js
- like CSS and pre-processor , images

plugin - other extension

modes

- production - more optimization
- development

## webpack config

webpack.config.js

- configure file is a js module that publish a dictionary (plain object) as it's default export
- in the root of the node project
- the configure file syntax could be : ES6 module or CommonJS

## crash course

### start

- npm init
- npm install webpack and webpack-cli
- add build script to package.json , set webpack mode to none
- run build
- create src/index.js

### default behavior

### basic

- support ES6
  - \_\_dirname function
  - type: module
- clean output before each build
- change main entry name from main to app
- cache-busting - add hash to main bundle file name and chunk filename

### css loading

- install loader
- add module

npm install --save-dev mini-css-extract-plugin
