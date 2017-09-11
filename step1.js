var https = require('https');


function getAndPrintHTMLChunks() { //should utilize https library to GET a given URL
  //should console.log each chunk of data as it is received,
  //concatenated with a newline character '\n' so you can
  //visualize each chunk

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');


    response.on('data', function(chunk) {
      console.log(chunk + '\n')
    })
  })
};

getAndPrintHTMLChunks();