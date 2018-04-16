const sh = require('..');
const should = require('chai').should();

describe('sh', function(){
  // it('should return a Promise on property access', function(){
  //   const ls = sh.ls;
  //   should.exist(ls);
  //   ls.should.be.a('Promise');
  // })

  it('should return a stream', async function(){
    const cmd = sh["node -p '1'"];
    const {stdout} = await cmd;
    console.log(stdout);
    return cmd;
    //cmd.should.have.property('pid');
  });

  //it('should execute cmd', function(done){
    //const node_eval = 'node -p "1"';
    //co(function *(){
      //const cmd = yield sh[node_eval]();

      //const out = '', buf;

      //while (buf = yield read(cmd.stdout)) {
        //out += buf.toString();
      //}

      //should.exist(out);
      //out.should.equal('1\n');

    //})(done);
  //});

  //it('should allow hyphenated commands', function(done){

    //process.env.PATH = process.env.PATH + ":" + __dirname

    //co(function *(){
      //const cmd = yield sh['sample-cmd --help']();

      //const out = '', buf;

      //while (buf = yield read(cmd.stdout)) {
        //out += buf.toString();
      //}

      //should.exist(out);
      //out.should.equal('trololol\n');


    //})(done);

  //});

  //it('should throw errors on missing cmds', function(done){
    //co(function *(){
      //yield sh.idontexist()
    //})(function(err){
      //should.exist(err);
      //err.message.should.equal('not found: idontexist');
      //done();
    //});
  //})
});
