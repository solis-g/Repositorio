//2
let listNumber=[1,2,3,4,5]
let sum=0;
let prom=0;
function cal () { 
    for(var i=0; i<listNumber.length ; i++){ 
        sum +=listNumber[i]; 
        prom= sum/listNumber.length;
    } 
    return sum, prom;    
} 
cal(listNumber);

console.log("suma: " + sum + " promedio:" + prom);