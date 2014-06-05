/* global Proxy */

var sh = Proxy.create({
  get: function(receiver, value) {
    return Math.random();
  }
});

console.log(sh.ls);
