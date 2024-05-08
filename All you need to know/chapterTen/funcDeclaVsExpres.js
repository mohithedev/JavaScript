// 90: Function Declaration Vs Expression 


// ---- Function Declaration ----
abc()

function abc() {
    console.log('I am ABC Function!');
}



// ---- Function Expression ----

// newAbc()
var newAbc = function() {
    console.log('I am new ABC Function');
}

newAbc()

/**
 * ---- Creational Phase ----
 *  abc = ref
 *  newAbc = undefined
 * 
 * ---- Executional Phase ----
 * 
 */