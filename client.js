const net = require('net');
const { IP, PORT} = require('./constants');
// const { setupInput, handleUserInput } = require('./input');
// const stdin = setupInput();


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on('connect', () => {
    console.log("I have connected");
    conn.write("Name: ALE");
   

//HANDLE USER INPUT
    // stdin.on('data', handleUserInput);

  });

  conn.setEncoding('utf8');

  //SENDS A MESSAGE TO INITIALIZE NAME
  
  conn.on('data', (data) => {
    console.log('from server:', data);
  })
  
  return conn;
}

module.exports = {
  connect,
};