<?php
include 'connc.php';
$name = isset($_POST['username']) ? $_POST['username'] : '';
$pas = isset($_POST['password']) ? $_POST['password'] : '';


$sqli = "INSERT INTO `user` (username, password)VALUES ('$name','$pas')"; //将新的数据插入到db表中
echo $sqli;
$cons = $con->query($sqli);

if ($cons) {


    echo '成功';
} else {
    echo '注册失败';
}
