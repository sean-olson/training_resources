function calculateFibonacciElement(n) {
    var el = Math.ceil(n);
    var fibonacciSequence = [1, 1]
    if (el < 2){
        return fibonacciSequence[el];
    }

    var ix = 2;
    
    while(ix <= n){
        fibonacciSequence.push(fibonacciSequence[ix-1] + fibonacciSequence[ix-2]);
        ix++;
    }

    return fibonacciSequence[n];

}

var el = 11;

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

console.log(calculateFibonacciElement(el));


