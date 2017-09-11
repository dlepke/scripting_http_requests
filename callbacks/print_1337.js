var getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337(html) {

  var htmlArray = html.split("");

  for (var x = 0; x < htmlArray.length; x++) {
    switch(htmlArray[x]) {
      case "l":
        htmlArray[x] = "1";
        break;
      case "e":
        htmlArray[x] = "3";
        break;
      case "t":
        htmlArray[x] = "7";
        break;
    }
  }
  var newHTML = "";
  for (var y = 0; y < htmlArray.length; y++) {
    newHTML += htmlArray[y];
  }
  console.log(newHTML);
}

getHTML(requestOptions, print1337);