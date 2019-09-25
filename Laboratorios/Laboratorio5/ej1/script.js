let arrayMix = [1,2, "a" , "b", 3];
let contNum=0;
let contLetra = 0;

function tipos(){
    for(var i=0; i<arrayMix.length; i++){
        if (typeof arrayMix[i] == String){
            contLetra++;
        } else if(typeof arrayMix[i]== Number){
            contNum++;
        }
    }
    return contLetra, contNum;
}

console.log("letras: "+ contLetra + " numeros: "+ contNum) ;