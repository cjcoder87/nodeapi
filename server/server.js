var express = require('express'); 
var app = express();

var Connection = require('tedious').Connection;  
    var config = {  
        userName: 'testserver',  
        password: 'SoftwareDev2018',  
        server: 'renomictest87.database.windows.net',  
        // If you are on Azure SQL Database, you need these next options.  
        options: {encrypt: true, database: 'adventure'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        // executeStatement1();  
    });  

// app.post('/api/book', function(req, res, next){
//    var cope = req.body.params;
//    var query = connection.query('insert into cope set ?', cope, function(err, result) {
//      if (err) {
//        console.error(err);
//        return res.send(err);
//      } else {
//        return res.send('Ok');
//      }
// });
app.listen(8080);