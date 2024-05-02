// 60: Invoking a function


function functionName() {
    console.log('I am a function');
}

// functionName()
// functionName()

for(var i = 0; i < 10; i++) {
    functionName() 
}


function add() {
    var a = 10
    var b = 20
    console.log(a + b);
}

function sub() {
    var a = 50
    var b = 20
    console.log(a - b);
}

add()
sub()
