//Primitive
//there are 7 types : String, Number, Boolean, null, undefined, BigInt, Symbol

    //JavaScript is a dynamic language Because data type will automatically assigned at the time of code execution.

const score = 100; //number
const scoreValue = 100.3 //number

const isLoggedIb = false; // boolean
const outsideTemp = null; // object
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 3435456457345346456n




//Reference type (Non - Primitive)

// Array , Object, Functions


const heros = ["IronMan", "Spiderman", "Batman"];  // array

 let obj = {
    name: "Tony",
    age: 22,
} // object

const myFunction = function(){
    console.log("Hello World")
}  // function obj function

console.log(typeof (myFunction))