//Initiallising node modules
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// var express = require("express");
// var path = require("path");
// var sql = require("mssql");
var cors = require('cors');
var express = require('express');
var tediousExpress = require('express4-tedious');
var app = express();

app.use(cors());


var config =
{
    userName: 'testserver',  
    password: 'SoftwareDev2018',  
    server: 'renomictest87.database.windows.net',  
    options: {encrypt: true, database: 'AngularSql'} 

}

//  var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  

app.use(function (req, res, next) {
    req.sql = tediousExpress(config);
    next();
});

//GET API

app.get('/api/vehicles', function (req, res) {

    req.sql("select * from vehicles for json path")
    .into(res);
})

app.get('/api/vehicles/:id', function (req, res) {
    req.sql("select * from Product where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
 });
//POST API
app.post("/api/user", function(req , res){
    var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password)";
    executeQuery (res, query);
});

//PUT API
app.put("/api/user/:id", function(req , res){
    var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    executeQuery (res, query);
});

// DELETE API
app.delete("/api/user /:id", function(req , res){
    var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
    executeQuery (res, query);
});


//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });