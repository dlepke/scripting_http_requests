var getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase(html) {
  var upperCaseHTML = html.toLowerCase();

  console.log(upperCaseHTML);
}

getHTML(requestOptions, printUpperCase);