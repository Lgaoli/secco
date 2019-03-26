<?php
include 'connc.php';


$good = isset($_POST['id']) ? $_POST['id'] : '';



$sql="SELECT * FROM list  WHERE id=$good";


$cons = $con->query($sql);

$arr = $cons->fetch_all(MYSQLI_ASSOC);
 
	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
//	var_dump($arr);
 