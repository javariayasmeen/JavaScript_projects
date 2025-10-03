// named Function
function Rectangle_Area1(){
    let length=5;
    let width=10;
    let area=length*width;
    console.log("Area of Rectangle 1 is :",area);
}
Rectangle_Area1();

//Anonymous Function
let Rectangle_Area2=function(){
    let length=10;
    let width=15;
    let area=length*width;
    console.log("Area of Rectangle 2 is: ",area);  
}
Rectangle_Area2();

//Fat Arrow Function
let Rectangle_Area3=()=>{
    let length=15;
    let width=20;
    let area=length*width;
    console.log("Area of Rectangle 3 is:",area);
}
Rectangle_Area3();
//Parameterized Function
length=20;
width=25;
function Rectangle_Area4(Variable1,Variable2){
    let area=length*width;
    console.log("Area of rectangle 4 is: ",area);  
}
Rectangle_Area4(length,width);