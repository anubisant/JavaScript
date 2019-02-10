//Constructor Functions are Capitalized 
//Adding methods to Objects prototype property
//Every object contains prototype Object-->Prototype object is the BluePrint
//New Instances share the methods that are attached to Prototype

function Person(name) {
    this.name = "hello"+name;
  }
      
  Person.prototype.talk = function() {
    console.log(this.name + ' is talking');
  }
    
  function Swimmer(name) {
    Person.call(this, name);
    this.swimStyle = '';
  }
           
  Swimmer.prototype = Object.create(Person.prototype);
  // properties and methods from Hello Constructor can be inherited by 
  // Object.create and setting prototype
  Swimmer.prototype.constructor = Swimmer;
  //When you set a object property to inherit another object 
  // make sure to define constructor property. If this is not set
 // the prototype.constructor returns parent obj which is incorrect for child obj.  
 
 Swimmer.prototype.butterFly = function() {
    console.log(this.name + ' is swimming in ' + this.swimStyle + '.');
  }
  var karthik = new Swimmer('Karthik');
  karthik.talk();  
 // 'Karthik is Swimming.'