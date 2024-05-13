// 108: This key-word 

var rect = {
    width: 100,
    height: 50,

    draw: function () {
        console.log('I am a rectangle');
        this.printProperties()
    },

    printProperties: function () {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}

rect.draw()
//  rect.height = 100
//  // rect.draw() 

function myFunc() {
    console.log(this);
}

myFunc()


var another = {
    width: 47,
    height: 56,
    print: rect.printProperties
}
console.log(another.print);
another.print()