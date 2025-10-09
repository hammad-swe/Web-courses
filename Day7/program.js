// message 
console.log("Hello World!");

// variable declaration
// var name = "Hammad";
var age = 25;
let b = 3;
const c = 5;

console.log(b);

// operators
let a = 10;
let d = 20;
let sum = a + d;

console.log(sum);
console.log(a - d);

// function
function multiply(a, b) {
    return a * b;

}
console.log(multiply(5, 6));

// array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);

// object
let person = {
    name: "Hammad",
    age: 25,
    isStudent: true
};

console.log(person.name);

// conditional statements
let age = 20;
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// loop
for (let i = 0; i < 5; i++) {
    console.log(i);
    
}

switch (age) {
    case 18:
        console.log("Just became an adult");
        break;
    case 19:
        console.log("19 years old");
        break;
    case 20:
        console.log("20 years old");
        break;
    default:
        console.log("Age is just a number");
}

