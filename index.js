var thunkify = require('thunkify');
var which = require('which');
var co = require('co');
var child_process = require('child_process');
var read = require('co-read');


var sh = Proxy.create({
  get: function(receiver, value) {

    // use a command-line args parser
    value = value.split(' ');
    var cmd = value[0];
    var args = value.splice(1, value.length);

    return thunkify(function _cmd(cb){
      which(cmd, function(err, path){
        if (err || !path) {
          return cb(err);
        }

        console.log(value);
        return cb(null, child_process.spawn(cmd, args));
      });
    })
  }
});



co(function *(){
  var tail = yield sh['tail -F index.js']();

  var buf;
  while (buf = yield read(tail.stdout)) {
    console.log(buf.toString());
  }

  try {
    yield sh.dontexist();
  } catch(e) {
    console.log(e);
  }
  
})();
