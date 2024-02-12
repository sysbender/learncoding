### workflow

using tsc to watch src folder and auto compile when there is a change
using node to watch js file and auto run it when there is a change

- tsc watch src
- node --watch dist/index.js

## work with third party library

### with javascript library

like lodash - need install translation type packages.
d.ts - files that add type declaration

```shell
npm install --save-dev @types/lodash

import _ from 'loadash';
console.log(_.shuffle([1,2,3]));
```

### without type package

```javascript
var GLOBAL = "this si";

declare var GLOBAL: any;
```

### class transformer vs class validator

```javascript
import { plainToClass } from "class-transformer";
plainToClass(className, jsonData);
```
