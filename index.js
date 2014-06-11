var thunkify = require('thunkify');
var which = require('which');
var co = require('co');
var child_process = require('child_process');
var read = require('co-read');


var sh = Proxy.create({
  get: function(receiver, value) {
    function _cmd(cb){
      which(value, function(err, path){
        if (err) {
          return cb(err);
        }
        return cb(null, child_process.spawn(path));
      });
    }
    return thunkify(_cmd);
  }
});



co(function *(){
  var ls = yield sh.ls();

  var buf;
  while (buf = yield read(ls.stdout)) {
    console.log(buf.toString());
  }

  try {
    yield sh.dontexist();
  } catch(e) {
    console.log(e);
  }
  


})();


