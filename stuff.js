var counter = function(arr){
    return "Length: " + arr.length;
};

var adder = function(a, b){
    return `Sum is ${a+b}`;
};

var pi = 3.14;

module.exports.counter = counter;
module.exports.pi = pi;
module.exports.adder = adder;