// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
// establishes a connection with the game server
const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

console.log("Connecting ...");
connect();

setupInput()