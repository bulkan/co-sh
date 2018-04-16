const {promisify} = require('util');
const which = promisify(require('which'));
const child_process = require('child_process');
const execAsync = promisify(child_process.exec);

const sh = new Proxy({}, {
  get: function(receiver, _value) {

    //TODO: use a command-line args parser
    const value = _value.split(' ');
    
    // the command
    const cmd = value[0];
    
    // and its arguments/options
    const args = value.splice(1, value.length);
  
    return execAsync(_value)
      .catch(err => console.error(err));
  }
});



module.exports = sh;
