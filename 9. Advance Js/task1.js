/*
-> Want to re-use variable name so which variable declare method should i use

------------------------------------------------------------------------------------------

-> give the list which variable name not works in js
1. let a=0 re-use
2. let "a"=0 don't reuse
3. let 'a'=0 don't reuse
4. let `10`=0 don't reuse
5. let 1=0 don't reuse
------------------------------------------------------------------------------------------
*
let x = 100
var y = 100
const z = 100
const m
{
      x= 90
      y= 90
      z= 90
      console.log(x) ___________________ point-x1
      console.log(y) ___________________ point-y1
      console.log(z) ___________________ point-z1
      console.log(m) ___________________ 
} 

console.log(x) ___________________ point-x2
console.log(y) ___________________ point-y2
console.log(z) ___________________ point-z2

what will print at x1-_______
what will print at y1-_______
what will print at z1-_______
what will print at x2- 100
what will print at y2- 100
what will print at z2- 100

------------------------------------------------------------------------------------------

-> task-2

console.log(x) ___________________ point-x2
console.log(y) ___________________ point-y2
console.log(z) ___________________ point-z2

{
      let x = 100
      var y = 100
      const z = 100
}

console.log(x) ___________________ point-x1
console.log(y) ___________________ point-y1
console.log(z) ___________________ point-z1


what will print at x1-Undefind
what will print at y1-Undefind
what will print at z1-Undefind
what will print at x2-Undefind 
what will print at y2- 100
what will print at z2-Undefind

------------------------------------------------------------------------------------------

*/