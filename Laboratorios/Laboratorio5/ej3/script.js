
let listNumber = [1,2,3,3,5];
let cont=0;
let numero =3;

function ocurrencia(numero){
     

    for(var i=0; i<listNumber.length; i++){
        if(listNumber[i]==numero){
            cont++;
        }
    }
}

ocurrencia(numero);
console.log("cantidad:" + cont);
