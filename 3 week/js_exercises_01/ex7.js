// From function declarations to explicit and implicit
// return functions (one of each).
// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }
// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }

// Explicit
const welcomeExplicit = () => {
  return 'Welcome to Appleseeds Bootcamp!';
};

// Implicit
const welcomeImplicit = () => 'Welcome to Appleseeds Bootcamp!';

// Explicit
const powerExplicit = (a) => {
  return Math.pow(a, 2);
};

// Implicit
const powerImplicit = (a) => Math.pow(a, 2);


// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;

// IIFE - squareRoot
((a) => {
  console.log(Math.sqrt(a));
})(/* a value */);

// IIFE - randomNumbers
((a, b) => {
  console.log(Math.random() * (a - b) + b);
})(/* a value */, /* b value */);