/**
 * primality-test algorithm
 */

function isPrime(num){
    if (num < 2){
        console.log('Your input needs to be a positive integer, larger than 1');
        return false;
    } 
    if ((num % 1) > 0){
        console.log('Your input can not be a decimal number');
        return false;
    } 

    var ix = 2;
    while (ix < Math.sqrt(num)){
        if ((num % ix) === 0){
            return false;
        }
        ix++;
    }
    return true;
 }

 console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

 console.log('Is 1 a prime number:' + isPrime(1));
 console.log('Is -1 a prime number:' + isPrime(-1));
 console.log('Is 2.1 a prime number:' + isPrime(2.1));
 console.log('Is 9 a prime number:' + isPrime(9));
 console.log('Is 7 a prime number:' + isPrime(7));