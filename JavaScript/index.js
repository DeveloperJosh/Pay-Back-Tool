var net = require('net');
var mysql = require('mysql');
const readline = require('readline');

console.log("Thank You For Using Pay Back Tool")
console.log("This Is The Tagets Info")

var info = new Object(),
    str = 'info';

info.Name              = 'Daniella';
info.City              = 'Sarnia';
info.State             = 'Ontario';
info.CountryName       = 'Canada';
info['Phone_Number']   = '548-997-2858';
info[str]              = 'Time To Hack';

console.log(info);

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "TBQOz51q79",
  password: "AtR4gqtESJ",
  database: "TBQOz51q79"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Hackinfo (Hack, Reason) VALUES ('Hacker', 'Took Daniella Down')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Info Sent To Database");
  });
});

var dns = require('dns');
var ip = dns.lookup('www.godlyth.xyz', function (err, addresses, family) {
  console.log(addresses);
});

var isip = require('isip');
  isip('80.233.40.69');

  var server = net.createServer(function(c) {
  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

server.listen(8124, function() { 
  console.log('')
  console.log('Ip Found');
})
console.count()

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT);
    }, 8124);
  }
});

rl.question('How many Bots do you want to send', (answer) => {

  console.log(`Sending Bots To 104.248.60.43 ${answer} Bots`)
  console.log('The Attack Is Done')
  console.log('Now Close The CMD')

});
