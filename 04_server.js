var http = require('http');

// still pretty much everything the same, but now with
// more html!
http.createServer(function (request, response) {

  // small change, let us have the text in a variable
  var text = 'This is a HTML response!';

  // this is the same code as in the description, just this
  // time we use a so called "template string"
  // a regular string cannot be spread over multiple lines
  // which makes the formatting look ugly and hard to maintain.
  // also, it is much easier and cleaner to include variables
  response.end(`
    <html>
      <body>
        <h1 style="color: red;">${text}</h1>
      </body>
    </html>
  `);
}).listen(1337);