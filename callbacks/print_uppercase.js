var getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(html) {
  var upperCaseHTML = html.toUpperCase();

  console.log(upperCaseHTML);
}

getHTML(requestOptions, printUpperCase);