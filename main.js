
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.text());

/* Initial declaration of variables */

var result = 4;
//var pressedSign = null;

app.get('/calculate', function (request,response) {
    response.send('The result is: ' + result);
});

app.post('/calculate/add', function (request,response) {
    var value = request.body;
    result += Number(value);
    response.status(204).send();
});

app.post('/calculate/ded', function (request,response) {
    var value = request.body;
    result -= Number(value);
    response.status(204).send();
});

app.post('/calculate/mul', function (request,response) {
    var value = request.body;
    result *= Number(value);
    response.status(204).send();
});

/*
app.get('/',function (request,response) {
    response.sendFile(__dirname + '/index.html');
    });


app.get('/calculate',function (req,res) {

    var result = req.query.resultBox;
    totresult.push("Calculation Result is " + result)
    console.log(totresult);
    res.send(totresult);
    });
*/

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("server is running on http://%s:%s", host, port)
});

