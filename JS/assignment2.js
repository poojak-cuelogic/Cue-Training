console.log("Day 2 Assignments");
console.log('A = 20, B = 10, C = 15');
var intA = 20,
	intB = 10,
	intC = 15;

function add() {
	var sum = 0;
	if(arguments.length < 2) {
		return "Error : Minimum 2 arguments required";
	}
	for (var index = 0; index < arguments.length; index++) {
		if(typeof arguments[index] != "number") {
			return "Error : Trying to add non integer values";
		}
		sum += arguments[index];
	}
	return sum;
}

console.log("Trying to add a single integer");
var sum = add(intA);
console.log(sum);

console.log("Trying to add strings");
var sum = add("intA", "intB");
console.log(sum);

console.log("Trying to add integers A and B and C");
var sum = add(intA, intB, intC);
console.log(sum);

function subtract() {
	var difference = 0;
	if(arguments.length < 2) {
		return "Error : Minimum 2 arguments required";
	}
	for (var index = 0; index < arguments.length; index++) {
		if(typeof arguments[index] != "number") {
			return "Error : Trying to subtract non integer values";
		}
		if(arguments[index + 1]) {
			difference = (difference ? difference : arguments[index]) - arguments[index + 1];
		}
	}
	return difference;
}

console.log("Trying to subtract a single integer");
var difference = subtract(intA);
console.log(difference);

console.log("Trying to subtract strings");
var difference = subtract("intA", "intB");
console.log(difference);

console.log("Trying to subtract integers A and B and C");
var difference = subtract(intA, intB, intC);
console.log(difference);

function multiply() {
	var product = 1;
	if(arguments.length < 2) {
		return "Error : Minimum 2 arguments required";
	}
	for (var index = 0; index < arguments.length; index++) {
		if(typeof arguments[index] != "number") {
			return "Error : Trying to multiply non integer values";
		}
		product *= arguments[index];
	}
	return product;
}

console.log("Trying to multiply a single integer");
var product = multiply(intA);
console.log(product);

console.log("Trying to multiply strings");
var product = multiply("intA", "intB");
console.log(product);

console.log("Trying to multiply integers A and B and C");
var product = multiply(intA, intB, intC);
console.log(product);

function divide(x, y) {
	var quotient = 1;
	if(typeof x != "number" || typeof y != "number") {
		return "Error : Trying to divide non integer values";
	}
	return x/y;
}

console.log("Divide integers A and B");
var quotient = divide(intA, intB);
console.log(quotient);

var Student = function(name) {
	this.name = name;
	this.age = 0;
}

var Alice = new Student('Alice');
console.log(Alice);

var John = new Student('John');
console.log(John);

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