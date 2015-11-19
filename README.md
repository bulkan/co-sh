sh
==

Call any shell command like a function using ES 6 Proxies & Generators.

Use `node v5.0.x` with  `--harmony-proxies`  flag, along with 

* [co](https://github.com/visionmedia/co)
* [thunkify](https://github.com/visionmedia/node-thunkify)
* [co-read](https://github.com/juliangruber/co-read)

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

    node --harmony-proxies test.js

See the examples folder for more

## License

MIT
