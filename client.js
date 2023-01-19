const net = require("net");
// establishes a connection with the game server
const connect = function () { //connect() returns an object that can be used to interact with the server
  const conn = net.createConnection({ 
    host: "165.227.47.243",
    port: 50541
  });

  conn.on("data", (data) => { // recieves and prints out data from the server
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: BUP");
    // conn.write("Move: up")
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn; // an object that can be used to interact with the server
};


module.exports = {
  connect,
}