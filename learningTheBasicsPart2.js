// Control flow
// Some terminology: iteration means cycling through. 1 iteration means once cycle through the loops codeblock

// for loops
console.log('---For loop---');
// We do not add semicolon ; at the end of an loop
// A loops job is to loop through code a set number of times 
// In a loop everything between { here } is called a codeblock
// We create a loop by using the for() keyword
// inside the parentheses we have three different things
// let i = 0; means initialisation variable. Here we say that we are going to create the variable i and set it equal to 0
// This variable is like a counter and keeps track of how many times we cycle through the loop.
// And how many times we run the code inside the loop
// i < 5; is calles a condition.
// This is going to evaluate to true or false. 
// If this condition is true then we are going to execute the code inside the codeblock
// If it's false then we are not going to execute the code inside the codeblock
// i++ is the final expression, and this is going to execute ecery time at the end of the codeblock
// This means that after everytime we loop through the code we are goint to take i and add 1 to it 
// This setup we have configured the loop to be means that the loop will be looped through the codeblock 5 times before it stops  

for (let i = 0; i < 5; i++) {
    // Show the value of variable i
    // With this we can see the loop counting in the console
    // We will not see five because we have set the loop to only run when it's let than 5
    console.log('in loop:', i);
}
// We want to show when the loop is finished
// This is only going to run when we have looped through our loop x amount of times
console.log('loop finished');

// With for loop or loops in general we don't want to set a ruleset to make it loop through code a certain amout of time
// Because often we use loops to loop through data or databases, it's considered bad practice to configure the loop like that 
// Let's create an array that we are going to pretend is a database for our loop

// Fake database (just an array)
let names = ['shaun', 'mario', 'luigi'];

// Here we create a loop that works like the last example but we have a new value 
// .length is going to take the lenght of variable called names (wich is 3) and it's going to say that as long as i is less than that value then it's going to cycle through the loop
// This ensures that we are going to cycle through each one 
for (let i = 0; i < names.length; i++) {
    // Log out the i to the console
    console.log(i);
    // Log out each name (each data)
    // Since names is an array we can log every item inside the array by using the number i generates
    // shaun = 0, mario = 1, luigi = 2
    console.log(names[i]);
    // Instead of logging to the console we could create a little snippet of html
    // A little template for each name 
    // Eventually we are going to output that to the browser
    let html = `<div>${names[i]}</div>`;
    // Logging out template to the console
    console.log(html);
}

// While loops
console.log('---While loop---');
// Do the exact same thing that a for loop does, it loops through some code a certain amount of times
// There is no real differense
// The only different is the syntax
// While loop is just an alternative to a for loop

// In a while loop we do not have 3 statements, but we have only one wich is the condition itself
// The problem that occors is that the i is not defined
// To solve this we must already declare the i before the loop have been created
// i is declared outside the loop
let i = 0;

// While loop
while (i < 5) {
    console.log('in loop: ', i);
    // We need to increment i at the end of the codeblock so we do not create an infinite loop
    i++;
}

// Create the same example with out fake database to show how a while loop looks like
// I'm using another character, but usually we use i
let a = 0;
while (a < names.length) {
    console.log(names[a]);
    a++;
}

// do while loops 
console.log('---do while loops---')
// A while loop where we always run a codeblock regardless of the condition beeing true or false in the variable

// Using a new character for the increment
let b = 6;

// Do will always be run once regardless of the condition beeing true or false
do {
    console.log('val of b is: ', b);
    b++;
}
// No codeblock on while in a do while loop
while (b < 5);

// This code will be run inside a block until it stops. But also when it's value is more than five
// if the value is less than five it will count upward until 5 is hit


// if statements
console.log('---if statements---');
// if a certain condition is true we will execute the codeblock¨
// This is not a loop, it's just once 

// Const with value of a number 
const age = 27;

// If statement that checks if variable age is more than 20
// If value is more than 20 it will execute code inside codeblock
if(age > 20) {
console.log('you are over 20 years old');
}

// if statement that checks if we have a certain amounts of items in an array



