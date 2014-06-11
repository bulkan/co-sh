var sh = require('..');
var co = require('co');
var read = require('co-read');

co(function *(){
  var tail = yield sh['tail -f /var/log/system.log']();

  var buf;
  while (buf = yield read(tail.stdout)) {
    console.log(buf.toString());
  }
})();
