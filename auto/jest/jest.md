# reference

https://www.youtube.com/watch?v=ajiAl5UNzBU

https://www.jestjs.cn/docs/architecture

## vscode intellisense for jest

(https://stackoverflow.com/questions/57874114/intellisense-for-jest-not-working-in-vs-code)

Add to your jsconfig.json:

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

If this do not work try with this command:

```shell
npm i @types/jest --save-dev
#or
yarn add -D @types/jest
```

https://stackoverflow.com/questions/57874114/intellisense-for-jest-not-working-in-vs-code

# crash

https://www.youtube.com/watch?v=ajiAl5UNzBU

```shell
npm init -y
npm install --save-dev jest
```
