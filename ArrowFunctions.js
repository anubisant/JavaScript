const multiply= (number) =>{
    return number*2;    
}
//If you just have one return it can also be written as
const multiply= (number) => number*2;
//if  only one argument then () can also be removed
const multiply= number => number*2;    
multiply(2)

//////////////////////////////////////////

const printName = (name,age) => {
    console.log(name,age);
}
printName('Karthik',32);