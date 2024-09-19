console.log('Functions');
// Verbs of our code

// Three ways to define a function

//1. Function Declaration
function sayHello() {
  console.log('hello world!');
}

//2 Function Expression
const sayHi = function () {
  console.log('hi!');
};

//3. Arrow Function ES6
const sayGoodMorning = () => {
  console.log('Good morning!');
  return 'Good morning!';
};

// implicit returning whatever is behind the arrow (=>)
const sayGoodnight = () => 'Goodnight!';

//========================================================
/**
 *
 * Hoisting explained
 *
 */
// Whichever scope the fnDeclaration was define in, is the scope that the functit to theon will get hois top of.

fnDeclaration(); // thank you function declarations :)
// fnExpression(); // TypeError: fnExpression is not a function

// this function gets hoisted
function fnDeclaration() {
  console.log("I'm coming from a function declaration.");
}

// does NOT get hoisted
const fnExpression = function () {
  console.log("I'm coming from a function expression.");
};
// console.log(fnExpression);
// fnExpression(); // works just fine, because we are referenceing after it's been defined.
//========================================================

/**
 * Calling Functions
 */

//Add

const add = (a, b) => {
  return a + b;
};

const sum = add(25, 100); // returns 125

const sum2 = add(75, 25); // returns 100

// Exercise

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

console.log(areBothEven(8, 6));

// Practice Activity 1: Write a Function Declaration
function computeArea(width, height) {
  let area = width * height;
  let s = `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
  return s;
}

console.log(computeArea(5, 10));

// Extra
//========================================================
const squares = [
  {
    width: 5,
    height: 5,
  },
  {
    width: 5,
    height: 20,
  },
  {
    width: 10,
    height: 5,
  },
];
const squareAreas = [];

for (let i = 0; i < squares.length; i++) {
  const area = computeArea(squares[i].width, squares[i].height);
  squareAreas.push(area);
}
// console.log(squareAreas);
//========================================================

// Practice Activity 2: Write a Function Expression

const planetHasWater = function (planet) {
  // edge case handling
  if (typeof planet !== 'string') {
    return 'Param not a string, try again';
  }

  const lowercasePlanet = planet.toLowerCase();

  return lowercasePlanet === 'earth' || lowercasePlanet === 'mars';
};

console.log(planetHasWater(9));

console.log(planetHasWater('EaRtH'));

// Parameters and Arguments
// arguments give the parameter their value

function foo(a, b, c) {
  console.log(a, b, c);
}

foo(18, 20);

// endless arguments
function getDevObject(name) {
  let skills = [];
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return {
    devName: name,
    jobSkills: skills,
  };
}

const devObject = getDevObject(
  'Maria',
  'HTML',
  'CSS',
  'JS',
  'Bootstrap',
  'React',
  'Redux',
  'GraphQL'
);

// console.log(devObject);

function getDevObject2(name, ...skills) {
  return {
    devName: name,
    jobSkills: skills,
  };
}

const devObject2 = getDevObject2(
  'Maria',
  'HTML',
  'CSS',
  'JS',
  'Bootstrap',
  'React',
  'Redux',
  'GraphQL'
);

// console.log(devObject2);

/**
 * Default Parameters
 *
 *
 */

const bike = {
  color: 'red',
  type: 'offroad',
  brand: 'Huffy',
};

function setColor(bicycle, color) {
  bicycle.color = color || 'purple';

  console.log(bicycle);
}

// setColor(bike, 'green');

function setColorES6(bicycle, color = 'purple') {
  bicycle.color = color;

  console.log(bicycle);
}

// setColorES6(bike);

//Functions as Arguments
let colors = ['red', 'green', 'blue'];

function logColor(color) {
  console.log(color);
}

// logColor('green', 'red');

// colors.forEach(logColor);

// passing an anonymous function to the forEach method
colors.forEach((color) => {
  console.log(color);
});

//IIFE
(function () {
  var a = 'a';
  // console.log('im running without calling the function');
})();

// console.log(a); // throws a referance error

/**
 *
 * Hoisting
 *
 */
// Three Types!
// Value Hoisting (function declarations)
// 1 .Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")

// Declaration Hoisting
// 2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")

// 3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

function hoist() {
  // Type 2
  console.log(x); // undefined, not a reference
  var x = 25;
  console.log(x); // 25
}

hoist();

// Type 3 Behavior

let x = 5;

// block is here to establish anohter scope.
{
  // when it comes to let and const
  // The JS engine will ALWAYS try to retrieve the variable within that same scope, even if the variable is defined later on in the scope

  // the JS engine thinks your trying to access the x defined within this scope.
  // it assumes that the same-scope x is what you meant to use, but since it can't reference that value yet... ReferenceError.
  // console.log(x); // throws a Reference error

  let x = 6;
}

/**
 *
 * Nesting Functions
 *
 */
function openNewAccount(name, openingBalance) {
  let acctNum = generateAcctNum();

  // createAccount is a function available outside this function
  let acct = createAccount(acctNum, openingBalance);
  return acct;

  // generateAcctNum function in there and it's only relevant to when a new account is opened, so it's nested within the openNewAcount function.
  // helper function that provides a unique account number
  function generateAcctNum() {
    return Date.now(); // super amazing algorithm :)
  }
}

/**
 *
 * Pass By Value
 * Only for Primitive types (string, number, boolean)
 */

let myVar = 20;

function passBy(myVar) {
  myVar = myVar * 10;
  return myVar;
}

console.log(myVar); // 20
console.log(passBy(myVar)); // 200
console.log(myVar); // 20

let z = 10;

let h = 15;

let m = h;

m += 5;
console.log('m: ', m, 'h: ', h);

/**
 *
 * Pass By Reference
 * Only for Reference types (arrays, objects, functions)
 */

let myVar2 = { value: 20, type: 'Number' };

function passBy2(x) {
  x.value = x.value * 20;
}

console.log(myVar2); // 20
passBy2(myVar2); // 400
console.log(myVar2); // 400

let arr = ['hi', 'hello', 'bonjour'];

let another = arr;

another.push('arr matey');

//arr and another are pointing to the same place in memory due to the array being a reference type
console.log(arr);

console.log(another);

// console.log([] === []); // false, arrays carry different references

console.log(arr === another);

//=========================================
let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

function returnEven(array) {
  for (let i in array) {
    if (array[i] % 2 !== 0) {
      array.splice(i, 1);
    }
  }

  return array;
}

console.log(numArray); // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
let newArray = returnEven(numArray);
console.log(newArray); // (7) [10, 20, 0, -10, 28, -1000, 42]
console.log(numArray); // (7) [10, 20, 0, -10, 28, -1000, 42]