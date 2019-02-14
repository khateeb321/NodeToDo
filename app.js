var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter); //Inherited functionality 

var p1 = new Person('P1');
var p2 = new Person('P2');
var p3 = new Person('P3');

var people = [p1, p2, p3];

people.forEach(function(person){
    person.on('speak', function(msg){ // attaching cutom events
        console.log(person.name + " said: " + msg);
    });
});

p1.emit('speak', 'I am P1');
p3.emit('speak', 'I am P3');