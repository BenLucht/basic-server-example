var http = require('http');

// same as before, this time the port is defined in the 
// server again, just because
http.createServer(function (request, response) {

  // the browser requests something from the server and
  // here we can see all the stuff the browser sends to the
  // server to make it happen
  console.log(request);
}).listen(1337);

// small thing to note: you have to stop the other server
// that listens on this port before you can make a new one
// there can always only be one service running on a port