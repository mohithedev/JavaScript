// 61: Arguments and Parameter

function add(a, b) {
    var result = a + b
    console.log(result);
}

// add(10, 50)
// add(2, 3)
// add(4, 7)


var arr1 = [1, 2, 3, 5]
var arr2 = [5, 7, 9, 8]
var arr3 = [4, 6, 8, 7]

/**
    sum1 = 0
    for (var i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
    console.log(sum1);


    sum2 = 0
    for (var i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
    console.log(sum2);


    sum3 = 0
    for (var i = 0; i < arr3.length; i++) {
        sum3 += arr3[i];
    }
    console.log(sum3);
 */

function sumOfArray(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)