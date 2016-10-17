
//var express = require('express');
//var app = express();
//var bodyParser = require('body-parser');

//app.use(bodyParser.text());
/* Initial declaration of variables */
var result = 0;
var pressedNumber = null;
var pressedSign = null;

/* Displays the number that is pressed on the calculator */
function clickedOn(num) {
    if ((num == ".") && (pressedNumber == null)) {
        pressedNumber = "0."
    } else if (num == ".") {
        pressedNumber = pressedNumber + num.toString();
    } else if (pressedNumber == null) {
        pressedNumber = num;
    } else if (pressedNumber == "0") {
        pressedNumber = num;
    } else {
        pressedNumber = pressedNumber.toString()+num.toString();
    }
    document.getElementById("resultBox").value = pressedNumber;
}

/* Stores the pressed sign but first adds any pending pressedNumbers to the result */
function storeSign(sign) {
    if (pressedSign == "eq") {
        pressedSign = sign;
    } else {
        numToResult(pressedNumber);
        pressedSign = sign;
    }
    document.getElementById("resultBox").value = result;
}

/* Does the actual calculation, adding the value to result */
function numToResult(num){
    if ((result == 0) && (pressedSign == null)) {
        result = Number(num);
    } else if (pressedSign == "add") {
        result += Number(num);
    } else if (pressedSign == "sub") {
        result -= Number(num);
    } else if (pressedSign == "mul") {
        result *= Number(num);
    } else if (pressedSign == "div") {
        result /= Number(num);
    } else if (pressedSign == "eq") {
        result = Number(num);
    }
    pressedNumber = null; /* Clears the pressed number after numToResult */
    pressedSign = null; /* Clears the sign after it has been used in the calculation */
}

/* Adds the % functionality */
function toPercentage(){
    result = result/100;
    document.getElementById("resultBox").value = result;
}

/* Adds the change sign functionality */
function changeSign(){
    result = result*-1;
    document.getElementById("resultBox").value = result;
}

/* Shows the result of the calculation. Also */
function showResult(){
    if (pressedNumber != null)  {
        numToResult(pressedNumber);
        storeSign("eq");
    } else {
        storeSign("eq");
    }
    document.getElementById("resultBox").value = result;
}
/* Clears everything to start over */
function clearResult() {
    result = 0;
    pressedSign = null;
    pressedNumber = null;
    document.getElementById("resultBox").value = result;
}

var myFunction = function () {
    console.log(hello);
};


//app.get("/",function(request,response){
//    response.sendfile(__dirname+"/calculator.html")
//    });


//app.listen(4567);
//console.log("server is running");