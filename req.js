const request = require('request');

function req() {
    request.get('http://localhost:8080/get');
    console.log(1)
    setTimeout(()=>req(),1000);
}


req()

