// 78: Find and FindIndex

var arr = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]


// Find Method
var result = arr.find(function (value) {
    return value === 9
})
// console.log(result); 



// Find Index Method
var result = arr.findIndex(function (value) {
    return value === 1
})
// console.log(result);




function myFind(arr, cb) {
    for(var i = 0; i <arr.length; i++) {
        if(cb(arr[i])) {
            return arr[i]
            // return i
        }
    }
}

var result = myFind(arr, function(value){
    return value === 5
})

console.log(result);