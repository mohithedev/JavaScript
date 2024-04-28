// 52: Accessing Object Properties

console.log('----Dot Notation----');// Dot Notation
var point = {
    x: 10, 
    y: 20,
    z: 30
}

console.log(point.x);
console.log(point.y);
console.log(point.x + point.z);



console.log('----Array Notation----'); // Array Notation
console.log(point['x']); 
console.log(point['z']);    

var show = 'y' 
console.log(point[show]);