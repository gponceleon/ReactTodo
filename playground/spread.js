/*function add (a, b){
    return a+b;
}

console.log(add(3,1));

var toAdd = [9,5,8];
console.log(add(...toAdd));

var groupA = ['Jen','Cory'];
var groupB = ['Victor'];

var final = [3,...groupA,...groupB];
console.log(final);*/

var person = ['Andrew',25];
var personTwo = ['Jen',29];

function Greeting(name,age){
    console.log(`Hi ${name} you are ${age}`);
}

Greeting(...person);
Greeting(...personTwo);

var names = ['Mike','Ben'];
var final = ['Andrew']
final = [...final, ...names];

for(const value of final){
    console.log(`Hi ${value}`);
}