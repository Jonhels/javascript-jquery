// Mandatory assignment
// Create one page with html, css and js
// Similar in complexity with examples on page 80-83 and 141-143 in the book
// Free to choose topic, but should be different from the examples in the book
// Styling should be on the same level as the examples in the book
// Do not copy styling from the book

// in a seperate file define goal of the script, break the goal in series of tasks (ordered list) that have to be performed step by step to achive the goal. Sketch out the tasks in a flowchart
// Sources: ch1 in book and lectore notes from week 5 (p. 16-21)
// Deliver plan in pdf

// Javascript implementation
// Use external script file page 47-49 and 51 in the book
// Path should be relative (local)
// Use good coding practices taught in the class, and the ones in this guide
// https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
// For comments follow guides in the task II. comments (in the mandatory assignment)

// Script must contain the following: 

// 1. Objects. Resource: Lecture notes from week 8 pp. 2-11, and the resources recommended there, p. 11

// Create at least three objects using a class
// The class should initialize at least three properties in the constructor function and include at least one additional method (beside the constructor)

// The objects should contain at least one property that has a more complex value, such as an array or another object
// Resources: Page 118-119 in the book. Lecture week 7, p. 13

// Display information about your objects to the user interface
// Page 110-111 in the book

// 2. Built-in objects. Lecture notes from week 8. Page 120 - 139 in the book

// Use one property or method of the window object to add functionality/information that is relevant for your web page. You are free to choose the property/method
// Resources: Page 124 has a list of properties/methods that you can choose from in the book

// Use one property or method of the document object to add functionality/information that is relavant for your web page. 
// See page 126 for a list of properties/methods you can choose from

// Use one property or method of the string object on at least one of the string value you have in your web page
// See page 128 for a list of properties/methods you can choose from

// Use one method/property of the number object OR the math object
// See page 132 / 134 for a list of methods/properties you can choose from

// Use one method of the date object to get/Set the date and time for the Date object that you have created
// See page 137 for a list of methods you can choose from


// What kind of script do i want to create?

// I want to generate html elements from an array to the browser window 
// I want to have close to no html in the html file but only create an array that wil generate this for me 
// I want to update the page with a button 
// Perhaps a menu of some sort


class Person {
    constructor(name, picture, age, information, home, hobbies, funfact) {
        this.name = name;
        this.age = age;
        this.information = information;
        this.home = home;
        this.hobbies = hobbies;
        this.picture = picture;
    }

    sayHello() {
        return `<div class="divheigh">
                    <h1>Hello, my name is ${this.name} and I am ${this.age} years old</h1></h1>
                    ${this.picture}
                    <p>${this.information}</p>
                    <p>Hobbies: ${this.hobbies} </p>
                    <p>Hobbies: ${this.funfact} </p>
                </div>
                <div class="backbutton">${this.home}</div>`;
    }
}

const people = [
    new Person(
        'Ali',
        '<img src="./img/bob.jpeg" alt="bob"></img>',
        27,
        'When I am not lost in a good book, I love to spend time in the kitchen experimenting with new recipes and cooking up delicious meals. Cooking is not only a hobby for me, but also a way to show love and care for others. There is something really special about preparing a meal for someone and seeing their face light up when they take that first bite.',
        '<a href="./index.html">Back to start</a>',
        ['reading', ' cooking', ' hiking']
    ),
    new Person(
        'Jane',
        '<img src="./img/jane.jpg" alt="bob"></img>',
        30,
        'Hi there, I am Jane, a 30-year-old woman who is always up for a good time. I describe myself as a happy little woman, because I truly believe that life is too short to be anything but happy.',
        '<a href="./index.html">Back to start</a>',
        ['painting', ' traveling', ' dancing']

    ),
    new Person(
        'Samantha',
        '<img src="./img/samantha.jpg" alt="bob"></img>',
        28,
        'Hello there, I am Samantha, a 28-year-old woman who values family and happiness above all else. As a happy family woman, I love spending time with my loved ones and creating lasting memories that we can cherish together.',
        '<a href="./index.html">Back to start</a>',
        ['swimming', ' fishing', ' watching movies']
    )
];

const personInfo = document.getElementById('person-info');

let i = 0;

function displayNextPerson() {
    if (i < people.length) {
        const person = people[i];
        personInfo.innerHTML = person.sayHello();
        i++;
    }
}

const updateButton = document.getElementById('updatebutton');
updateButton.addEventListener('click', displayNextPerson);

// Mandatory assignment part 2: Built-in Obects
// a) Use one property or method of the window object to add functionality/ information that is relevant for your web page. You are free to choose the property/method.
let width = screen.width;
document.getElementById("veiwport").innerHTML =  `Your veiwport is ${width} px`;

// b) Use one property or method of the document object to add functionality/ information that is relevant for your web page. You are free to choose the property/method
let lastModified = document.lastModified
document.getElementById("lastmodified").innerHTML = `Last modified on ${lastModified}`;

// c) Use one property or method of the string object on at least one of the string values that you have in your web page.
let information = 'Mandatory assignment - JavaScript - IDG1011'
let uppercase = information.toUpperCase();

document.getElementById("assignment").innerHTML = `${uppercase}`;

// d) Use one method/property of the number object OR the Math object.
let visitors = Math.floor(Math.random() * 100);

document.getElementById("visitors").innerHTML = `Todays visitors = ${visitors}`;

// e) Use one method of the Date object to get/set the date and time for the Date object that you have created
let date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerHTML = `We are now in the year: ${year}`;