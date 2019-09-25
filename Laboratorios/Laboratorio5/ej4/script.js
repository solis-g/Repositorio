
let numero;

function gernerarRandom(numero){
    var n = [];
    var cant=20;

    while(n.length<cant){
        var numRandom = (Math.floor(Math.random()*100)+1);
    
        for(var i=0; i<n.length;i++){
          if(numero==n[i]){
              console.log("gano");
           } else{
                console.log("perdio");
            
            }
        }
    }
}
gernerarRandom(4);


