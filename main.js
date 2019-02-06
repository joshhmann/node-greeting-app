//keyword *require* is used to import modules. main.js now has access to methods in greeting.js
const greetings = require("./greeting.js");
const goodbyes = require ("./goodbye.js");

//"Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

greetings.greetingSpanish();

greetings.greetingIcelandic();


goodbyes.goodbyeEnglish();
goodbyes.goodbyeJapanese();
//run node main.js in cmd
