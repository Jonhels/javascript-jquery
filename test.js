// Alert hello world in the browser
// alert('hello, world');
// ; marks the end of the sentence/line of code. Will work without, but cleaner with
// console.log(1); Function that logs to the console
// Variables have to be one word, but use camelCase if you want to have  a space
// Variables cannot start with a number
// Variables cannot start with reserved keywords like const or let
// Create variable names meaningful that makes sense

// Creating variable
let age = 25;
let year = 2023;

// Logs variable to console
console.log(age);

// Multiple variables in one function that logs to the console
console.log(age, year)

// Reset value of the variable to a new value
age = 30;
console.log(age);

// Create variable, but we do not want the value of the variable to change with const (constant)
const points = 100;
console.log(points);

// Javascript data types

// Number: 1, 2, 3, 100, 3.14

// String: 'hello, world' "jonhels8888@gmail.com"

// Boolean: true / false

// Null: Explicitly set a variable with no value

// Undefined: For variables that have not yet been defined

// Object: Complex data structures - Arrays, Dates, Literals etc

// Symbol: Used with objects



// Strings
console.log('hello, world');

let email = 'jonhels8888@gmail.com';
console.log(email);

// Strings concatenation (joining two strings together)
let firstName = 'Jon Helge';
let lastName = 'Skjærstein';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters [] square brackets can be used to get a character from a string. Javascript always counts from 0 (first letter)
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

// String length (Counts spaces in the string as well)
console.log(fullName.length)

// String methods (ends with a space because it's a method. Dot (.) before the method means that this is what the metod is for
console.log(fullName.toUpperCase());

// Takes the name and turns it lowercase, stores it in a variable calles result
let result = fullName.toLowerCase();
console.log(result);

// Find the position of a certain character inside a string with index
// Passing a value into a method is called an argument
// Gives back a number when using indexof
let index = email.indexOf('@');
console.log(index);

// Common string methods
let newEmail = 'jonhsk@stud.ntnu.no';

// Finds the last instance of a character in a string
let lastIndexResult = newEmail.lastIndexOf('j');
console.log(lastIndexResult);

// Slice method | Cut out a past of the string and store it inside a variable
let resultSlice = newEmail.slice(0, 6);
console.log(resultSlice);

// Create a substring from a string
let anotherEmail = 'jonhels@msn.com';

let resultSubstr = anotherEmail.substr(0, 7);
console.log(resultSubstr);

// Replace a character(s) with another character(s), only replaces the first character it comes to
let myName = 'Javascript';
let myNameResult = myName.replace('Java', 'Gava');
console.log(myNameResult);


// Numbers type
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// With numbers you can do all math operators
// +, -, *, /, ** (forhøyet), %

console.log(10 / 2);

let mathResult = radius % 3;
console.log(mathResult)

let newResult = pi * radius ** 2;
console.log(newResult);

// Order of operation - B I D M A S 

let formulaResult = 5 * (10 - 3) ** 2;
console.log(formulaResult);

let likes = 10;
// Both here means the same, first one is commented out
// likes = likes + 1;
likes++;
// Can do the same with minus
// likes--;
// To add 10 one can use: likes += 10; (takes current value and adds a new value to it).
// To remove 5 one can use: likes -= 5; (takes current value and remove 5 from it);
// To time it by 2 one can use: likes *= 2; (Times current value with 2)
// To divide by 2 one can use: likes /=2; (Divides current value with 2)
// This is called shorhand notaion (+=)
console.log(likes);

// NaN - not a number

// Number concatenation 

let resultLike = 'the blog has ' + likes + ' likes';
console.log(resultLike);


// Template strings
// Inject variables into the string without needing to use + to concatenate them

const title = 'Best reads of 2023';
const author = 'Mario';
const favorites = 30;

// Concatenation way
let stringResult = 'The blog called ' + title + ' by ' + author + ' has ' + favorites + ' favorites';
console.log(stringResult);

// Template string way
let templateResult = `The blog called ${title} by ${author} has ${favorites} favorites`;
console.log(templateResult);

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
console.log(ninjas[0]);

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(random.length);

// array methods

let resultJoin = ninjas.join(',')
console.log(resultJoin);

let resultIndex = ninjas.indexOf('chun-li');
console.log(resultIndex);

let resultConcat = ninjas.concat(['ken', 'crystal']);
console.log(resultConcat);

let resultPush = ninjas.push('ken');
console.log(resultPush);

let resultPop = ninjas.pop();
console.log(resultPop);


// Null and undefined

let aging = null;

console.log(aging, aging + 3, `the age is ${aging}`);


// Boolean

// Booleans & comparisons
console.log(true, false, 'true', 'false');

// Methods can reurn booleans
let myEmail = 'amazingjon@email.mail';

let resultInculdes = email.includes('@');
console.log(resultInculdes);

let people = ['mario', 'luigi', 'toad'];

let resultNames = people.includes('luigi');
console.log(resultNames);

// Comparison operators
let birthday = 25;
console.log(birthday == 25);
console.log(birthday == 30);
console.log(birthday != 30);
console.log(birthday != 25);
console.log(birthday > 20);
console.log(birthday < 25);
console.log(birthday <= 25);
console.log(birthday >= 25);


let string = 'Jon';

console.log(string == 'Jon');
console.log(string == 'jon');
console.log(string > 'crystal');
console.log(string > 'Anders');
console.log(string > 'jon');
console.log(string > 'anders');


let width = 25;
// Loose comparison (different types can still be equal)

console.log(width == 25);
console.log(width == '25');
console.log(width != 25);
console.log(width != '25');


// Strict comparison (different types cannot be equal)
console.log(width === 25);
console.log(width === '25');
console.log(width !== 25);
console.log(width !== '25');


// Type conversion
let score = '100';

console.log(score + 1);

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let resultType = Number('hello');
console.log(resultType);

let resultString = String(50);
console.log(resultString, typeof resultString);

let resultBoolean = Boolean(0);
console.log(resultBoolean, typeof resultBoolean);

let resultStringBoolean = Boolean('0');
console.log(resultStringBoolean, typeof resultStringBoolean);

