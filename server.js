// Node Server code

/*
  STEPS -
  1. Download Node installer from nodejs.org as per your OS
  2. Install Node
  3. Open a command window and type 'node -v'
  4. If node is properly install, node version will be displayed. 
     For any error, check documentation on nodejs website
  5. Run command -> node server
*/

var express = require('express');
var app = express();

var port = 8001;

// below statement is to execute index.html by default. 
// If your html name is different, then put your html name. for ex. (__dirname + '/demo.html')
app.use(express.static(__dirname + '/'));

// start a server on given port
app.listen(port);

console.log('Server started at : ' + port);