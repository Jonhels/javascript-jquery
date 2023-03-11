/* 
This script defines a Person class that has properties like, name, picture, age, information, home and hobbies, and a method called sayHello() that return a greeting string with information about the person. 

Regarding the implementation, the script creates three Person objects, sets their properties, and stores them in an array called people. Then, it defines a function called displayNextPerson() that checks if the current index
i is less than the length of the people array. If so, it retrives the next person object from the array and displays their information on the page by calling their sayHello() method. The function then increments the counter
variable i to get the next person object on the next function call. 

The script has a second part where it's defined property or method of the window object, document object, string Object, Math object and date object then displays it on the page. 

--

My reasoning for creating the script like this is because I wanted to generate information from an array, put it into a method and show it on the html page by connecting
it to an id. This will allow me to generate an html template on my website. But to go from the first array item to the next i needed to add a button that cycle through 
the array by incrementing i on click. 

*/

// Define a Person class with a constructor that takes name, picture, age, information, home and hobbies parameters.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Lecture 4: Classes / Built-in Objects
// Implementation of the tast 1 objects. a).
class Person {
    constructor(name, picture, age, information, home, hobbies) {
        this.name = name;
        this.age = age;
        this.information = information;
        this.home = home;
        this.hobbies = hobbies;
        this.picture = picture;
    }

    // Define a sayHello method that returns a string containing a greeting and information about the person
    // Implementation of the tast 1 objects. c).
    sayHello() {
        return `<div class="divheigh">
                    <h1>Hello, my name is ${this.name} and I am ${this.age} years old</h1></h1>
                    ${this.picture}
                    <p>${this.information}</p>
                    <p>Hobbies: ${this.hobbies} </p>
                </div>
                <div class="backbutton">${this.home}</div>`;
    }
}

// Create an array of Person objects with different preoperties
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Lecture 5: Decisions and Loops
// Implementation of the tast 1 objects. b).
const people = [
    new Person(
        'Ali', // name
        '<img src="./img/bob.jpeg" alt="bob"></img>', // picture
        27, // age
        'When I am not lost in a good book, I love to spend time in the kitchen experimenting with new recipes and cooking up delicious meals. Cooking is not only a hobby for me, but also a way to show love and care for others. There is something really special about preparing a meal for someone and seeing their face light up when they take that first bite.', // information
        '<a href="./index.html">Back to start</a>', // home
        ['reading', ' cooking', ' hiking'] // hobbies (array)
    ),
    new Person(
        'Jane', // name
        '<img src="./img/jane.jpg" alt="bob"></img>', // picture
        30, // age
        'Hi there, I am Jane, a 30-year-old woman who is always up for a good time. I describe myself as a happy little woman, because I truly believe that life is too short to be anything but happy.', // information
        '<a href="./index.html">Back to start</a>', // home
        ['painting', ' traveling', ' dancing'] // hobbies (array)

    ),
    new Person(
        'Samantha', //name
        '<img src="./img/samantha.jpg" alt="bob"></img>', // picture
        28, // age
        'Hello there, I am Samantha, a 28-year-old woman who values family and happiness above all else. As a happy family woman, I love spending time with my loved ones and creating lasting memories that we can cherish together.', // information
        '<a href="./index.html">Back to start</a>', // home
        ['swimming', ' fishing', ' watching movies'] // hobbies (array)
    )
];

// Get the element with the ID "person-info"
const personInfo = document.getElementById('person-info');

// Define a counter variale i and adda function displayNextPerson that displays the next person objext in the people array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
let i = 0;
function displayNextPerson() {
    // Check if the current index i is less than the length of the people array
    if (i < people.length) {
        const person = people[i];
        // Set the innerHTML of the personInfo element to the result of calling the sayHello Method of the current person object
        personInfo.innerHTML = person.sayHello();
        i++; // Increment the counter variable to get the next person object on the next function call
    }
}

// Get the element with the ID "updatebutton and add an event listener to call the displayNextPerson function when clicked
// https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers
const updateButton = document.getElementById('updatebutton');
updateButton.addEventListener('click', displayNextPerson);



// Mandatory assignment part 2: Built-in Obects
// Lecture 6: DOM
// Lecture 4: Classes / Built-in Objects

// Implementation of the task 2 Built-in objects. a)
// This code block uses the 'screen' object, wich is a property of the 'window' object, to get the width of the user's screen. This information is then displayed on the webpage using the 'innerHTML' property of the 'document.getElementById()' method
// https://developer.mozilla.org/en-US/docs/Web/API/Window/screen
let width = screen.width;
document.getElementById("viewport").innerHTML = `Your viewport is ${width} px`;

// Implementation of the task 2 Built-in objects. b)
// This code block uses the 'lastModified' property of the 'document' object to get the date and time that the document was last modified. This information is then displayed on the webpage using the 'innerHTML' property of the 'document.getElementById()' method
// https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified
let lastChanged = document.lastModified
document.getElementById("lastmodified").innerHTML = `Last modified on ${lastChanged}`;

// Implementation of the task 2 Built-in objects. c)
// This code block uses the 'toUpperCase()' method of the 'string' object to convert the string variable 'information' to uppercase. The resulting string is then displayed on the webpage using the 'innerHTML' property of the 'document.getElementById()' method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
let information = 'Mandatory assignment - JavaScript - IDG1011'
let uppercase = information.toUpperCase();

document.getElementById("assignment").innerHTML = `${uppercase}`;

// Implementation of the task 2 Built-in objects. d)
// This code block uses the 'Math' object and its 'floor()' and 'random()' methods to generate a random number between 0 and 99. This number represents the number of visitors to the website for the current day, and is displayed on the webpage using the 'innerHTML' property of the 'document.getElementById()' method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let visitors = Math.floor(Math.random() * 100);

document.getElementById("visitors").innerHTML = `Todays visitors = ${visitors}`;

// Implementation of the task 2 Built-in objects. e)
// This code block uses the 'Date' object and its 'getFullYear()' method to get the current year. This information is then displayed on the webpage using the 'innerHTML' property of the 'document.getElementById()' method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerHTML = `We are now in the year: ${year}`;

