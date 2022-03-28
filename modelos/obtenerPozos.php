<?php 


require_once("conexionbdd.php");


$consultaRegistro = $coneccion->prepare("SELECT pozo_id, pozo_nombre, pozo_ubicacion FROM pozos;");
$consultaRegistro -> execute();
$resultadoConsulta = $consultaRegistro -> get_result();


    if($resultadoConsulta -> num_rows > 0 ){
        
        $jsonArray = array();
        $contador = 0;

        while ($fila = $resultadoConsulta -> fetch_assoc()){

          $jsonArray[$contador]['pozo_id'] = $fila['pozo_id'];
          $jsonArray[$contador]['pozo_nombre'] = $fila['pozo_nombre'];
          $jsonArray[$contador]['pozo_ubicacion'] = $fila['pozo_ubicacion'];
          $contador++;
            
        }


        echo json_encode($jsonArray);

    } else {echo json_encode(1);}



?>