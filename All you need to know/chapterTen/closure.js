// 95: Closure 

// Closure is when a function is able to remember and access it's lexical scope even when that function execution outside it's lexical scope 


// -> able to remember and access it's lexical scope
// -> when that function execution outside it's lexical scope 


 
// ---- Reference ----

/**
    function test() {
        var msg = 'I am learning Lexical Scope and Closure'

        function sayMsg() {
            console.log(msg);
        }
        sayMsg()
    }
    test()
 **/



function test() {
    var msg = 'I am learning Lexical Scope and Closure'

    return function () {
        console.log(msg);
    }
}

var sayMsg = test()
sayMsg()
