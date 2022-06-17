/* =============================== JavaScript Output ================================== */

//console.log("This is the Console Output");
//document.write("This is the Web Page Output");
//window.alert("This is the Window alert Output");
//window.print("This is the Print Output");

/* =============================== JavaScript Variables ================================== */

// 4 Ways to Declare a JavaScript Variable:
// var x = 10;
// let n = 10;
// const num = 10;
// a = 10;
// console.log("This using var "+x,"\nThis using let "+n,"\nThis using const "+num,"\nThis nothing using "+a);

/* =============================== JavaScript Operators ================================== */

// let x = 5;
// let y = 2;
// let z = x+y;
// console.log(z);

/*
Arithmetic Operators

    Operator	Description
    +	        Addition
    -	        Subtraction
    *	        Multiplication
    **      	Exponentiation (ES2016)
    /	        Division
    %	        Modulus (Division Remainder)
    ++      	Increment
    --	        Decrement
*/
/* 
Assignment Operators

    Operator	Example	    Same As
        =	     x = y	      x = y
        +=	     x += y	      x = x + y
        -=	     x -= y	      x = x - y
        *=	     x *= y	      x = x * y
        /=	     x /= y	      x = x / y
        %=	     x %= y	      x = x % y
        **=	     x **= y	  x = x ** y
*/
/*
Comparison Operators

    Operator	   Description
        ==	       equal to
        ===	       equal value and equal type
        !=	       not equal
        !==	       not equal value or not equal type
        >	       greater than
        <	       less than
        >=	       greater than or equal to
        <=	       less than or equal to
        ?	       teraryn operator
*/
/*
 Logical Operators

    Operator	Description
        &&	    logical and
        ||	    logical or
        !	    logical not
*/

/* =============================== JavaScript Data Types ================================== */

// let length = 16;                               // Number
// let lastName = "Johnson";                      // String
// let x = {firstName:"John", lastName:"Doe"};    // Object

/* =============================== JavaScript Functions ================================== */

// function myFunction(p1, p2) {
    //     return p1 * p2;   // The function returns the product of p1 and p2
    //   }
    
    /* =============================== JavaScript Objects ================================== */
    
    // const car = {type:"Fiat", model:"500", color:"white"};//objdect
    // console.log(car.color);//get value useing key
    // console.log(car['type'])//nex way
    // console.log(Object.values(car))//get object Values
    // console.log(car);//object
    
    /* =============================== JavaScript String Methods ================================== */
    
    // let txt = "Lahiru sadaruwan";
    // let length = txt.length;
    // let slice = txt.slice(0,6)
    // let newtxt = txt.replace("sadaruwan","Sandaruwan");
    // let upper = txt.toUpperCase();
    // let lower = txt.toLowerCase();
    // and Other 
    
    /* =============================== JavaScript Arrays ================================== */
    
    // const cars = ["Saab", "Volvo", "BMW"];
    // const myarray = new Array("one","two","three")
    // console.log(cars);
    // console.log(cars[0]);//get values using index No
    // console.log()
    // cars.sort((a)=> console.log(a));
    // const points = [40, 100, 1, 5, 25, 10];
    // points.sort(function(a, b){return a - b}); numberic sort Method
    // console.log(points)
    
    // const number = [45,18,4,9,16,25];
    //Fliter Mehtod
    // let x = number.filter((e)=> {
        //     return e >= 18;
        // })
    // console.log(x)
    
    //Rduce Method
    //const a=  number.reduce((totle,value,index,arr)=>{
    //    return totle + value;
    //})
    //console.log(a)
    
    /* =============================== JavaScript If Else ================================== */

    // if (time < 10) {
    //     greeting = "Good morning";
    //   } else if (time < 20) {
    //     greeting = "Good day";
    //   } else {
    //     greeting = "Good evening";
    //   }

    /* =============================== JavaScript Switch Case ================================== */

    // let x = "0";
    // switch (x) {
    //     case 0:
    //         text = "Off";
    //         break;
    //     case 1:
    //         text = "On";
    //          break;
    //      default:
    //          text = "No value found";
    // }

    /* =============================== JavaScript For Loop ================================== */
    // const cars = ["BMW", "Volvo", "Saab", "Ford"];
    // let i = 0;
    // let len = cars.length;
    // let text = "";
    // for (; i < len; ) {
    //     text += cars[i] + "<br>";
    //     i++;
    // }

    /* =============================== JavaScript ForEach Loop ================================== */

    // const numbers = [45, 4, 9, 16, 25];
    // let txt = "";
    // numbers.forEach(myFunction);

    // function myFunction(value) {
    // txt += value;
    //}

    /* =============================== JavaScript While Loop ================================== */

    //let i = 0;
    //while (i < 10) {
    //    console.log(i);
    //    i++;
    //}

    /* =============================== JavaScript Do While Loop ================================== */
    // let i = 0;
    // do {
    //     console.log(i);
    //     i++;
    //   }
    //   while (i < 10);

    /* =============================== JavaScript Sets ================================== */

    // const cars = new Set(["Bmw","honda"]);
    // console.log(cars.values());
    // cars.add("CHR");
    // cars.delete();
    // console.log(cars.has("honda"));//return True of False
    // console.log(cars.size)
    // console.log(cars);
    // cars.forEach((e)=>{
    //     console.log(e);
    // })

    /* =============================== JavaScript Map ================================== */

    //const maps = new Map([
    //    ["age",20],
    //    ["name","lahiru"],
    //    ['single',true]
    //]);
    //maps.set("address","minneriya");
    //maps.delete("age");
    
    
    //maps.forEach((v,k)=> console.log(v,k));
    // for(let i of maps){
    //     console.log(i[]);
    // }
    //console.log(maps);


    /* =============================== JavaScript Errors ================================== */

    // try{
    //     method("hellow");
    // }catch(err){
    //     console.log(err.message);//return => method is not defined
    // }
    // let x ='';
    // try{
    //     if(x == '') throw "Empty";
    //     if(isNaN(x)) throw "Not a Number";
    //     b = Number(x);
    //     if(b < 5) throw "too low";
    //     if(b > 10) throw "too High";
    // }catch(err){
    //     console.log(err);
    // }

    // class Car{
    //     constructor(name,age){
    //         this.age= age;
    //         this.name= name;
    //     }
    //     mehotd(){
    //         console.log("My Name is ",this.name,"I'm",this.age,"old");
    //     }
    // }
    // const s1 = new Car("lahiru",20);
    // s1.mehotd();

    import Cars from "./Class";
    
    
    
    console.log(Cars);