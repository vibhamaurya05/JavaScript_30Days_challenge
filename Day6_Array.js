//_______________________Array Creation and Access_____________________________

// Task 1 : create array of numbers from 1 to 10 and log the array in console 
let arrc=[1,2,3,4,5,6,7,8,9,10]
for(i=0; i<10; i++){
    console.log(arrc[i]);
    
}

// Task 2 : Access the first and the last element of array and log the array in console 

let arrr=[1,2,3,4,5,6,7,8,9,10]
console.log(arrr[0]);
console.log(arrr.length);


//_______________________Array Methods (Basic)_____________________________

// Task 3 : use "push" method to add new ele at the end of the array and log the updated array in console

let arc=[1,2,3]
let c=arc.push(4);
console.log(c);

// Task 4 : use "pop" method to remove a ele at the end of the array and log the updated array in console 
let array=[1,2,3]
array.pop();
console.log(array);


// Task 5 : use "shift" method to remove first ele of the array and log the updated array in console 
let ard=[1,2,3]
ard.shift();
console.log(ard);


// Task 6 : use "unshift" method to add ele at begining of the array and log the updated array in console 

let ar=[1,2,3]
ar.unshift(0);
console.log(ar);
//_______________________Array Methods (Intermediate)_____________________________

// Task 7 : use "map" method to create a new array where each ele is doubled and log the new array in console 

// Task 8 : use "filter" method to create a new array with only even numbers and log the new array in console 

// Task 9 : use "reduce" method to add the all numbers in array and log the new array in console 

//_______________________Array Iteration_____________________________

// Task 10: use "for loop" to iterate over the array and log the each ele to console 
let arr=[1,2,3,4,5]
for(i=0;i<=5;i++){
    console.log(arr[i]);    
}

// Task 11: use "forEach method" to iterate over the array and log the each ele to console 
let number=[1,2,3,4,5]
number.forEach(function(element){
    // console.log(element);
})
        

//_______________________Multi-dimension Arrays_____________________________

// Task 12: create 2D array 
const arr2d=[[1,2],[3,4]]
console.log(arr2d);


// Task 13: access a specific ele from 2D arr
console.log(arr2d[0][1]);
