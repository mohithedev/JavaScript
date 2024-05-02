// 62: Argument Object

function test(a, b, c) {
    console.log(arguments);
    // console.log(typeof a);

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
// test()
test(3, 5, 8)

function addAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum);
}

addAll(1, 2, 3, 4, 5)
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)