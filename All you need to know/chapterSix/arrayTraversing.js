// 44: Array Traversing 
var arr = [2, 3, 5, 6, 9, 1, 30]

// arr[0] 
// arr[1] 
// arr[2] 
// arr[3] 
// arr[4] 

/**
    for(var i = 0; i <arr.length; i++) {
        // console.log(arr[i]);
        arr[i] = arr[i] + 2
    } 
    console.log(arr);
 **/


// Sum number
var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
// console.log(sum);


// Even number
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        // console.log(arr[i]);
    }
}


// odd number
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        // console.log(arr[i]);
    }
}


// even number sum
var sumEven = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEven += arr[i]
    }
}
// console.log(sumEven);


// odd number sum
var sumOdd = 0
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        sumOdd += arr[i]
    }
}
console.log(sumOdd);