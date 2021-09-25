obj = {id:1,name:"Abc1",age:25};

//Returns the names of the enumerable string properties and methods of an object.
//@param o — Object that contains the properties and methods. 
//This can be an object that you created or an existing Document Object Model (DOM) object.
keySet = Object.keys(obj);

//Returns an array of values of the enumerable properties of an object
//@param o — Object that contains the properties and methods. 
//This can be an object that you created or an existing Document Object Model (DOM) object.
valueSet = Object.values(obj);

console.log("keySet",keySet);
console.log("valueSet",valueSet);
console.log("keyCount",keySet.length);
console.log("valueCount",valueSet.length);

//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
//@param value — A JavaScript value, usually an object or array, to be converted.
//@param replacer — A function that transforms the results.
//@param space — Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
stringValueOfObj = JSON.stringify(obj);

//Converts a JavaScript Object Notation (JSON) string into an object.
//@param text — A valid JSON string.
//@param reviver
//A function that transforms the results. 
//This function is called for each member of the object. 
//If a member contains nested objects, the nested objects are transformed before the parent object is.
objValueOfString = JSON.parse(stringValueOfObj);

console.log("stringValueOfObj",stringValueOfObj);
console.log("objValueOfString",objValueOfString);


array = [1,2,3,4];

console.log("arrayType",typeof(array));
console.log("objType",typeof(obj));

// Below code not print anything in logs
//console.log("arrayType : ",array.constructor);
//console.log("objType: ",obj.constructor);

console.log("Actual arrayType : "+array.constructor);
console.log("Actual objType: " + obj.constructor);
console.log(123);

//object copy by value and copy by reference examples
