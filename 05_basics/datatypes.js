// JS is dynamically typed language, because data type will automatically assigned at the time of compilation or code execution.


// Types of datatypes --->

/* Primitives - 7 types : 
    String, NUmber, Boolean, Null, Undefined, Symbol, BigInt
*/


// Reference (Non-primitive) - Arrays, Objects, Functions  (type - object)

const fruits = ["mango", "apple", "orange"];   //this is an array of strings


// example of object --->

let myDetails = {             
    name: "Mousona",
    age: 20,
    email: "mou@example.com",
}

console.log(typeof fruits);




// Symbol (symbol will continue later)
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id == anotherId);   




/*
    SUMMARY--->
    Return type of variables in JavaScript
    
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/