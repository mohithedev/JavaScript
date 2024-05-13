// 110: Constructor Pattern 


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

var rect3 =new Rectangle(10, 5)
rect3.draw()