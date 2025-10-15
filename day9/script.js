// Array methods
let arr = [1,2,3,4,5];
arr.push(6); // Add to end
console.log(arr);
arr.pop(); // Remove from end
console.log(arr);
arr.shift(); // Remove from start
console.log(arr);
arr.unshift(1);
console.log(arr); // Add to start

// String methods
let str = "Hello,World!";
let strLength = str.length; // Length of string
console.log(strLength);
let index = str.indexOf("World"); // Find index of substring
console.log(index);
let slicedStr = str.slice(0,5);
console.log(slicedStr); // Slice string
let replacedStr = str.replace("World", "JavaScript");
console.log(replacedStr); // Replace substring

// Object methods
let obj = {
    name: "Ali",
    age: 15,
    city: "HARIPUR"

};
let keys = Object.keys(obj); // Get keys
console.log(keys);
let values = Object.values(obj);
console.log(values); // Get values
let entries = Object.entries(obj);
console.log(entries); // Get key-value pairs

// Date methods
let date = new Date();
console.log(date); // Current date and time

document.getElementById("date").innerText = date; // Display date in HTML element

let year = date.getFullYear();
console.log(year); // Get current year

let month = date.getMonth() + 1; // Months are zero-based

console.log(month); // Get current month

let day = date.getDate();
console.log(day); // Get current day of the month

let hours = date.getHours();
console.log(hours); // Get current hours

let minutes = date.getMinutes();
console.log(minutes); // Get current minutes

let seconds = date.getSeconds();
console.log(seconds); // Get current seconds
 

// Add two strings method
let firstName = "Ali";
let lastName = "Khan";
let fullName = firstName + " " + lastName;
console.log(fullName); // Concatenate strings
// concat method
let fullNameConcat = firstName.concat(" ", lastName);
console.log(fullNameConcat); // Concatenate strings with space

// toUpperCase and toLowerCase methods
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName); // Convert to uppercase

let lowerCaseName = fullName.toLowerCase();
console.log(lowerCaseName); // Convert to lowercase






