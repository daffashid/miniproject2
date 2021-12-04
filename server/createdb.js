var mysql = require('mysql');

var merdb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "blibli"
  });


merdb.connect(function(err){
    merdb.query(`CREATE DATABASE merchant`, function (err, result) {
      if (err) throw err;
      console.log(`Database merchant created`);
    });
  })