// Creating a function name hide()
function hide(location){
// Local veriable to store the info
    let hideLocation = location;
// Nested function-- Creating another function inside the function
    function seek(){
        return hideLocation;
    }
    return seek;
}
// Creating a closure
const startGame = hide("I am hiding behind the desk.")
console.log(startGame());
// Accessing hideLocation outside the hide or seek function
//console.log(hideLocation);
// First of all the hideLocation is declared as a local variables and have Function Scope and 
// Veriable declared insde {...} block cannot be access from the outside of that block.
// We are trying to access from the outside of the function without calling the function.
// Veraibles defined inside a function are not accessible or visible outside the function.
// To access the veriables outside the function we need to declare outside the function which is called a Global veriables/scope.
