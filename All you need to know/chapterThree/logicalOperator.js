// class: 25 logical operator

// && || ! 

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false


// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

var a = 10
var b = 30
var c = 40
var d = 50

// And && Logical operator
if (a > b && c > d) {
    console.log('A is greater than B and C is grater than D');
} else {
    console.log('At least one condition is false');
}


// Or || Logical operator
if (a > b || c > d) {
    console.log('A is greater than B Or C is grater than D');
} else {
    console.log('At least one condition is false');
}