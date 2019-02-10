//Used to merge arrays
const newArray = [...oldArray,1,2];

const newObject = {...oldObject,newProp:5};



//Rest is used in Functions as an argument

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));

 