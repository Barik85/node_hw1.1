const person = require('person');
const personFromPackage = require('personFromPackage');

person.setName('Petya');
person.sayHello();
console.log(person.name);

personFromPackage.setName('Person from package');
personFromPackage.sayHello();
