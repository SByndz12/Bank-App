var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "shraddhabyndoor",
  password: "Apple2002"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE MadStudentBank", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE users" +
              "(" + 
              "first_name  varchar(50)," +
              "last_name   varchar(50)," +
              "phone_number  varchar(20)," +
              "email     varchar(50)," +
              "userid    varchar(50)," +
              "password   varchar(50)" +
              ");";
    con.query(sql , function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });