console.log(`~~~~~~~~~~~~~~~~~~~~~~~\n dynamic programming \n~~~~~~~~~~~~~~~~~~~~~~~`);

/**
 * a dynamic implementation of the fibonacci sequence
 */

const dynamic_fibonacci = (n, memo) => {
    ix++;
    if(memo.has(n)){
       return memo.get(n)
    }
 
    if (n === 0 || n === 1) {
       memo.set(n, 1)
    } else {
       memo.set(n, dynamic_fibonacci(n - 1, memo) + dynamic_fibonacci(n - 2, memo));
    }
 
    return memo.get(n);
 }
 
 let n = 5;
 while (n < 51) {
    ix = 0;
    console.log(`The ${n}th number of the Fibonacci sequence is ${dynamic_fibonacci(n, new Map())}, calculated in ${ix} iterations.`);
    n += 5;
 }