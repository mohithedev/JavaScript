var str = 'Mohiuddin Ahmed'

var str2 = str.charAt(12)
// console.log(typeof str2);

var length = 0
while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
} 
console.log(length);

console.log(str.length);
console.log('hello mohi'.length);