// 54: Remove Object Properties 

var point = {
    x: 10,
    y: 20,
    z: 30
}

point.a = undefined
console.log(point);

delete point.a 
console.log(point);