<?php
include 'connc.php';

$sql="SELECT * FROM xuanran";


$cons = $con->query($sql);
echo $cons;
$arr = $cons->fetch_all(MYSQLI_ASSOC);

echo json_encode($arr,JSON_UNESCAPED_UNICODE);