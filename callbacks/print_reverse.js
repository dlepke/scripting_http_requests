var getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html) {

  var splitHTML = html.split('');

  var reverseArray = splitHTML.reverse();

  var joinArray = reverseArray.join('');

  console.log(joinArray);
}

getHTML(requestOptions, printReverse);