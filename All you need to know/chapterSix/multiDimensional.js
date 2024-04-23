// 47: Multi Dimensional Array 
var arr = [
    [76, 85, 92, 69],
    [80, 52, 90, 78],
    [91, 63, 88, 75],
]

// console.log(arr[0][0]);
// console.log(arr[1][1]);

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log('Index ' + i + ': ' + arr[i][j]);
    }
}