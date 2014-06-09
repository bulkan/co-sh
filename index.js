/* global Proxy */
var which = require('which');


var sh = Proxy.create({
  get: function(receiver, value) {
    return function _cmd(cb){
      which(value, cb);
    };
  }
});

sh.ls(function(){
  console.log(arguments);
});


sh.dontexist(function(){
  console.log(arguments);
});
