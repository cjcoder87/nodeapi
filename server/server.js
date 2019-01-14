//Initiallising node modules
// var express = require("express");
// var path = require("path");
// var sql = require("mssql");
// var tedious = require("tedious");
var express = require('express');
var cors = require('cors');
var tediousExpress = require('express4-tedious');
var bodyParser = require("body-parser");
// var time = new Date().getUTCDate;

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

//GET API both work

app.get('/api/vehicles', function (req, res) {

    req.sql("select * from vehicles for json path, without_array_wrapper")
    .into(res);
})

app.get('/api/scenarios', function (req, res) {

    req.sql("select * from scenarios for json path, without_array_wrapper")
    .into(res);
})


app.get('/api/vehicles/:id', function (req, res) {
    req.sql("select * from vehicles where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, {});
 });
//POST API works
app.post("/api/books", function(req , res){
    req.sql("INSERT INTO books (id,bookname,bookyear) VALUES ('2', 'Harry Potter','1997')")
    // .param('id', req.params.id, TYPES.Int)
    .into(res.sendStatus(201), res);
    
});

//PUT API works
app.put("/api/vehicles/:id", function(req , res){

    req.sql("UPDATE vehicles SET ContactName = 'Vegeto' WHERE id = @id")
    .param('id', req.params.id, TYPES.Int)
    .into(res.sendStatus(200));
});

// DELETE API works
app.delete("/api/vehicles/:id", function(req , res){
    req.sql("DELETE FROM vehicles WHERE id = @id")
    .param('id', req.params.id, TYPES.Int)
    .into(res.sendStatus(204));

});


//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });