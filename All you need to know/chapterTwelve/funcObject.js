// 114: Function are Object 

function test() {
    console.log('Something');
}

test()


var rect = new Function('width', 'height', `this.width = width 
this.height = height 
this.draw = function() {
    console.log('I am a rectangle')
    this.printProperties()
    console.log(this)
} 

this.printProperties = function() {
    console.log('My width is ' + this.width)
    console.log('My height is ' + this.height)
}`)

var rect2 = new rect(3, 5)
console.log(rect2);

rect()