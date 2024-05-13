// 112: Factory Vs Constructor

// Factory pattern

var createRect = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log('I am a rectangle');
            this.printProperties()
            console.log(this);
        },

        printProperties: function () {
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }
    }
}

// var rect1 = createRect(10, 8)
// rect1.draw()

// var rect2 = createRect(40, 20)
// rect2.draw()




// Constructor pattern

var Rectangle = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function () {
            console.log('I am a rectangle');
            this.printProperties()
            console.log(this);
        },

        this.printProperties = function () {
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }
}
var rect3 = new Rectangle(10, 5)
rect3.draw()



function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}

var rect4 = myNew(Rectangle, 45, 30)
rect4.draw()