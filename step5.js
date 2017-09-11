function printHTML (html) {         //copy/paste from here
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};                                  //to here




module.exports = function getHTML(options, callback) {

  var https = require('https');

  var rawData = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      rawData += chunk;
      callback(rawData);
    })
  })
}