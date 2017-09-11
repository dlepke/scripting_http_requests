var getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(html) {
  var lowerCaseHTML = html.toLowerCase();

  console.log(lowerCaseHTML);
}

getHTML(requestOptions, printLowerCase);