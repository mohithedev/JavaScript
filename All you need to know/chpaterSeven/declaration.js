// 51: Declaration 


/**
    var obj = {}
    obj.x = 10
    console.log(typeof obj);
    console.log(obj);
 */



// Object Literal
var point = {
    x: 10,
    y: 20
}
// point.y = 25
point.z = 30 //add new value using Dot Notation

console.log(point);



// Object Constructor 
var obj = Object() 
obj.a = 10
console.log(obj); 

var obj2 = new Object() 
obj2.b = 20
console.log(obj2);