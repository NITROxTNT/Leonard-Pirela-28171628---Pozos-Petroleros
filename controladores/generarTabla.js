var filaPulsada;

function generarTabla(jsonArray, tablaGenerar) {
  

  var tabla = document.getElementById(tablaGenerar);
  

for (var i = 0; i < (jsonArray.length) ; i++) {
  
  
  var fila = Object.entries(jsonArray[i]);
  console.log(fila);
  var filaGrafica = document.createElement('tr');
  
  Object.defineProperty(filaGrafica, 'filaId', {
    value: fila[0][1],
    writable: true,
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(filaGrafica, 'tablaPulsada', {
    value: tablaGenerar,
    writable: true,
    enumerable: true,
    configurable: true
  });


  for (var j = 0; j < fila.length ; j++) {
    
    var campoDatosGrafico = document.createElement("td");
    var valorCampo = document.createTextNode(fila[j][1]);
    campoDatosGrafico.appendChild(valorCampo);
    filaGrafica.appendChild(campoDatosGrafico);
    tabla.appendChild(filaGrafica); 
    
  }



  filaGrafica.onclick = function () {
    
    tablaPulsada = this.tablaPulsada;
    filaPulsada = this.filaId;
    console.log(this.filaId);
    if (tablaPulsada == 'pozos') {
      generarGraficos(obtenerDatos('.\/modelos\/obtenerMediciones.php', filaPulsada, 'pozo_id'));  
    } 
  }

}

}

function ingresarMedicion (filaPulsada) {
  
if (filaPulsada != null) {
  var solicitudHttp = new XMLHttpRequest ();
  solicitudHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          if (this.response != ""){
            
            alert(this.response);
            generarGraficos(obtenerDatos('.\/modelos\/obtenerMediciones.php', filaPulsada, 'pozo_id'));  

          }
      }
  }

  var datosSolicitud = new FormData(document.getElementById('nuevaMedicion'));
  datosSolicitud.append('filaPulsada', filaPulsada);
  solicitudHttp.open("POST", './modelos/nuevaMedicion.php');
  
  solicitudHttp.send(datosSolicitud);

  } else {alert('No has seleccionado ningun pozo petrolero');}
}
