const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.resume();
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  })
  
  return conn;
}

console.log("Connecting...");
connect();

