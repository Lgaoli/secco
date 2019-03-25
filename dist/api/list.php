<?php
include 'connc.php';


$good = isset($_POST['id']) ? $_POST['id'] : '';
$name = isset($_POST['name '])?$_POST['name ']:'';
$page = isset($_POST['page']) ? $_POST['page'] : '';
$num = isset($_POST['num']) ? $_POST['num'] : '';
$pages=($page-1)*12;

$sql="SELECT * FROM list  limit $pages,12";
$zong="SELECT * FROM list";
$conss=$con->query($zong);
$cons = $con->query($sql);
$zongarr=ceil($conss->num_rows /$num);
$arr = $cons->fetch_all(MYSQLI_ASSOC);
   ///////////////////////////////////////////////
    $list = array(
		'data' => $arr,//总条数
		'allpages' => $zongarr,//总页数
	);
	echo json_encode($list,JSON_UNESCAPED_UNICODE);
//	var_dump($arr);
 