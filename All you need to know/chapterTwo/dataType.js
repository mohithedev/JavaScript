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
var num = 10
var numPoint = 10.10
console.log(num);
console.log(numPoint);


// string 
var firstName = 'mohi'
var lastName = "uddin"
var fullName = firstName + lastName;
console.log(fullName);

// boolean
var isPassed = true
var isMarred = false
console.log('Honours 1st year successfully passed', isPassed);
console.log('mohi is marred', isMarred);


// undefined 
var friends;
console.log(friends);

// null
var books = null
console.log(books);

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
