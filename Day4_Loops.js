// ****************************************** Task 1 *************************************************
// print Number from 1-10

for(let i=1; i<=10; i++){
    //console.log(i);
}


// ****************************************** Task 2 *************************************************
// 5- multiplication table


let mul= 5
for(let i=1; i<=10; i++){
    let table=mul*i;
    //console.log(table);
}

// ****************************************** Task 3 *************************************************
//  find sum of 1-10 using while loop
let sum=0;
let i=1;
while(i<=10){
    sum= sum +i
    i++;
}
//console.log(sum);

// ****************************************** Task 4 *************************************************
// factorial using while loop

let n=4, m=1, fact=1
while(m<=n)
{
  fact = fact*m 
  m++
}
// console.log(fact);



// ****************************************** Task 5 *************************************************
// print pattren using nested for loop

var x,y,ch;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    ch=ch+("*");        
      }
 console.log(ch);
 ch='';    
}


// ****************************************** Task 6 *************************************************
// print number from 1-10 but skip 5 using continue
for(let i=1; i<=10; i++){
    if(i===5) continue;
    // console.log(i);
}

// ****************************************** Task 7 *************************************************
// print number from 1-10 but stop loop at 7 using break

for(let i=1; i<=10; i++){
    if(i===7) break;
    // console.log(i);
}