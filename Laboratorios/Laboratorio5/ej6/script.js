
function orden(lista){
    for(var i=0;i<lista.length;i++){
        for(var j=0; j<lista.length; j++){
            if(lista[j+1]<lista[j]){
                var aux = lista[j+1];
                lista[j+1] =lista[j];
                lista[j]=aux;
            }
        }
    }
return lista;
}
console.log(ordenar([2343,121,3441,121]));
