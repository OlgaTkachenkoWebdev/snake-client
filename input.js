let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
    if (key === 'i') {
      conn.write("Say: I AM THE DANGER");
    }
    if (key === 'o') {
      conn.write("Say: gotta go fast");
    }
    if (key === 'p') {
      conn.write("Say: I AM THE ONE WHO NOX");
    }
  };

  process.stdin.on('data', handleUserInput);

  return stdin;
};


module.exports = {
  setupInput,
}