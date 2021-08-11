performance.now();
function sumArray(ary){
    var result = 0;
    for(let i = 0; i < ary.length; i++){
        result =+ ary[i];
    }
    return result;
}

var ary = [1, 7 , 9,  12,  21];
console.log(sumArray(ary));