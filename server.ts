import http = require('http');
var port = process.env.port || 1337


var server = http.createServer(function (req, res) {
    // set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    //set resopnse content
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('<html><body><p>Hello,This is home Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/student") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/admin") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();

    }
    else if (req.url == '/data') {
        //var obj = app.listen(5000);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Test" }));
        res.end();
    }
    else
        res.end('Invalid Request!');


}).listen(port);

//var express = require('express');
//var app = express();
//app.get('/', function (req, res) {

//    var sql = require("mssql");

//    // config for your database
//    var config = {
//        user: 'escurity-user',
//        password: '123',
//        server: 'ESCURITY001',
//        database: 'CCS-New'
//    };

//    // connect to your database
//    sql.connect(config, function (err) {

//        if (err) console.log(err);

//        // create Request object
//        var request = new sql.Request();

//        // query to the database and get the records
//        request.query('select * from Student', function (err, recordset) {

//            if (err) console.log(err)

//            // send records as a response
//            res.send(recordset);

//        });
//    });
//});

//server.listen(5000); //6 - listen for any incoming requests
//console.log('Node.js web server at port 5000 is running..')