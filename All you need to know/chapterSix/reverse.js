// 48: Reverse an Array 

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(arr);
// console.log(arr.reverse());

for (var i = 0; i < arr.length; i++) {
    // console.log(arr.reverse()[i]);
}

for (var i = 0; i < (arr.length / 2); i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}
console.log(arr);