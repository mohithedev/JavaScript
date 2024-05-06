// 78: Sort, Some and every Function 


var persons = [{
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

// var arr = [4, 8, 1, 6, 7, 9, -2, 4, 3, 5, -4, 6, 8, 2, 1, 7, -8]
var arr = [4, 8, 1, 6, 7, 9, 2, 4, 3, 5, 4, 6, 8, 2, 1, 7, 8]



// arr.sort() 
// console.log(arr);

// persons.sort() 
// console.log(persons);


arr.sort(function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})
console.log(arr);



persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        0
    }
})
console.log(persons);



var rest1 = arr.every(function (value) {
    return value % 2 === 0
})
console.log(rest1);


var rest2 = arr.every(function (value) {
    return value >= 0
})
console.log(rest2);
