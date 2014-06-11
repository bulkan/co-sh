
var thunkify = require('thunkify');
var which = require('which');
var co = require('co');
//var read = require('co-read');


var sh = Proxy.create({
  get: function(receiver, value) {
    function _cmd(cb){
      which(value, cb);
    }
    return thunkify(_cmd);
  }
});



co(function *(){
  var ls = yield sh.ls();

  
  //var ls = yield whichThunk('ls')

  console.log(ls);
})();


//sh.dontexist(function(){
  //console.log(arguments);
//});
