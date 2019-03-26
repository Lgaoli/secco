<?php
/*
    点击加入购物车，先查询订单表，然后更新订单表
        get:
            gid:商品id
            num：商品数量
        返回：
            订单表的所有数量
 */                  

    //加入购物车，把数据写入订单表
    include 'connc.php';

    $num=isset($_POST['num']) ? $_POST['num'] : '1';
    $gid=isset($_POST['gid']) ? $_POST['gid'] : '1';
    $changdi=isset($_POST['changdi']) ? $_POST['changdi'] : '1';
    // $

    //查询订单表是否有该gid商品
    $sql="SELECT num FROM shop WHERE id='$gid';";
    $res=$con->query($sql);
    $res2 = null;

    if($res->num_rows>0){
        $data = $res->fetch_all(MYSQLI_ASSOC);
        $gnum = $data[0]['num'];
        $num = $num + $gnum;
        $sql2="UPDATE shop SET num=$num WHERE id=$gid;";
        $res2=$con->query($sql2);
    }else{
        $sql3="SELECT * FROM  list WHERE id=$gid";
        $res3=$con->query($sql3);
        if($res3->num_rows>0){
            $data3=$res3->fetch_all(MYSQLI_ASSOC);
            $gname = $data3[0]['shopname'];
            $gprice = $data3[0]['money'];
            $gimg1 = $data3[0]['img1'];
            $sql4="INSERT INTO shop(id,shopname,money,img,num,changdi) VALUES ('$gid','$gname','$gprice','$gimg1','$num','$changdi');";
            $res2=$con->query($sql4);
        }
    }
    if($res2){
        echo 1;
    }else{
        echo 0;
    }
    

?>