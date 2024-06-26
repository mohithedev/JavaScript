// 75: Filter Function

var arr = [4, 1, 3, 2, 5, 8, 6, 9, 7, 10]



var filteredArr = arr.filter(function (value) {
    // return value % 2 === 0
    // return value % 2 === 1
    return value > 4
})
// console.log(filteredArr);



function myFilter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilter(arr, function (value) {
    return value % 2 === 1
}));

console.log(myFilter(arr, function (value) {
    return value % 2 === 0
}));

console.log(myFilter(arr, function (value) {
    return value > 4
}));