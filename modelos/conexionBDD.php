<?php 
//$coneccion = new mysqli ("localhost","id18687524_admin","0Y#NYtX%eRNFD60n","id18687524_bddpozos");
$coneccion = new mysqli ("localhost","root","","bddpozos");
if ($coneccion -> connect_errno) {
    echo json_encode("Failed to connect to MySQL: " . $mysqli -> connect_error);
    exit(); die();
  }

?>