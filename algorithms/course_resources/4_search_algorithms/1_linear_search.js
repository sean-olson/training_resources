console.log(`~~~~~~~~~~~~~~~~~~~~~~~\n Linear Search \n~~~~~~~~~~~~~~~~~~~~~~~`);

function linearSearch(data, element, fn) {
   
   if(!Array.isArray(data) || typeof element === 'undefined'){
      return -1;
   }
   
   let ix = 0;

   while (ix < data.length) {
      if(typeof element === 'object' && element !== null){
         if(fn(element, data[ix])){
            return ix;
         } 
      }else if (data[ix] === element) {
         return ix;
      }
      ix++;
   }

   return -1;
}


let testArray = [5, 12, -3, 4, -10, 9, 26, -1, 0, 42];
let el = 26;
let expectedReturn = 6;
let errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a linear search on the array, [${testArray}] for ${el}, will return ${expectedReturn}`);
result = linearSearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

el = 25;
expectedReturn =-1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a linear search on the array, [${testArray}] for ${el}, will return ${expectedReturn}`);
result = linearSearch(testArray, el);
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});


testArray = [{id: 0}, {id: 1}, {id: 8}, {id: 3}];
el = {id: 8};
expectedReturn = 2;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a linear search on the array, ${JSON.stringify(testArray)} for id=${JSON.stringify(el)}, will return ${expectedReturn}`);
result = linearSearch(testArray, el, function(target, element){return target['id'] === element['id']});
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});

el = {id: 7};
expectedReturn = -1;
errorMsg = `The linear search did not return ${expectedReturn}`;

console.log(`Asserted that for a linear search on the array, ${JSON.stringify(testArray)} for id=${JSON.stringify(el)}, will return ${expectedReturn}`);
result = linearSearch(testArray, el, function(target, element){return target['id'] === element['id']});
console.log(`returned: ${result}`);
console.assert(result === expectedReturn, {result, errorMsg});