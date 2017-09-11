var https = require('https');


function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var rawData = '';

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      rawData += chunk;
      console.log(rawData);
    })
  })
}

getAndPrintHTML();