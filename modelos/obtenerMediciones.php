<?php 

require_once("conexionBDD.php");

if (isset($_POST['pozo_id'])) {

$consultaRegistro = $coneccion->prepare("SELECT medicion_fecha, medicion_valor, medicion_id FROM manometromediciones WHERE pozo_manometro = ? ORDER BY medicion_fecha;");
$consultaRegistro->bind_param("i",$_POST['pozo_id']);
$consultaRegistro -> execute();
$resultadoConsulta = $consultaRegistro -> get_result();


if($resultadoConsulta -> num_rows > 0 ){
    
    $jsonArray = array();
    $contador = 0;

    while ($fila = $resultadoConsulta -> fetch_assoc()){

      $jsonArray['medicion_fecha'][$contador] = $fila['medicion_fecha'];
      $jsonArray['medicion_valor'][$contador] = $fila['medicion_valor'];
      $contador++;

    }


    echo json_encode($jsonArray);

} else {echo json_encode(1);}

} else {echo json_encode(0);}

?>