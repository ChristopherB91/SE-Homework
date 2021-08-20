let text = " "
let text2 = " "
let text3 = " "
let text4 = " "
let text5 = " "
let text6 = " "

class Circle{
    constructor (radius,sides){
        this.radius = radius
        this.sides = sides
    }
    circle_area(){
        var area = 0
        area = 3.14 * (this.radius * this.radius)
        text = area + " is the area of the circle."
        return text
    }
    total_sides(){
        text2 = this.sides+" is the total number of sides for a circle."
        return text2
    }
}

class Rectangle{
    constructor (Height,Width,rsides){
        this.Height = Height
        this.Width = Width
        this.rsides = rsides
    }
    rectangular_area(){
        var area = 0
        area = this.Height * this.Width
        text3 = area + " is the area of the rectangle."
        return text3
    }
    rectangle_sides(){
        text4 = this.rsides+" is the total number of sides for a rectangle."
        return text4
    }
}

class Square{
    constructor (Valsides,Numsides){
        this.Valsides = Valsides
        this.Numsides = Numsides
    }
    Square_area(){
        var area = 0
        area = this.Valsides * this.Valsides
        text5 = area + " is the area of the square."
        return text5
    }
    Square_sides(){
        text6 = this.Numsides+" is the total number of sides for a squares."
        return text6
    }
}

let circ1 = new Circle(34,0)
circ1.circle_area()
circ1.total_sides()
document.getElementById("p1").innerHTML = text;
document.getElementById("p2").innerHTML = text2; 

let rec1 = new Rectangle(30,20,4)
rec1.rectangular_area()
rec1.rectangle_sides()
document.getElementById("p3").innerHTML = text3;
document.getElementById("p4").innerHTML = text4; 

let Square1 = new Square(20,4)
Square1.Square_area()
Square1.Square_sides()
document.getElementById("p5").innerHTML = text5;
document.getElementById("p6").innerHTML = text6; 