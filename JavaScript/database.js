var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "TBQOz51q79",
  password: "AtR4gqtESJ",
  database: "TBQOz51q79"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Hackinfo (Hack VARCHAR(255), Reason VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});