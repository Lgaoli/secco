<?php
include 'connc.php';

$good = isset($_POST['panduan']) ? $_POST['panduan'] : ''; //升序降序 功能判断
$page = isset($_POST['page']) ? $_POST['page'] : '';// 当前页数
$num = isset($_POST['num']) ? $_POST['num'] : '';//每页显示得条数

if($good == 'fenye'){
	$sql="SELECT * FROM list";
	$res = $con -> query($sql);
	$arr = $res -> fetch_all(MYSQLI_ASSOC);
	$newARR = array_slice($arr,($page-1)*$num,$num);
	$list1 = array(
		'total'=>count($arr),
		'data' =>$newARR,
		'page' =>$page,
		'num' =>$num,
	);
	echo json_encode($list1,JSON_UNESCAPED_UNICODE);
}else{
	
}





if($good =="jiangxu"){						//降序
	$sql="SELECT * FROM list ORDER BY money DESC "; 
	$res = $con -> query($sql); 
	$arr = $res -> fetch_all(MYSQLI_ASSOC);
	$newARR = array_slice($arr,($page-1)*5,5);
	$list = array(
	'total'=>count($arr),
	'data' =>$newARR,
	'page' =>$page,
	'num' =>5,
);
	echo json_encode($list,JSON_UNESCAPED_UNICODE);
}else{

}

if($good =="shengxu"){						//生序
	$sql="SELECT * FROM list ORDER BY money ASC "; 
	$res = $con -> query($sql); 
	$arr = $res -> fetch_all(MYSQLI_ASSOC);
	$newARR = array_slice($arr,($page-1)*5,5);
	$list = array(
	'total'=>count($arr),
	'data' =>$newARR,
	'page' =>$page,
	'num' =>5,
);
	echo json_encode($list,JSON_UNESCAPED_UNICODE);
}




 