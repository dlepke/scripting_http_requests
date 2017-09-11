var https = require('https');


function getAndPrintHTML(options) {

  var rawData = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      rawData += chunk;
      console.log(rawData);
    })
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);