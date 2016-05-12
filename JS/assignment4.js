console.log("Day 4 Assignments");
console.log("\n");

//Copy ojects
function copyObjects(source, target) {
	target = Object.assign(target, source);
	console.log("Source : " + JSON.stringify(source));
	console.log("Target : " + JSON.stringify(target));
	return target;
}
copyObjects([1, 2, 3], []);
copyObjects({"name" : "John Doe", "age" : "23"}, {});
console.log("\n");

//Merge objects having same properties
function mergeObjects(objectA, objectB) {
	result = copyObjects(objectA, {});
	Object.assign(result, objectB, objectA);
	console.log("objectA : " + JSON.stringify(objectA));
	console.log("objectB : " + JSON.stringify(objectB));
	console.log("Result : " + JSON.stringify(result));
	return result;
}
mergeObjects({"name" : "John Doe", "age" : "23"}, {"id" : 4, "name" : "Tim Cook"});
console.log("\n");

//Extending Number
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
};

Number.method('float', function() {
	return this.toFixed(2);
});

Number.method('int', function() {
	return parseInt(this);
});

var num = 10/3;
console.log("Initailly, num = "+ num);
console.log("Int = " + num.int());
console.log("Float = "+ num.float());
console.log("Float = "+ (10).float());
console.log("Post, num = " +num);
console.log("\n");

//Alert values of li
function readList() {
	var list = document.getElementsByClassName('fruitName');
	for(i = 0; i < list.length; i++) {
		alert(list[i].innerHTML);
	}
}
readList();
console.log("\n");