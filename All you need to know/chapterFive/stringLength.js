// 41: String Length

var str = 'Mohiuddin Ahmed'

// var str2 = str.charAt(12) 
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

// shortcut way 
console.log(str.length);
console.log('Hello from js!'.length);