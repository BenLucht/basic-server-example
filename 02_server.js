// we need to import the module/package http
// we do not have to install it because it is included in node
var http = require('http');

// instead of defining the port inside the server object,
// we do it here at the top. not necessary in this small
// example, but in a bigger project one might use this variable
// at multiple places, so it is more maintainable to define it
// just this once
var PORT = 1337;

// this litteraly creates the server
// the outer function is the server, the inner function is
// the description of what the server is supposed to do
// when called
// you might notice that we have ".createServer" and ".listen"
// hooked up directly. chaining is possible here because 
// "createServer" does exactly that, it creates an instance of
// the server and that server has a function called "listen". 
// a more verbose way to do it would be
//   var server = http.createServer(function (request, response) {
//     console.log("test");
//   });
//   server.listen(PORT);
http.createServer(function (request, response) {
  console.log("test");
}).listen(PORT);