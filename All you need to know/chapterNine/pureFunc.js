// 68: Pure Function

// Whats is pure function?

// `* It returns the same result if given the same argument`
// `* It dose not cause any observable side effects`


// **** Pure Function ****

function sqr(n) {
    return n * n
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));


// **** Not Pure Function ****


var point = {
    x: 45,
    y: 30
}

function printPoint(point) {
    point.x = 100
    point.y = 200

    console.log(point);
}

printPoint(point)