console.log("Day 3 Assignments");

//1. Factorial
var factorial = function factorial(i, a) {
	a = a || 1;
	if (i < 2) {
		return a;
	}
	return factorial(i-1, a*i);
};
console.log('Factorial of 5 = '+ factorial(5));

//3. String Search
function stringSearch(haystack, needle) {
	var lastIndex = haystack.lastIndexOf(needle);
	return {
		'count': (haystack.match(new RegExp(needle, "gi")) || []).length,
		'lastIndex' : (lastIndex) ? lastIndex : -1 
	};
}
console.log(stringSearch('I am Amelia from Amsterdam.', 'am'));
console.log(stringSearch('I am Amelia from Amsterdam.', 'de'));

//4. Write a function that will accept a unix timeStamp and covert to its UTC equivalent value
function covertUnixToUTC(unixTimestamp) {
	var date = (new Date(unixTimestamp * 1000)).toUTCString();
	console.log(date);
}
covertUnixToUTC(1462924800);

//5. Convert 1D array into 2D array
function covert1DArrayTo2DArray(arrInput) {
	var result = [[],[]];
	for (var i = 0; i < arrInput.length; i++) {
		result[0].push(arrInput[i].substr(0,1));
		result[1].push(arrInput[i].substr(1,1));
	}
	return result;
}
var arrInput = ['00','01','11','10','11','00','10','11'];
console.log(covert1DArrayTo2DArray(arrInput));

//Print elements of an array without looping
var result = Array(101).fill(0).map(function(value, index) { return index; })
result.shift();
console.log(result.join("\n"));
