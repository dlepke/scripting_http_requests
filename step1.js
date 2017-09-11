var https = require('https');


function getAndPrintHTMLChunks() { //should utilize https library to GET a given URL
  //should console.log each chunk of data as it is received,
  //concatenated with a newline character '\n' so you can
  //visualize each chunk

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var rawData = '';

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    var rawData = '';

    response.on('data', function(chunk) {
      rawData += chunk;
      console.log(chunk + '\n')
    })
  })

};

getAndPrintHTMLChunks();