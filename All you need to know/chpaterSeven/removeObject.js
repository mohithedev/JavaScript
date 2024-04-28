// 54: Remove Object Properties 

var point = {
    x: 10,
    y: 20,
    z: 30
}

point.x = 45
point.a = 16 // added new properties
console.log(point);
console.log(point.d);

point['y'] = 100

var prop = 'z'
point[prop] = 55
console.log(point);

point.a = undefined
console.log(point);

delete point.a 
console.log(point);