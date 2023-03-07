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

// Different ways of adding value to an existing value
let number = 10;

// The value will become 11 after we add 1 to the current value 10
number = number + 1;

// This will do the same, adding 1 to the current value
// This is the preffered way
number++;

// Subtract one fron the current value in number
number--;

// To add 10 to the current value
number += 10;

// To remove 5 from the current value
number -= 5;

// To multiply the current value by 2
number *= 2;

// To divide the current value by 2
number /= 2;

// These are called shorthand notation
// +=, -=, *=, /=

// NaN = Not a number

// Number cincatenation
let likes = 'the blog has ' + likes + ' likes';
console.log(likes);

// Template strings
// Means that we inject variables into the string without needing to use + to concatenate variables

const title = 'Best reads of 2023';
const author = 'Mario';
const favorites = 30;

// concatenation way
let concatenation = 'The blog called ' + title + ' by ' + author + ' has ' + favorites + ' favorites';
console.log(concatenation);

// Template string way
let templateString = `The blog called ${title} by ${author} has ${favorites} favorites`;
console.log(templateString);

// Creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${favorites} favorites</span>
`;
console.log(html);

// Arrays (object datatypes)
let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);

// Get first item in the array
console.log(ninjas[0]);

// Change array item
ninjas[1] = 'ken';
console.log(ninjas[1]);

// Strings and numbers in same array
let combinedArray = ['shaun', 'crystal', 30, 20];
console.log(combinedArray);

// .length shows how many items the array have and outputs with a number
console.log(combinedArray.length);

// Array methods
// Method in javascript means: acrions that can be performed on objects

// .Join(), adds specified character between array abjects
// We will add a comma
let join = ninjas.join(',');
console.log(join);

// .indexOf(), returns the position of the first occurrence of a value in a string
// Returns -1 if the value is not found
let indexOf = ninjas.indexOf('chun-li');
console.log(indexOf);

// .concat(), merges two or more arrays
let concat = ninjas.concat(['ken', 'crystal']);
console.log(concat);

// .push(), adds one or more elements to the end of an array and returns the new length of the array
let push = ninjas.push('ken');
console.log(push);

// .pop(), removes the last element from an array and returns that value to the caller
let pop = ninjas.pop();
console.log(pop);

// Null and undefined
// Null value represents the intentinal avsence of any object value
// Undefined means that there have not been assigned a value

// Null example
let aging = null;
console.log(aging, aging + 3, `the age is ${aging}`);

// Boolean
// Booleans are the primitive data types that can either be true or false

// Booleans $ comparisons
console.log(true, false, 'true', 'false');

// Methods can reurn booleans
let anEmail = 'email@email.mail';

// .includes(), determines wheneter an array includes a certain value among its entries, returning true or false as appropriate
// This will return true since we have @ in the email address
let includes = email.includes('@');
console.log(includes);

// This will return false, since we do not have Jon in the array
let people = ['mario', 'luigi', 'toad'];
let stringInclude = people.includes('Jon');
console.log(stringInclude);

// Comparison operators
// != means not equal
let myAge = 27;
// True
console.log(myAge == 27);
// False
console.log(myAge == 30);
// True
console.log(myAge != 30);
// False
console.log(myAge != 27);
// True
console.log(myAge > 20);
// False
console.log(myAge < 27);
// True
console.log(myAge <= 27);
// True
console.log(myAge >= 27);

let string = 'Jon';

// True
console.log(string == 'Jon');
// False
console.log(string == 'jon');
// False
console.log(string > 'crystal');
// True
console.log(string > 'Anders');
// False
console.log(string > 'jon');
// False
console.log(string > 'anders');

// Loose comparison (different tyoes can still be equal)
let width = 25;
// True
console.log(width == 25);
// True
console.log(width == '25');
// False
console.log(width != 25);
// False
console.log(width != '25');

// Strict comparison (diffrent types cannot be equal)
// True
console.log(width === 25);
// False
console.log(width === '25');
// False
console.log(width !== 25);
// True
console.log(width !== '25');

// Type comversion
let score = '100';

// Will return 1001
console.log(Score + 1);

// The Number() method converts a value to a number
score = Number(score);
// Will return 101
console.log(score + 1);
// Will return what type we have in the variable, this will reurn with number
console.log(typeof score);

// We cannot convert everything with Number()
// This will return NaN (Not a Number)
let notNumber = Number('hello');
console.log(notNumber);

// We can do the same thing with string(), here we convert the number into a string
// This will return 50, string
let stringNumber = String(50);
console.log(stringNumber, typeof stringNumber)

// We can do the same thing with Boolean
// 0 will always be false, while everything from 1 and up will return true
// This will return false 'Boolean'
let booleanNumber = Boolean(0);
console.log(booleanNumber, typeof booleanNumber);

// This will reurn true since it's a string and not a number
let booleanString = Boolean('0');
console.log(booleanString, typeof booleanString);