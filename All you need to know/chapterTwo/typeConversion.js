// class: 13 TypeConversion

var str = '1000'
var n = 10

console.log(str * n);
console.log(str);
console.log(Number(str));
console.log(parseInt(str));
console.log(n);
console.log(n.toString());
console.log(Number(Infinity));
console.log(String(Infinity));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));



console.log('----Falsy Values----');
// Falsy Values
    ''
    0
    null
    undefined
    NaN

console.log(Boolean(''));
console.log(Boolean('asdf'));

console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean(0));
console.log(Boolean(301));

console.log(true)
var x = true
console.log(x.toString()); 