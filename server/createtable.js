var mysql = require('mysql');

var tbldb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "blibli",
  database: "merchant"
});

tbldb.connect(function(err){
    // Create table
    var tbl1 = "CREATE TABLE account (id INT PRIMARY KEY, password VARCHAR (10), name VARCHAR (100), address VARCHAR (100), join_date DATETIME DEFAULT NOW(), phone_number INT (20))";
    tbldb.query(tbl1, function(err, result){
    if (err) throw err;
    console.log("Table account created");
    });

    var tbl2 = "CREATE TABLE product (id INT PRIMARY KEY, name VARCHAR (100), quantity INT (255), price INT (50))"
    tbldb.query(tbl2, function(err,result){
    if (err) throw err;
    console.log("Table product created");
    });
});