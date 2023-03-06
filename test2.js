// Semicolon is used to show that we are finished with the statement (Code sentence). 
// It's not needed, but reccomended to always use after the statements are finished
;

// Creating variable
let age = 27;
let year = 2022;

// Log variable to console
console.log(age);

// Log multiple variables to the console
console.log(age, year);

// Reset value of the variable to a new value
age = 28;
year = 2023;

// Constant variable is a variable where the value cannot be changed later in the code. It's constant
const hundred = 100;
console.log(hundred);


// Different data types in javascript:
// Number: 1, 2, 3, 100, 3.14
// String: 'hello, world' "email@email.com"
// Boolean: true / false
// Null: Explicitly set a variable with no value
// Undefined: For variables that have not yet been defined
// Object: Complex data structures
// Arrays, Dates, Literals etc
// Symbol: Used with objects

// Strings
console.log('hello, world');

let email = 'email.jon@email.com';
console.log(email)

// Strings concatenation (joining two strings together)
let firstName = 'Jon Helge';
let lastNAme = 'Skjærstein';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Getting characters 
// [] Square brackets can be used to get character from a string
// JAvascript always counts from 0 (first letter)
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

// String length (counts spaces in the string as well)
console.log(fullName.length);

// String methods 
// Ends with a parentheses because it's a method
// Dot (.) beofre the method means that this is what the method is for
// .toupperCase() turns the string value uppercase
console.log(fullName.toUpperCase());

// Takes the value, turns it lowercase and stores it into a new variable called nameLowercase
let nameLowercase = fullName.toLowerCase();
console.log(nameLowercase);

// With .indexOf() we can find the position of a certain character inside a string
// Passing a value into a method is called an argument
// .indexOf() returns a number where it says where in the string the character is
let index = email.indexOf('@');
console.log(index);

// Common string methods
let schoolEmail = 'school@school.mail';

// .lastIndexOf() finds the last instance of a character in a string
let lastIndexResult = schoolEmail.lastIndexOf('@');
console.log(lastIndexResult);

// Slice method
// Cut out a part of the string and store it inside a variable
let slice = schoolEmail.slice(0, 6);
console.log(slice);

// Substring method
// Create a substring from a string
let substring = schoolEmail.substr(0, 7);
console.log(substring);

// Replace method
// Replace character(s) with new character(s)
// Will only replace first character it comes to
let word = 'Javascript';
let replaceCharacters = word.replace('Java', 'Fun');
console.log(replaceCharacters);

// Numbers type
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// With numbers type one can do all math operators
// +, -, *, /, **(exponentiation), %

console.log(10 / 2);

let mathResult = radius % 3;
console.log(mathResult);

let newResult = pi * radius ** 2;
console.log(newResult);

// Order of operation - B I D M A S
let formulaResult = 5 * (10 - 3) ** 2;
console.log(formulaResult);