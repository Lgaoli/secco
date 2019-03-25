<?php
include 'connc.php';

$good = isset($_POST['id']) ? $_POST['id'] : '';


$sql="DELETE FROM shop WHERE id=$good";


$cons = $con->query($sql);