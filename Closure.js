// closure ---
//Generic Function that takes parameters and returns another function
//Returned function also takes parameters and adds to OuterFunction Parameters
// x is called closure scope (Outer function parameters )
//Inner Function is assigned  function definition and a closure (Which is x)

//When a function gets created and passed around or returned from another function, 
//it carries a backpack with it. And in the backpack are all the variables that were
// in scope when the function was declared.


let a = 4;
function Outer(x) {
  return function(n) {
     return n + x
  }
}
const Inner = Outer(3)
let b = Inner(a)
console.log('example partial application', b)