var rows =[];
var counterId =0;

var parseLateSwitch = (value) =>{

    if(value){
        return "Tardísimo"
    }
    return "a tiempo"
}


function addRow(carnet,schedule,late,tbody){

   var newRow = document.createElement("tr");
   var date = new Date();
   
   rows.push({

        id:0,
        carnet:carnet,
        schedule : schedule,
        late:late
   })

   console.log(rows);

   newRow.innerHTML =
   `<td><b>${carnet}</b></td>
   <td><b>${schedule}</b></td>
   <td><b>${date.toLocaleDateString()}</b></td>
   <td><b>${late}</b></td>`

   var cellContainer = document.createElement("td");
   var deleteButton = document.createElement("button");
   var cellContainer2 = document.createElement("td");
   var input = document.createElement("input");

   input.classList.add("input");
   
   deleteButton.classList.add("btn");
   deleteButton.classList.add("btn-danger");

   deleteButton.innerText = "Eliminar";
   deleteButton.value = counterId;

   input.maxLength="8";

   deleteButton.addEventListener("click",event =>{

        var idElement = deleteButton.value;
        console.log(idElement);

        var trToDelete = document.querySelector(`tr>td>button[value= '${idElement}']`).parentElement.parentElement;
         console.log(trToDelete);

         if(input.value == carnet){

        tbody.removeChild(trToDelete);
        rows.forEach((item,index)=>{
            if(item.id == idElement){

                rows.splice(index,1);
            }


        })

    }else{
        console.log("Carnet incorrecto")
    }

   })



   cellContainer.appendChild(deleteButton);
   newRow.appendChild(cellContainer);
   cellContainer2.appendChild(input);
   newRow.appendChild(cellContainer2);

   tbody.appendChild(newRow);
   counterId++;


};

window.onload = function(){

    var submit_btn =document.querySelector("#submit_btn");
    var carnet_field= document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");
    
    var carnetRegex = new RegExp('[0-9]{8}');

    console.log(submit_btn);

    submit_btn.addEventListener("click", ()=>{
        
        var carnet = carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch(late_switch.checked); 
    
        if(carnetRegex.test(carnet)){
            addRow(carnet,schedule,late,tBody);   
        }else{
            alert("Formato no válido")
        }
    });

    carnet_field.addEventListener("keyup", (event)=>{
        let keyCode = event.keyCode;
        let carnet = carnet_field.value;

        if(keyCode==13){
            submit_btn.click()
        }

        if(carnetRegex.test(carnet)){
            submit_btn.disabled= false;
        }else{
            submit_btn.disabled= true;
        }

    } )
}
