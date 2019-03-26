<?php
include 'connc.php';

$sql="SELECT * FROM shop";

$cons=$con->query($sql);
$arr = $cons->fetch_all(MYSQLI_ASSOC);

echo json_encode($arr,JSON_UNESCAPED_UNICODE);