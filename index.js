var thunkify = require('thunkify');
var which = require('which');
var child_process = require('child_process');


var sh = Proxy.create({
  get: function(receiver, value) {

    //TODO: use a command-line args parser
    value = value.split(' ');

    // the command
    var cmd = value[0];

    // and its arguments/options
    var args = value.splice(1, value.length);

    return thunkify(function _cmd(cb){
      which(cmd, function(err, path){
        if (err || !path) {
          return cb(err);
        }

        return cb(null, child_process.spawn(cmd, args));
      });
    })
  }
});



module.exports = sh;
