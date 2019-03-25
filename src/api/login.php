<?php
include 'connc.php';

$name = isset($_POST['username']) ? $_POST['username'] : '';
$pas = isset($_POST['password']) ? $_POST['password'] : '';

$sqli = "SELECT * FROM user WHERE username='$name' and password='$pas'"; //查询db表的name

$cons = $con->query($sqli);


if ($cons->num_rows) {



    echo '存在' ;
} else {
    echo '不存在';
}


