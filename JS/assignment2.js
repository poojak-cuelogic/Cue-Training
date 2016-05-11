console.log("Day 2 Assignments");
console.log('A = 20, B = 10, C = 15');
var intA = 20,
	intB = 10,
	intC = 15;

//Function to check the number of argumnets
function checkArgumentLength(arguments) {
	if(arguments.length < 2) {
		throw {
			name: 'TypeError',
			message: 'Operation requires atleast 2 numbers'
		};
	}
}

//function to check the argument type
function checkArgumentType(argument) {
	if(typeof argument != "number") {
		throw {
			name: 'TypeError',
			message: 'Operation requires numbers'
		};	
	}
}

//Add
function add(arguments) {
	var sum = 0;
	checkArgumentLength(arguments);
	for (var index = 0; index < arguments.length; index++) {
		checkArgumentType(arguments[index]);
		sum += arguments[index];
	}
	return sum;
}

var performAddition = function() {
	var arguments = arguments;
	try {
		var sum = add(arguments);
		console.log(sum);
	} catch (e) {
		console.log(e.name + ': ' + e.message);
	}
}

performAddition(intA);
performAddition("intA", "intB");
performAddition(intA, intB, intC);

//Subtract
function subtract(arguments) {
	var difference = 0;
	checkArgumentLength(arguments);
	for (var index = 0; index < arguments.length; index++) {
		checkArgumentType(arguments[index]);
		if(arguments[index + 1]) {
			difference = (difference ? difference : arguments[index]) - arguments[index + 1];
		}
	}
	return difference;
}

var performSubtraction = function() {
	var arguments = arguments;
	try {
		var difference = subtract(arguments);
		console.log(difference);
	} catch (e) {
		console.log(e.name + ': ' + e.message);
	}
}

performSubtraction(intA);
performSubtraction("intA", "intB");
performSubtraction(intA, intB, intC);

//Multiply
function multiply(arguments) {
	var product = 1;
	checkArgumentLength(arguments);
	for (var index = 0; index < arguments.length; index++) {
		checkArgumentType(arguments[index]);
		product *= arguments[index];
	}
	return product;
}

var performMultiplication = function() {
	var arguments = arguments;
	try {
		var product = multiply(arguments);
		console.log(product);
	} catch (e) {
		console.log(e.name + ': ' + e.message);
	}
}

performMultiplication(intA);
performMultiplication("intA", "intB");
performMultiplication(intA, intB, intC);

//Divide
function divide(x, y) {
	var quotient = 1;
	if(typeof x != "number" || typeof y != "number") {
		return "Error : Trying to divide non integer values";
	}
	return x/y;
}

var quotient = divide(intA, intB);
console.log(intA +'/' + intB +' = ' + quotient);

//Using objects
var Student = function(name) {
	this.name = name;
	this.age = 0;
}

var Alice = new Student('Alice');
var John = new Student('John');

Student.prototype.greet = function() {
	console.log("Hello, I am "+this.name);
}
Alice.greet();
John.greet();

var Student = function(name) {
	this.name = name;
	this.age = 0;
	this.class = "1";
}
console.log("Using class as a member vairable name");
var Peter = new Student('Peter');
console.log(Peter.class);

//Using different loops
function loopUsingFor(n) {
	console.log("Loop using For")
	for (var index = 1; index <= n; index++) {
		console.log(index);
	}
}
loopUsingFor(10);

function loopUsingWhile(n) {
	console.log("Loop using While")
	index = 1;
	while(index <= n) {
		console.log(index);
		index++;
	}
}
loopUsingWhile(10);

function loopUsingDoWhile(n) {
	console.log("Loop using Do While")
	index = 1;
	do {
		console.log(index);
		index++;
	} while(index <= n);
}
loopUsingDoWhile(10);