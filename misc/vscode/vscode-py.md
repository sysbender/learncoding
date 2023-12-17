


## pytest debug
Configuring VSCode to Debug PyTest -  https://www.youtube.com/watch?v=zL2YTdIj3R8


```json
  "configurations": [
    {
      "name": "Pytest",
      "type": "python",
      "request": "launch",
      "module": "pytest",
      "args": ["-s", "--driver=firefox", "${relativeFileDirname}"],
      "justMyCode": true
    },
```