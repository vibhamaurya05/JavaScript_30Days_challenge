// ****************************************** Task 1 *************************************************
// declare variables with let and var assign let-> string, and var->number and log the values to console.
let name="vibha"
var num = 20
console.log(name)
console.log(num);

// ****************************************** Task 2 *************************************************
// declare const variable assign with boolean value and log to console
const isLoggedin=true
console.log(isLoggedin);

// ****************************************** Task 3 *************************************************
// create variables with different datatypes (number,string,boolean,object,array) and log the values on console with typeof values.
let numb=20
let fname="vibha"
let isLoggedins=false
let person={
    fullname:"vibhamaurya",
    age:23
}
let arr= [20,"hello", true]
console.log(typeof(numb))
console.log(typeof(fname))
console.log(typeof(isLoggedin))
console.log(typeof(person))
console.log(typeof(arr[2]))

// ****************************************** Task 4 *************************************************
// Reinitialize the let declare variable 
// let a='name';
let a='name'
a='newname'
//output: newname
// ****************************************** Task 5 *************************************************
// Reinitialize the const declare variable 
//const val = true;
const val=[true];
val[0]=false;
console.log(val[0]);

//output: false