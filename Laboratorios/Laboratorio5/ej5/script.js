//5
function palindromo (palabra){
    var isPalindromo =true;
    var original = palabra.split("");
    //console.log(original);
    var invercion = palabra.split("").reverse();
    //console.log(invercion);
    for(var i=0; i<palabra.length; i++){
        if(invercion[i] != original[i]){
            console.log("no es palindroma");
            isPalindromo=false;
            break;
        }
    }

    if(isPalindromo == true){
        console.log("es palindroma");
        
    }
}

palindromo("ana");