
var respuestaJson = "";


function obtenerDatos (nombreArchivo, datosEnviar = 'sinValor', nombreSolicitud = 'sinNombre') {


  
    var solicitudHttp = new XMLHttpRequest ();
            solicitudHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.response != ""){
                        
                      
                       respuestaJson = JSON.parse(this.response);
                       console.log("Datos obtenidos");
                       console.log(respuestaJson);

                    }
                }
            }

            var datosSolicitud = new FormData();
            datosSolicitud.append(nombreSolicitud, datosEnviar);
            solicitudHttp.open("POST", nombreArchivo, false);
            
            solicitudHttp.send(datosSolicitud);

            
            return respuestaJson;

}


function generarGraficos (arrayDatos) {

    console.log(arrayDatos);
    
    var cuadroGrafico = document.getElementById('cuadroGrafico');

    var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      };


      var datosImprimir = {
        labels: arrayDatos['medicion_fecha'],
        datasets: [{
          label: "Presion del manometro por fechas",
          data: arrayDatos['medicion_valor'],
          lineTension: 0,
        }]
      };


    var lineChart = new Chart(cuadroGrafico, {
        type: 'line',
        data: datosImprimir,
        options: chartOptions
    });

}

