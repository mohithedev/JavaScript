// class: 08 Data Types

primitive 
    Number
        // 10 4.5 9 5.5 22 4.55
    String 
        'This is a text' + "This is a text as well"
    Boolean
        true false
    undefined
    null

object
    Array
    Object
    Function


// ----------primitive data----------
// Number 
console.log(12);
console.log(12.53);

// string 
console.log('This is a text' + " string is a primitive data type");

// boolean
const isPassed = true;
console.log(isPassed);

// undefined 
var myName
console.log(myName)

// null
var lastName = null;
console.log(lastName);

// ----------non-primitive data----------
// array
const num = [3, 5, 5, 5, 6, 8]
console.log(typeof num);

// Object
const person = {
    name: 'Mohi',
    id: '501',
    address: 'Dhaka, Mirpur-12'
}
console.log(typeof person);

// function 
function myName(num1, num2) {
    const result = num1 + num2;
    console.log(result);
    return result
}
myName(5, 6)
