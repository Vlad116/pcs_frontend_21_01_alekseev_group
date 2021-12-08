/* Реализуй класс Shape:

	Свойства: x, y
	Методы:
	move - сдвигает x и y на переданные в move значения
	moveTo - устанавливает x и y на переданные значения

	Методы реализовывать с возможностью method chaining

	Дополнительно реализовать метод:
	square - он абстрактный, в Shape ничего не вычисляет и является заглушкой. \
	Каждый наследник должен его иметь обязательно.
	Попробовать реализовать проверку на наличие этого метода у наследника.
	// perimeter
	Далее нужно написать 3 наследника Rectangle, Square и Circle. 
	Продумать какие свойства и методы они должны добавлять к родителю Shape. Реализовать их.
	Написать тесты методов и вывести результаты в консоль. 

	Реализовать метод scale(k, ox, oy) у Shape:
	k - коэффициент увеличения
	(ox; oy) - опорная точка, относительно которой производится масштабирование

	Остальные классы должны наследовать этот метод 
	и добавлять масштабирование своих параметров

*/

class Shape {

    constructor(x,y){
        this.x = x
        this.y = y    
    }

    move(x,y) {
        this.x += x
        this.y += y
        return this
    }
    
    moveTo(x,y) {
        this.x = x
        this.y = y
        return this
    }

    scale(k,ox,oy){
        this.x = this.x * k - ox * k + ox
        this.y = this.y * k - oy * k + oy
        return this
    }

    square(){
        console.log("...")
    }
    
   perimeter(){
     console.log("...")
   }

   toString(){
    return "Shape("+this.x+","+this.y+")"
   }
    
}

class Square extends Shape{
    
    constructor(x,y,a){
        super(x,y)
        this.a = a 
    }

    square(){
        return this.a * this.a
    }
    
    perimeter(){
        return this.a * 4
    }

    calcDiagonal(){
        return this.a * Math.SQRT2
    }

    calcInscribedCircleRadius(){
        return calcDiagonal() / (2 * Math.SQRT2)
    }

    calcCircumscribedCircleRadius(){
        return this.a * (Math.SQRT2 / 2)
    }

    scale(k,ox,oy){

        // this.a *= K 
        // // изм., на изменение диагонал x и y
        // this.x = Math.round(x*k + (1 - k) * ox) 
        // this.y = Math.round(y*k + (1 - k) * oy)

        super.scale(k,ox,oy)
        this.a *= k
        console.log("Масштабирование " + k +" относительно точки ("+ox+";"+oy+"):\n" + this.toString() + "\n")
        return this
     }

    toString(){
        return "Square: координаты центра ("+this.x+","+this.y+"), сторона a = " + this.a 
    }

}



class Rectangle extends Shape{
    
    constructor(x,y,w,h){
        super(x,y)
        this.width = w
        this.height = h 
    }

    square(){
        return this.width * this.height
    }
    
    perimeter(){
        return 2 * (this.width + this.height)
    }

    calcDiagonal(){
        return Math.sqrt(this.width * this.width + this.height * this.height)
    }

    calcCircumscribedCircleRadius(){
        return calcDiagonal() / 2
    }

    scale(k,ox,oy){
     // изм., на изменение диагонал x и y
       
       super.scale(k,ox,oy)
       this.width *= k 
       this.height *= k
       console.log("Масштабирование " + k +" относительно точки ("+ox+";"+oy+"):\n" + this.toString() + "\n")
       return this
     }

     toString(){
        return "Rectangle: координаты центра ("+this.x+","+this.y+"), ширина = " + this.width + " высота = " + this.height
    }

}

class Circle extends Shape{
    
    constructor(x,y,r){
        super(x,y)
        this.radius = r
    }
    
    square(){
        return Math.PI * (this.radius * this.radius) 
    }
    
    perimeter(){
        return 2 * Math.PI * this.radius
    }

    сhordLength(angle){
        return 2 * this.radius * Math.sin(a)
    }

    scale(k,ox,oy){
        
     // изм., на изменение диагонал x и y
       super.scale(k,ox,oy)
       this.radius *= k
       console.log("Масштабирование " + k +" относительно точки (" + ox + ";" + oy + "):\n" + this.toString()  + "\n")
       return this
     }

     toString(){
        return "Circle: координаты центра ("+this.x+","+this.y+"), радиус = " + this.radius  + "\n"
    }
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


    console.log(shape.hasOwnProperty("square"))
    console.log(square.hasOwnProperty("square"))
    console.log(rectangle.hasOwnProperty("square"))
    console.log(circle.hasOwnProperty("square"))

}
       
test()