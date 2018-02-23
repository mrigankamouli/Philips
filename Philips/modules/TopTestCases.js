'use strict';
var config = require("../config");

var MongoClient = require('mongodb').MongoClient;
var mongoURL = config.mongoDBInitial+config.mongodbHOST+':'+config.mongodbPORT;

function 
MongoClient.connect(mongoURL,function(err, client) {
    var db = client.db(config.mongoDBName);
    var collection = db.collection(config.mongoCollectionName);

    collection.group(['count', 'featureName'], {'testStatus':"Pass"}, {"count":1}, "function (obj, prev) { prev.count++; }", function(err, results) {
        
        for(var i =0 ; i<results.length; i++)
        {

        }
        console.log(results);
        client.close();
    });
});
