
var co = require('co');
var sh = require('..');
var read = require('co-read');
var should = require('chai').should();


describe('sh', function(){
  it('should return a function on property access', function(){
    var ls = sh.ls;
    should.exist(ls);
    ls.should.be.a('function');
  })

  it('should return a stream', function(done){
    co(function *(){
      var cmd = yield sh["node -p '1'"]();
      cmd.should.have.property('pid');
    })(done);
  });

  it('should execute cmd', function(done){
    var node_eval = 'node -p "1"';
    co(function *(){
      var cmd = yield sh[node_eval]();

      var out = '', buf;

      while (buf = yield read(cmd.stdout)) {
        out += buf.toString();
      }

      should.exist(out);
      out.should.equal('1\n');

    })(done);
  });

  it('should allow hyphenated commands', function(done){

    process.env.PATH = process.env.PATH + ":" + __dirname

    co(function *(){
      var cmd = yield sh['sample-cmd --help']();

      var out = '', buf;

      while (buf = yield read(cmd.stdout)) {
        out += buf.toString();
      }

      should.exist(out);
      out.should.equal('trololol\n');


    })(done);

  });

  it('should throw errors on missing cmds', function(done){
    co(function *(){
      yield sh.idontexist()
    })(function(err){
      should.exist(err);
      err.message.should.equal('not found: idontexist');
      done();
    });
  })
})
