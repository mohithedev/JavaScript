// 72: Callback Function 

function sample(a, b, cb) {
    var c = a + b
    var d = a - b
    var result = cb(c, d)
    return result
}

function sum(a, b) {
    return a + b
}

// Addition
var result = sample(5, 8, sum)
console.log(result);

// Subtraction
var result2 = sample(5, 8, function (c, d) {
    return c - d
})
console.log(result2);

// Multiply
var result3 = sample(5, 8, function (c, d) {
    return c * d
})
console.log(result3);