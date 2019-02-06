
//module.exports keyword makes properties and methods available outside the module file
//other files can access these functions

// one way to write modules. module.exports is the object returned from require(). It is an empty object by default
// module.exports = {
//   greetingEnglish: function() {
//     console.log("Hello");
//   },
//
//   greetingJapanese: function() {
//     console.log("Konichiwa");
//   }
// };

exports.greetingEnglish = function() {
  console.log("Hello");
}

exports.greetingJapanese = function() {
  console.log("Konichiwa");
}

exports.greetingSpanish = function() {
  console.log("Hola");
}

exports.greetingIcelandic = function() {
  console.log("Halló");
}

//using module.exports causes an error. exports is a reference to module.exports and connot reassign the object module.exports.
//you either use module.exports or exports within your Node app.
//module to be specific object type == module.exports otherwise use exports.
//using exports is reccomended unless you are planning on having your module be a specific object type
// Module	A set of functions you want to include in your application
// module.exports	The variable that gets returned from require(). It is an empty object by default, and it can be reassigned to anything.
// exports	A reference to module.exports. Any reassignment of  exports will not be available outside of the module.
