// 115: Bind, Call, Apply 

function myFunc(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}

// Call , Apply

// myFunc.call({a: 40, b: 20}, 10, 15)
// myFunc.apply({a: 400, b: 250}, [100 , 50])
// myFunc.apply({})
// myFunc()



// Bind

// var testBind = myFunc.bind({a: 7, b: 3}, 5 ,5)
var testBind = myFunc.bind({a: 7, b: 3})
// testBind()
testBind(5, 8)