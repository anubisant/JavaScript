//Private Properties should not be directly accessed they should be encapsulated
//Private properities or methods are provided access through public methods

var myModule = (function() {
    'use strict';
 
    var _privateProperty = 'Hello World';
     
    function _privateMethod() {
        console.log(_privateProperty);
    }
     
    return {
        publicMethod: function() {
            _privateMethod();
        }
    };
}());
  
myModule.publicMethod();                    // outputs 'Hello World'   
console.log(myModule._privateProperty);     // is undefined protected by the module closure
myModule._privateMethod();                  // is TypeError protected by the module closure