<?php
include 'connc.php';

$name = isset($_POST['username']) ? $_POST['username'] : '';

$sqli = "SELECT * FROM user WHERE username='$name'"; //查询user表的name

$cons = $con->query($sqli);

if ($cons->num_rows) {

    echo '1';
} else {
    echo '0';
}
