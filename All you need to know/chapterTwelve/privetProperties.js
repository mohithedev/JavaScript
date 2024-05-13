// 118: Private properties  

var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    this.position = {
        x: 56,
        y: -100
    }

    this.draw = function() {
        console.log('I am a rectangle');
        this.printProperties()
        console.log(this);
    }

    this.printProperties = function() {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}

var rect = new Rectangle(45, 30)