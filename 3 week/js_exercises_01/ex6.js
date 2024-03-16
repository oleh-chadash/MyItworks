// From function declarations to function expressions
// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }
// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }
// function add(a, b = 5) {
// let myNumber = a;
// let sum = myNumber + b;
// return sum;

	const welcome = function() {
		let message = 'Welcome to Appleseeds Bootcamp!';
		return message;
	};

	const power = function(a) {
		let result = Math.pow(a, 2);
		return result;
	};

	const add = function(a, b = 5) {
		let sum = a + b;
		return sum;
	};


}
// From function expressions to function declarations
// const hello = () => "Hello!";
// const squareRoot = a => Math.sqrt(a);
// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;

    function hello() {
    return "Hello!";
    }

	function squareRoot(a) {
	  return Math.sqrt(a);
	}

	function randomNumbers(a, b) {
	  return Math.random() * (a - b) + b;
	}
