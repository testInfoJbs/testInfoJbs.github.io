// Create a request variable and assign a new XMLHttpRequest object to it.
/*var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
  // Begin accessing JSON data here
  }
}

// Send request
request.send();
*/

var PdfReader = require("pdfreader").PdfReader;
new PdfReader().parseFileItems("sample.pdf", function(err, item){
  if (item && item.text)
    console.log(item.text);
});
