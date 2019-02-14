var stuff = require('./stuff');

console.log(stuff.counter(['123', '345', '567']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(3, stuff.pi));