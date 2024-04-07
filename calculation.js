// Function to add the array of numbers
function findSum(accumulator, a){ 
    return accumulator + a;
}
// With initial value to avoid when the array is empty
// const sum = [29, 29, 29, 13].reduce(findSum, 0);
// console.log(sum); 
function subtractNumbers(x, y){
    return x - y;
}
function multiplyNumbers(x, y){
    return x * y;
}
function divideNumbers(x, y){
// After the division it will only give two digits after decimal 
    return (x / y).toFixed(2); 
    // if(y <= 0){
    //     console.log("The number is divided by zero/negitive number.")
    // }
    // else{
    //     return x / y;
    // }
}
var arrayOfNumbers = [40, 59, 66];
//console.log(`Given array of numbers: ${arrayOfNumbers}`);
console.table(arrayOfNumbers);
const sum = arrayOfNumbers.reduce(findSum, 0);
console.log(`Sum of given arrays: ${sum}`);

const sub = subtractNumbers(arrayOfNumbers[0], arrayOfNumbers[1])
console.log(`Substraction of first and the second number: ${sub}`);

const multiplication = multiplyNumbers(arrayOfNumbers[1], arrayOfNumbers[2]);
console.log(`Multiplication of third and first number: ${multiplication}`);
// Checking the condition and 
const divide = divideNumbers(sum, arrayOfNumbers[2]);
if(arrayOfNumbers[2] <= 0){
    console.log("The number is divided by zero/negitive number.")
} else {
console.log(`Division of sum by third number: ${divide}`);
}