<?php 

if (!empty($_POST['filaPulsada']) && !empty($_POST['fechaMedicion']) && !empty($_POST['valorMedicion'])){

require_once("conexionbdd.php");

//echo json_encode($_POST['valorMedicion']); die();

$consultaRegistro = $coneccion->prepare("INSERT INTO manometromediciones (pozo_manometro, medicion_fecha, medicion_valor) VALUES (?,?,?);");
$consultaRegistro->bind_param("isi",$_POST['filaPulsada'],$_POST['fechaMedicion'],$_POST['valorMedicion']);

if ($consultaRegistro->execute()){echo json_encode("Registro Completado");}
else {echo json_encode("Registro no completado, prueba ingresar datos diferentes");}

} else {echo json_encode("Registro no completado, datos no suficientes");}


?>