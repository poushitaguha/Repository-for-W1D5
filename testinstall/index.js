var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message = "Hello " + chalk.bold("World");
console.log(message);

var message = "Hello " + chalk.underline("World");
console.log(message);

var message = "Hello " + chalk.italic("World");
console.log(message);

var message = "Hello " + chalk.magentaBright("World");
console.log(message);

var message = "Hello " + chalk.gray.strikethrough("World");
console.log(message);