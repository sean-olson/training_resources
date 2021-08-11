

console.log(`~~~~~~~~~~~~~~~~~~~~~~~\n Recursive Binary Search \n~~~~~~~~~~~~~~~~~~~~~~~`);


// function recursiveBinarySearch(sortedArray, target, initial, terminal) {
   
//    if(!Array.isArray(sortedArray) || sortedArray.length === 0 || typeof target === 'undefined'){
//       return -1;
//    } 

//    let mid = Math.floor((terminal - initial) / 2) + initial;

//    console.log(`initial value: ${initial}; mid value: ${mid}; terminal value: ${terminal}`);

//    if (terminal < initial) {
//       return -1;
//    }

//    if (target === sortedArray[mid]) {
//       return mid;
//    } else if (target < sortedArray[mid]) {
//       terminal = mid - 1;
//    } else {
//       initial = mid + 1;
//    }
//    return recursiveBinarySearch(sortedArray, target, initial, terminal);

// }


function recursiveBinarySearch(sortedArray, target, offset = 0) {
   
   if(!Array.isArray(sortedArray) || sortedArray.length === 0 || typeof target === 'undefined'){
      return -1;
   } 

   let initial = 0;
   let terminal = sortedArray.length;

   let mid = Math.floor((terminal - initial) / 2);

   console.log(`initial value: ${initial}; mid value: ${mid}; terminal value: ${terminal}`);

   if (target === sortedArray[mid]) {
      return mid + offset
   } else if (target < sortedArray[mid]) {
      terminal = mid - 1;
   } else {
      initial = mid + 1;
      offset += mid + 1;
   }

   return recursiveBinarySearch(sortedArray.slice(initial, terminal + 1), target, offset);

}


let testArray = [-24, -20, -19, -12, -11, -10, -9, -8, -6, -3, -2, -1, 0, 1, 2, 3, 5, 7, 8, 9, 10, 13, 15, 18, 19, 20, 22, 24];
let el = 8;
let expectedReturn = 18;
let errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

el = 7;
expectedReturn = 17;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

el = -20;
expectedReturn = 1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});


el = -24;
expectedReturn = 0;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});


el = 24;
expectedReturn = 27;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

el = -100;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

el = 100;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});


el = 4;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1];
el = 1;
expectedReturn = 0;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});


testArray = [1];
el = 0;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1];
el = 2;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});


testArray = [1, 3];
el = 3;
expectedReturn = 1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1, 3];
el = 1;
expectedReturn = 0;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1, 3];
el = 0;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1, 3];
el = 4;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1, 2, 3];
el = 3;
expectedReturn = 2;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1, 2, 3];
el = 1;
expectedReturn = 0;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1, 2, 3];
el = -1;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

testArray = [1, 2, 3];
el = 7;
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a binary search on the array, ${JSON.stringify(testArray)} for ${el}, the algorithm will return ${expectedReturn}`);
result = recursiveBinarySearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});







