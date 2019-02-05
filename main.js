//keyword *require* is used to import modules. main.js now has access to methods in greeting.js
const greetings = require("./greeting.js");

//"Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

//run node main.js in cmd
