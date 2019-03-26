<?php
$servername = 'localhost'; //服务器
$username = 'root'; //
$passname = '';
$dbname = 'secoo'; //数据库名

//建立链接：$conn对象  js中调用对象的属性  arr.lenght 
//php调用属性和方法  ->   $conn -> lenght
$con = new mysqli($servername, $username, $passname, $dbname);

//判断是否连接成功
if ($con->connect_error) {
    die('出错原因是:' . $con->connect_error);
}

 