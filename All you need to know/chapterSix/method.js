// 49: Array Methods 
var arr = [4, 5, 9, 6]
var arr2 = [3, 1, 7, 8]


// join method
/** 
    console.log(arr.join(' '));
    console.log(arr.join(', '));
    console.log(arr.join(' | '));
 * 
 */


// fill Method
/**
     arr.fill(0)
    arr.fill(true)
 * 
 */


// concat
/**
    var arr3 = arr.concat(arr2)
    console.log(arr3);
 */


// Check Array
// console.log(Array.isArray(arr));


// var arr2 = Array.from(arr) 
// console.log(arr2);

var a = [1, 2] 
// var b = a
var b = Array.from(a)
b[0] = 5

console.log(a);
console.log(b);
