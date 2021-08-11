/**
 * practice algorithm 1
 * problem: given an array of numbers, return the smallest number in the array.  define the time complexity.
 */

const findSmallest = (ary) => {
    
    if(!Array.isArray(ary) || ary.length === 0){    // 1
        return undefined;                           // 0 Best Case; 1 Worst Case; unknown Average Case;
    }

    let lowNumber = ary[0];                         //1
    for(let i = 1; i < ary.length; i++) {           // 1
        if(lowNumber > ary[i]){                     // n
            lowNumber =  ary[i];                    // 0 Best Case; n Worst Case; ; unknown Average Case;
        }
    }

    return lowNumber;                               // 1
}

// Linear Time Complexity
// Best Case: [1, 2, 3] => O(n)
// Average Case: [2, 1, 3] => O(n)
// Worst Case: [3, 2, 1] => O(n)

console.log(` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n RUN TESTS FOR findSmallest ALGORITHM \n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let testArray = [5, 2, 3, 1, 4];
let errorMsg = 'The algorithm did not return 1';
console.log(`Assert that for the test Array [5, 2, 3, 1, 4], the algorithm will return the number 1`);
let smallestNumber = findSmallest(testArray);
console.assert(findSmallest(testArray) === 1, {smallestNumber, errorMsg});

testArray = [5, 2, 3, 4];
errorMsg = 'The algorithm did not return 1';
console.log(`Assert that for the test Array [5, 2, 3, 4], the algorithm will return the number 1`);
smallestNumber = findSmallest(testArray);
console.assert(findSmallest(testArray) === 1, {smallestNumber, errorMsg});

testArray = [];
smallestNumber = findSmallest(testArray);
errorMsg = 'The algorithm did not return undefined';
console.log(`Assert that for the test Array [], the algorithm will return the number undefined`);
console.assert(typeof findSmallest(testArray) === 'undefined', {smallestNumber, errorMsg});

testArray = [1];
smallestNumber = findSmallest(testArray);
errorMsg = 'The algorithm did not return undefined';
console.log(`Assert that for the test Array [1], the algorithm will return the number undefined`);
console.assert(typeof findSmallest(testArray) === 'undefined', {smallestNumber, errorMsg});

 /**
 * practice algorithm 2
 * problem: given a number determine if it's an even number.  define the time complexity.
 */

const isEven = (num) => {   
    if(num === 0){          //1
        return false;       // 0 Best Case; 1 Worst Case;     
    }
    return (num % 2 === 0); //1
}

// Constant Time Complexity
// Best Case: 0 => O(1)
// Average Case: 2 => O(1)
// Worst Case: 2 => O(1)

console.log(` ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n RUN TESTS FOR isEven ALGORITHM \n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


let input = 0;
errorMsg = 'the number is not even';
while(input < 5){
    console.log(`Assert that ${input} is even...`);
    console.assert(isEven(input) === true, {input, errorMsg});
    input++;
}




