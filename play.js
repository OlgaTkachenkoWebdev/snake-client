// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
// establishes a connection with the game server
const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

console.log("Connecting ...");
let con = connect(); //connect() returns an object that can be used to interact with the server
// the object returned by connect() should be passed into setupInput()

setupInput(con) /* setupInput() places a reference to that object in another 
variable connection which is in a global scope of that module */