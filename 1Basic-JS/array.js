arr1 = [1,2,3,4,5];
arr2 = [6,7];
arr3 = [...arr1,...arr2]; // Merge Two Array Using Spread operator
console.log(arr3);

//New elements to add to the array.
//Appends new elements to the end of an array, and returns the new length of the array.
arr3.push(8);
arr3.push(9);
arr3.push(10);
console.log("After Push , ARR3 : "+arr3);

//Removes the last element from an array and returns it. 
//If the array is empty, undefined is returned and the array is not modified.
arr3.pop();
arr3.pop();
console.log("After Pop , ARR3 : "+arr3);

//Removes the first element from an array and returns it. 
//If the array is empty, undefined is returned and the array is not modified.
arr3.shift(); 
console.log("After Shift , ARR3 : "+arr3);

console.log("ARR3 nth element : 5th element : " +arr3[5-1]);
/*
for(i=0;i<arr3.length;i++) {
 console.log("Arr3["+i+"] : " + arr3[i]);
}*/

//The strings to append to the end of the string.
//Returns a string that contains the concatenation of two or more strings.
arr4 = arr1.concat(arr2);
console.log("Arr4 : " + arr4);

const dupElmtArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const unique = [...new Set(dupElmtArr)]; 
console.log("Unique value array "+unique);

/*
var myArray1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
var unique1 = [...new Set(myArray1)]; 
console.log("Unique value array "+unique1);

*/

dupElmtArr2 = [11, 11, 22, 22, 33, 33, 44, 44, 55, 55];

console.log("first Index of 44" + dupElmtArr2.indexOf(44));

const uniqueFun = (val, ind, s) => {
    return s.indexOf(val) === ind
  }

 console.log("Unique Arr final  : "+dupElmtArr2.filter(uniqueFun)) ;  

 const stringArr1 = ["Amol","Amol2","Sachin","Nitin","Amit"];
 const outStrArr1 = stringArr1.slice(1,3);
 const outStrArr2 = dupElmtArr2.slice(3,6);

 console.log("Slice uses 1 : "+outStrArr1);
 console.log("Slice uses 2 : "+outStrArr2);