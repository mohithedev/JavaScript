// class: 27 Logical And Or operator shorthand

var name = ''

/**
    var fullName = ''
    if(name.length === 0){
        fullName = 'Mohi Uddin'
    } else {
        fullName = name 
    }
    console.log(fullName);  
 **/

// Or shortHand 
var fullName = name || 'Mohi Uddin'
console.log(fullName);



// And shortHand
var isOk = true
/**
    if(isOk) {
        console.log('everything is okay');
    } else {
        console.log('everything is not okay');
    }
 **/

isOk &&  console.log('everything is okay');
