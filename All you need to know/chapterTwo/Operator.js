// class: 15 Operator

// Arithmetic Operator
// + - * / % ++ --
var a = 20
var b = 15

// addition operator "+"
console.log(a + b);

// subtraction operator "-"
console.log(a - b);

// multiplication operator "*"
console.log(a * b);

// division operator "/"
console.log(a / b);


// Modules operator or reminder
var a = 11
var b = 3
// console.log(a % b);



// 1. Incremental operator "++"
var x = 10
    // 1.1 Pre Incremental 
        // console.log(++x);

    // 1.2 Post Incremental
        console.log(x++); // x = x + 1
        console.log(x);


// 2. Decremental operator "--"
var y = 20
    // 2.1 Pre Decremental
        // console.log(--y);
    
    // 2.2 Post Decremental
        console.log(y--); // y = y - 1
        console.log(y);



// Assignment operator "="

var m = 10
var n = 20

m += n // m = m + n
console.log(m);

m -= n // m = m - n
console.log(m);

m /= n // m = m / n
console.log(m);

m %= n // m = m % n
console.log(m);


// Comparison operator
var c = 10
var d = 10

console.log(c == d); // equal operator "=="
console.log(c != d); // not-equal operator "!="
console.log(c > d); // Greater Than operator ">="
console.log(c < d); // Less Than operator "<="


var e = '50'
var f = 50
console.log(e == f);
console.log(e === f); // strict equal "==="
console.log(e !== f); // strict not-equal "!=="



// Logical Operators
// && and operator
// || or operator
// ! not operator



//Bitwise Operator
// &
// |
// ~ 
// ^ 
// <<
// >>



// typeof Operator
console.log(typeof 10);
console.log(typeof 'hello');