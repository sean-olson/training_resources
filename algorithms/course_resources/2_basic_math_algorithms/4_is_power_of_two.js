/**
 * power of 2 problem:  can a given number be represented as 2^x?
 */
const isPowerOfTwo = (number)  => {
    
    if(number < 1){
        return false;
    }

    let quotient = number;
    
    while(quotient > 1) {
        quotient = (quotient /  2);
        console.log('Executing...'); 
        if(quotient % 1 !== 0){
            return false;
        }
    }
    
    return true;
}

console.log(` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n RUN TESTS FOR isPowerOfTwo Algo \n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`Assert that 64 can be represented as 2^x`);
let number = 64;
let errorMessage = `not a power of two `;
console.assert(isPowerOfTwo(64) === true, {number, errorMessage});

console.log(`Assert that 15 can be represented as 2^x`);
number = 15;
errorMessage = `not a power of two `;
console.assert(isPowerOfTwo(15) === true, {number, errorMessage});

console.log(`Assert that 1,125,899,906,842,624 can be represented as 2^x`);
number = 1125899906842624;
errorMessage = `not a power of two `;
console.assert(isPowerOfTwo(1125899906842624) === true, {number, errorMessage});

//Best Case: number = 13 => O(1)
//Worst Case: numver = 1,125,899,906,842,624 => 0(log2 n)


/**
 * power of 2 problem:  can a given number be represented as 2^x?
 */
const isPowerOfTwoBitwise = (number)  => {
    
    if(number < 1){
        return false;
    }
    console.log('Executing...'); 
    return (number & (number - 1)) === 0;
 
}

// O(1)

console.log(` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n RUN TESTS FOR isPowerOfTwoBitwise Algo  \n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(`Assert that 64 can be represented as 2^x`);
number = 64;
errorMessage = `not a power of two `;
console.assert(isPowerOfTwoBitwise(64) === true, {number, errorMessage});

console.log(`Assert that 15 can be represented as 2^x`);
number = 15;
errorMessage = `not a power of two `;
console.assert(isPowerOfTwoBitwise(15) === true, {number, errorMessage});

console.log(`Assert that 1,125,899,906,842,624 can be represented as 2^x`);
number = 1125899906842624;
errorMessage = `not a power of two `;
console.assert(isPowerOfTwoBitwise(1125899906842624) === true, {number, errorMessage});