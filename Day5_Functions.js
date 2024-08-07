// ****************************************** Task 1 *************************************************
// WA Function to check if num is odd or even
function evenorodd(n){
    if(n/2==0)
        console.log("even");
    else console.log("odd");
}
evenorodd(6);

// ****************************************** Task 2 *************************************************
//  function to calculate square of a number
function square(n){
    console.log(n*n);
}
square(2);


// ****************************************** Task 3 *************************************************
// find the max of two numbers in function and return result 
function max(a,b){
    if(a>b) console.log("a is greater than b.")
    else console.log("b is greater than a.")
}
max(10,15);

// ****************************************** Task 4 *************************************************
// cancatinat two string and return result 
let str1="vibha"
let str2=" maurya"
console.log(`${str1}` + `${str2}`);


// ****************************************** Task 5 *************************************************
// sum of two numbers and return result
function add(a,b){
    console.log("add:", a+b);
}
add(2,4);

// ****************************************** Task 6 *************************************************
//  chck string contains a specific character
function check(str, ch){
    return str.includes(ch);
}
console.log(check("helloo this is vibha", "h"));



// ****************************************** Task 7 *************************************************
// function to take two parameter and return the product of them and make second para default 

function product(a,b=1){
    console.log("product:", a*b);
          
}
product(2,3);
product(7);

// ****************************************** Task 8 *************************************************
// function to take two parameter (name and age ) and return the greeting msg and make second para default 
function greet(name, age="unknown"){
    console.log(`hello ${name},you are of ${age} years old`);    
}
greet("vibha", "28");
greet("vibha")

// ****************************************** Task 9 *************************************************
//  higher order function that take a fun and a value as arguments ans calls the fun that many time(value);

// ****************************************** Task 10 *************************************************
// HOF that take two funtion arguments and a value, apply first fun on value and apply second fun on result

