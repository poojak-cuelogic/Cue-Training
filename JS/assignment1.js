console.log("Day 1 Assignments");

// 1. Creating variables
 var intAge = 21,
 	 stringName = "John",
 	 boolActive = true,
 	 objDetails = {"employeeId" : 020579, "emailId" : "john.doe@example.com"},
 	 arrHobbies = ["Travelling", "Swimming", "Gardening"];

//Add and delete values from an array using built in methods
console.log("Initial Array : ");
console.log(arrHobbies);

arrHobbies.push("Surfing");
console.log("Array after push : ");
console.log(arrHobbies);

arrHobbies.pop();
console.log("Array after pop : ");
console.log(arrHobbies);

arrHobbies.shift();
console.log("Array after shift : ");
console.log(arrHobbies);

arrHobbies.unshift("Skating");
console.log("Array after unshift : ");
console.log(arrHobbies);

delete arrHobbies[2];
console.log("Array after delete operator : ");
console.log(arrHobbies);

arrHobbies.splice(1,0,"Singing");
console.log("Array after splice for insert : ");
console.log(arrHobbies);

arrHobbies.splice(3,1);
console.log("Array after splice for delete: ");
console.log(arrHobbies);

//Toggle a boolean value
boolActive = !boolActive;
console.log("Toggling boolean value : ");
console.log(boolActive);

//concatenating String with more string values
console.log("Initial String : ");
console.log(stringName);
stringName += " Peter Doe";
console.log("String after concat: ");
console.log(stringName);

// 2. Write a program that uses at least three ways to create an object variable,array variable
console.log("Creating objects and arrays in 3 ways..");

console.log('1. creating array using new Array()');
var arrFirstWay = new Array('One', 'Two', 'Three');
console.log(arrFirstWay);

console.log('2. creating array using []');
var arrSecondWay = ['1', '2', '3'];
console.log(arrSecondWay);

console.log('3. creating array using arr[0]');
var arrThirdWay = [];
arrThirdWay[0] = 'John';
arrThirdWay[1] = 'Peter';
arrThirdWay[2] = 'Samuel';
console.log(arrThirdWay);

var objFirstWay = new Object();
objFirstWay.desc = 'Hello World';
console.log(objFirstWay);

var objSecondWay = {"name" : "Peter", "age" : 23};
console.log(objSecondWay);

var objThirdWay = (function() {
	return {
		name : 'John',
		age : 28,
		active : true
	}
})();

console.log(objThirdWay);