function add(a, b) {
    var result = a + b
    console.log(result);
}

add(5, 5)
add(50, 34)

var arr1 = [43, 55, 33, 90]
var arr2 = [34, 83, 59, 30]
var arr3 = [54, 39, 92, 70]

// sum1 = 0
// for (var i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i];
// }
// console.log(sum1);

// sum2 = 0
// for (var i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i];
// }
// console.log(sum2);

// sum3 = 0
// for (var i = 0; i < arr3.length; i++) {
//     sum3 += arr3[i];
// }
// console.log(sum3);


function sumOfMarks(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

sumOfMarks(arr1)
sumOfMarks(arr2)
sumOfMarks(arr3)