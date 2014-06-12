sh
==

Call any shell command like a function using EcmaScript 6 Proxies & Generators.

Uses `node v0.11.x` with  `--harmony-proxies --harmony-generators` flags, along with 

* [co](https://github.com/visionmedia/co)
* [thunkify](https://github.com/visionmedia/node-thunkify)
* [co-read](https://github.com/juliangruber/co-read)


## Install

Use [n](https://github.com/visionmedia/n) to install node v0.11.x
    
    n 0.11.13

## Usage

```javascript
var co = require('co');
var read = require('co-read');
var sh = require('co-sh');

co(function *(){
  var ls = yield sh.ls();

  var buf;
  while (buf = yield read(ls.stdout)) {
    console.log(buf.toString());
  }

  try {
    yield sh.nonexistingcmd();
  } catch(e){
    console.log(e);
  }
})();
```

Assuming the above code is in a file called `test.js` run it using;

    node --harmony-proxies --harmony--generators test.js

See the examples folder for more

## License

MIT
