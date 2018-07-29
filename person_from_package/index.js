let privateName;

const person = {
  setName: function(name) {privateName = name},
  sayHello: function() { console.log(`Hello, I'm ${privateName}`)}
}

module.exports = person;
