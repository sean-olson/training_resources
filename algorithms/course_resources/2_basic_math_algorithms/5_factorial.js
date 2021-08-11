/**
 * factorial algoritm
 */

const calculateFactorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--){
        factorial *= i;
    }
    return factorial;
 }

 const factorialRecursive = (ix) => {
     if (ix === 1) {
         return 1;
     } else {
         return ix * factorialRecursive(ix -1);
     }
 }

console.log(`~~~~~~~~~~~~~~~~~~~~~~~\n factorial algorithm \n~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`Assert that 5-factorial is 120 `);
errorMessage = `120 is not equal to 5-factorial `;
number = 5;
console.assert(calculateFactorial(number) === 120, {number, errorMessage});


console.log(`Assert that 6-factorial is 730 `);
errorMessage = `130 is not equal to 6-factorial `;
number = 6;
console.assert(calculateFactorial(number) === 120, {number, errorMessage});
console.log(`6-factorial is in fact ${calculateFactorial(number) }`);


console.log(`Assert that 5-factorial is 120 `);
errorMessage = `120 is not equal to 5-factorial `;
number = 5;
console.assert(factorialRecursive(number) === 120, {number, errorMessage});


console.log(`Assert that 6-factorial is 730 `);
errorMessage = `130 is not equal to 6-factorial `;
number = 6;
console.assert(factorialRecursive(number) === 120, {number, errorMessage});
console.log(`6-factorial is in fact ${factorialRecursive(number) }`);