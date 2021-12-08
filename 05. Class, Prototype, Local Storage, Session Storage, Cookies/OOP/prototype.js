function Shape(x,y) {
    this.x = x
    this.y = y
}

Shape.prototype.move = function(dx,dy) {
    this.x += dx
    this.y += dy
    return this
}

Shape.prototype.moveTo = function(newX,newY) {
    this.x = newX
    this.y = newY
    return this
}


Shape.prototype.square = function() {
    // не можем вычислить площадь точки
    console.log("...")
}

Shape.prototype.perimeter = function() {
    console.log("...")
}

Shape.prototype.scale =  function(k,ox,oy) {
    // with(this){}
    this.x = this.x * k - ox * k + ox
    this.y = this.y * k - oy * k + oy
    return this
}

Shape.prototype.toString = function() {
        return "Shape("+this.x+","+this.y+")"
}

// центр (x + 1/2a, y+1/2a)
// координаты угла x,y

function Square(x,y,a) {
    Shape.call(this,x,y)
    this.a = a
}

// Square.prototype = Object.create(Shape.prototype)

Square.prototype = new Shape()
Square.prototype.constructor = Square


Square.prototype.perimeter = function() {
    return this.a * 4
}

Square.prototype.square = function() {
    return this.a * this.a
}

Square.prototype.calcDiagonal = function() {
    return this.a * Math.SQRT2
}

Square.prototype.calcInscribedCircleRadius = function() {
    return calcDiagonal() / (2 * Math.SQRT2)
}


Square.prototype.calcCircumscribedCircleRadius = function() {
    return this.a * (Math.SQRT2 / 2)
}

Square.prototype.scale =  function (k,ox,oy) {
    // this.x = this.x * k - ox * k + ox
    // this.y = this.y * k - oy * k + oy
    Shape.prototype.scale.call(this,k,ox,oy)
    this.a *= k
    console.log("Масштабирование " + k +" относительно точки ("+ox+";"+oy+"):\n" + this.toString() + "\n")
    return this
}

Square.prototype.toString = function () {
    return "Square: координаты центра ("+this.x+","+this.y+"), сторона a = " + this.a 
}

// let sqr = new Square (1,1,4);
// console.log(sqr.perimeter())
// будем считать, что x,y координаты верхнего угла прямоугольника

// координаты центра x,y
// центр - (x + 1/2 width, y - 1/2 heigth)

function Rectangle(x,y,w,h) {
    Shape.call(this,x,y)
    this.width = w
    this.height = h
}

Rectangle.prototype = new Shape()
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.perimeter = function() {
    return 2 * (this.width + this.height)
}

Rectangle.prototype.square = function() {
    return this.width * this.height
}

Rectangle.prototype.calcDiagonal = function() {
return Math.sqrt(this.width * this.width + this.height * this.height) 
}

Rectangle.prototype.calcCircumscribedCircleRadius = function() {
    return calcDiagonal() / 2
}

Rectangle.prototype.scale = function (k,ox,oy) {

    // изм., на изменение диагонал x и y
    // this.width *= k 
    // this.height *= k
    // this.x = this.x*k + (1 - k) * ox 
    // this.y = this.y*k + (1 - k) * oy

    Shape.prototype.scale.call(this,k,ox,oy)
    this.width *= k
    this.height *= k

    console.log("Масштабирование " + k +" относительно точки ("+ox+";"+oy+"):\n" + this.toString() + "\n")
    return this

}

Rectangle.prototype.toString = function() {
    return "Rectangle: координаты центра ("+this.x+","+this.y+"), ширина = " + this.width + " высота = " + this.height
}

// x,y координата центра


function Circle(x,y,radius) {
    Shape.call(this,x,y)
    this.radius = radius
}

Circle.prototype = new Shape()
Circle.prototype.constructor = Circle

Circle.prototype.perimeter = function() {
    return 2 * Math.PI * this.radius
}

Circle.prototype.square = function() {
    return Math.PI * (this.radius * this.radius) 
}

Circle.prototype.сhordLength = function() {
    return 2 * this.radius * Math.sin(a)
}

Circle.prototype.scale =  function (k,ox,oy){
    // this.radius *= k 
    // // изм., на изменение диагонал x и y
    // this.x = this.x*k + ((1 - k) * ox) 
    // this.y = this.y*k + ((1 - k) * oy)

    Shape.prototype.scale.call(this,k,ox,oy)
    this.radius *= k
    console.log("Масштабирование " + k +" относительно точки ("+ox+";"+oy+"):\n" + this.toString()  + "\n")
    return this
}

Circle.prototype.toString = function(){
    return "Circle: координаты центра ("+this.x+","+this.y+"), радиус = " + this.radius  + "\n"
}

function test(){

    // console.log("Проверим наличие реализации square у наследников:")
    // console.log('square' in Square.prototype)
    // console.log('square' in Rectangle.prototype)
    // console.log('square' in Circle.prototype)
    
    let shape = new Shape(0,1)

    console.log(shape.toString() + "\n")
    shape.moveTo(2,2).scale(1.5,4,4).move(1,2)
    console.log("Передвинем на точку (2;2), затем масштабируем на 1.5 относительно (4,4), и сдвинем на (1,2):")
    console.log(shape.toString() + "\n")
    console.log("Функции square() и perimeter() реализованы через заглушки")
    shape.square()
    shape.perimeter()

    let square = new Square(0,0,2)

    console.log(square.toString() + "\n")
    console.log("Периметр: " + square.perimeter() + "\n")
    console.log("Площадь: " + square.square() + "\n")
    square.scale(0.5,3,3)
    square.scale(1.5,1,1)
    square.scale(1.2,0,0)

    let rectangle = new Rectangle(0,0,4,3)

    console.log(rectangle.toString() + "\n")
    console.log("Периметр: " + rectangle.perimeter()  + "\n")
    console.log("Площадь: " + rectangle.square()  + "\n")
    square.scale(0.5,3,3)
    square.scale(1.5,1,1)
    square.scale(1.2,0,0)

    let circle = new Circle(0,0,3)

    console.log(circle.toString() + "\n")
    console.log("Периметр: " + circle.perimeter() + "\n")
    console.log("Площадь: " + circle.square() + "\n")
    square.scale(0.5,3,3)
    square.scale(1.5,1,1)
    square.scale(1.2,0,0)

}
       
test()