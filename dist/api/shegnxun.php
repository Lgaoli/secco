<?php
include 'connc.php';


$good = isset($_POST['id']) ? $_POST['id'] : '';
$name = isset($_POST['name '])?$_POST['name ']:'';
$page = isset($_POST['page']) ? $_POST['page'] : '';
// $pages=($page-1)*12;
$sql="SELECT * FROM list  ORDER BY money LIMIT 0,12";



$cons = $con->query($sql);
// $ss=$cons->num_rows;
// echo  $cons;

$arr = $cons->fetch_all(MYSQLI_ASSOC);
//    ///////////////////////////////////////////////

	echo json_encode($arr,JSON_UNESCAPED_UNICODE);
//	var_dump($arr);
 