// 64: Expression

var addition = function (a, b) {
    return a + b
}

console.log(addition(4, 6));

var another = addition
console.log(another(7, 8));


setTimeout(function () {
    console.log('I will call after 5 second');
}, 5000)



var arr1 = [1, 2, 3, 4, 5]

function sumNum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    console.log('Result will published after 5 second');

    setTimeout(function () {
        console.log(sum);
    }, 5000)
}
sumNum(arr1)