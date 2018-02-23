var config = require("./config");
var executionReport = require("./modules/ExecutionReport");
var topFeatures = require("./modules/TopFeatures");

var express = require('express');
var app = express();


app.get('/', function (req, res) {
    
    res.send('Welcome to CodeOreo');
});

app.get('/ExecutionInfo*', function (req, res) {
    
    executionReport.getExecutionReport(req, res);
});

app.get('/topSuccessFeatures', function (req, res) {
    res.end("Coming Soon...");
    //var number = req.query.number;
    //topFeatures.getTopFeaturs(req, res, number);
});

app.get('/topTestCaseSuccess', function (req, res) {
    res.end("Coming Soon...");
    //var number = req.query.number;
    //topFeatures.getTopFeaturs(req, res, top);
});


var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
 })
 