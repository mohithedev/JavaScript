// 86: Creation and Execution of Context 


function a() {
    b()
    console.log('I am function A');
}

function b() {
    d()
    console.log('I am function B');
}

function c() {
    console.log('I am function C');
}

function d() {
    c()
    console.log('I am function D');
}

var x 
x = 100
a()
console.log('I am Global');


// Creation Phase
// Execution Phase