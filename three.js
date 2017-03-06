var fs = require('fs');
if (process.argv.length == 3) {    
    var buffer = fs.readFileSync(process.argv[2]);
    var stringBuf = buffer.toString();
    console.log (stringBuf.split('\n').length - 1);
} else {
    console.log ('invalid arguments');
}