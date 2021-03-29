
document.querySelector("#boton").addEventListener("",loadDoc());

function loadDoc() {
    
    const xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", "datos.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
     
        if (this.readyState == 4 && this.status == 200) {
       
            let datos = JSON.parse(this.responseText);

            //console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let valor of datos){
                //console.log(valor.nombre)
               res.innerHTML += `
                
                <tr>
                    <td>${ valor.nombre }</td>
                    <td> <audio src="${ valor.ruta }" controls></audio></td>
                    <td>${ valor.reproducciones }</td>

                </tr>
                
                `
            }

       
         }
    };
  }
