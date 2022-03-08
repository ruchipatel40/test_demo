console.log("Arrow Function");

const Arrowfunction = () => {
    console.log("Arrow function without parameter:Hello World!");
  }
Arrowfunction();//fun call 
const myFunc = (params) => params*10;  
console.log("Arrow function with parameters:"+myFunc(5))

console.log("Let const keywords")
let a=2;
const b=3;
console.log("let a=" +a);
console.log("const b=" +b);
console.log("with in function")
// let a = 5; let can't redeclared
{
    let a=4;
    const b=5;
    console.log("let a=" +a);
    console.log("const b=" +b);
}
let x=3;
{
    let x=12;
}

console.log('x =',+x)

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);
//spread
console.log('rest operator')
function sum(...args){
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(sum(2,3,4,5,6,7));

function summulti(a,b,...args){
    console.log(args);
    console.log(a,b);
    let sum=0;
    let multi= a*b;
    for(const x of args){
        sum+=x;
    }return [multi, sum];
    
}
    console.log(summulti(3,4,1,1,1));
//rest 
    function sum(a, b) {
        return a + b;
      }
      
    //   alert("sum of first two number rest of all is not count",+ sum(1, 2, 3, 4, 5) );
//Destructuring

console.log("destructuring with array")

const foo = ['1','apple','red','sweet'];

[num1,fruit,color,falvor] = foo;

console.log(num1);
console.log(fruit);
console.log(color);
console.log(falvor);    

console.log("Parsing an array returned from a function");

function f(){
    return [1,2];
}
let p, q;
[p,q] = f();
console.log(p)
console.log(q)

//object destructuring

const personobj = {
    name:"ruchi patel",
    id:"062",
    zender:"Female",
    start:function(){console.log("function run...");}
};
const {name,id,zender,start} = personobj;

console.log(name,id,zender,start);
start();

const info =[
    {
        userid:'1',
        name:'ruchi',
        fname:'patel'
    },
    {
        userid:'2',
        name:'ruchi',
        fname:'patel'
    },
    {
        userid:'2',
        name:'ruchi',
        fname:'patel'
    },

]
console.log(info)

