// Variables and constants
let myVariable = 2;
console.log(myVariable);
myVariable = 3;
console.log(myVariable);

const myConstant = 'dog';
console.log(myConstant);

// strings and template literals
console.log('This is a string with "Double quotes" inside of it');
console.log("This is a string with 'single quotes' inside of it");
console.log(`This is string has myVariable in it .. myVariable: ${myVariable}`);

// arrays
const myArray = ['dog', 'cats', 'horses'];
console.log(myArray[1]);
console.log(myArray.length);
console.log(myArray);
myArray.push('birds');
cpnsole.log(myArray);

// Objects
const classroom = {
    building: 'ATLS',
    room: 104,
};
console.log(classroom.buidling);
console.log(classroom.room);
console.log(classroom.build)
classroom.build = 'ATLS';
console.log(classroom.build);
console.log(classroom);

// Conditionals
if (myVariable === 2) {
    console.log('myVariable is 2!');
} else {
    console.log('myVariable is not 2!');
}

// While loop
let myWhileLoopVariable = 1;
while (myWhileLoopVariable < 5) {
    console.log(myWhileLoopVariable);
    myWhileLoopVariable++;
}

// For loop
for (let i = 1; i < 5; i++) {
    console.log(i);
}

for( let i = 0; i <myArray.length; i++) {
    console.log(myArray[i]);
}

// For-of loops
for (const animal of myArray) {
    console.log(animal);
}

// Functions
function myLog(variable) {
    console.log(variable);
}

const addAndLog = (variable1, variable2) => {
    const addedVariables= variable1 +variable2;
    console.log(addedVariables);
};

const plusOne = input => input + 1;
const plusOneWithExtraSyntax = (input) => {
    return input + 1;
};
const plusOneAndLog = input => {
    console.log(input + 1);
}

plusOneAndLog(7);

// For-each loop
myArray.forEach(animal => console.log(animal));
myArray.forEach(myLog);
myArray.forEach(plusOneAndLog);

// iife
(function(){
    console.log("abc");
})();
(() => {
    console.log("def");
})();

// DOM queries
const mySpecialListItem = document.getElementById("mySpecialListItem");
console.log(mySpecialListItem);

const myListItems = document.getElementsByClassName("listItem");
console.log(myListItems);

const myListItemsQuerySelected = document.querySelectorAll(".listItem");
console.log(myListItemsQuerySelected)

const myH1 = document.querySelector("h1");
console.log(myH1);

const firstListItem = document.querySelector(".listItem:first-child");
console.log(firstListItem);

// Element attributes
console.log(firstListItem.textContent);
firstListItem.textContent = `myVariable: ${myVariable}`;

myH1.style.backgroundColor = "#ff0000";

//Event Listeners
myH1.addEventListener('click', () => {
    const red = Math.random() * 255;
    const blue = Math.random() * 255;
    const green = Math.random() * 255;
    myH1.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
});