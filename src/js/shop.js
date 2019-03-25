$(function () {
    
    $.ajax({
        url:'../api/shop.php',
        async:false,
        data:{},
        success:function(str){
            var arr=JSON.parse(str);
            console.log(arr);

            var res=arr.map(function(item){
                return `<tr id="${item.id}">
                <td valign="top" class="che" ><input type="checkbox"></td>
                <td valign="top" style="width: 97px;">
                    <div class="cart fl"><img src="${item.img}"></div>
                    <div class="cartNames fl">
                        <p class="name"><a href="http://item.secoo.com/44573561.shtml?source=cart"
                                target="_blank">${item.shopname}</a></p>
                    </div>
                    <div class="cartNames fl" style="overflow:visible">
                        <p class="namePro">
                            颜色：黑色&nbsp;&nbsp;
                            尺码：均码&nbsp;&nbsp;
                        </p>
                    </div>
                </td>
                <td valign="top">${item.changdi}</td>
                <td valign="top" class="danjia">￥${item.money}</td>
                <td valign="top">
                    <div class="countNum clearfix">
                        <div class="cPlus fl" action="decrease">-</div>
                        <input class="Num fl" type="text" name="quantity" action="goto" value="${item.num}">
                        <div class="cMinus fl" action="increase">+</div>
                    </div>

                </td>
                <td valign="top">
                    <div class="subtotal">￥ ${item.money}.00</div>
                </td>
                <td valign="top">
                    <div class="del"><a href="#">删除</a></div>
                    <div class="del-box">
                        <div class="del-text">您确定要删除吗？</div>
                        <div class="del-btn">
                            <a  class="confirm">确定</a>&nbsp;
                            <a  class="cancel">取消</a>
                        </div>
                    </div>
                </td>
            </tr>`;

            }).join();
            $('tbody').html(res);
            $('tbody tr').each(function(i){
               var ed =$('tbody tr').eq(i).find($('.Num')).val()*1;
               var danjia =$('tbody tr').eq(i).find($('.danjia')).html().slice(1)*1;
               var zongjia=ed*danjia;
               $('.subtotal').eq(i).html('￥'+zongjia+'.00')
            
            })      
            $('.confirm').on('click',function(){
            
                console.log()
                var gid=$('tbody tr').prop('id');
                $.ajax({
                    type:'post',
                    url:'../api/del.php',
                    data:{
                        id:gid
            
                    },success:function(){
                        
                    }
                })
            })
          }
    })

//获取小计








    /*轮播图

	 	
	 */

    //1、ul的宽度：图片的宽度*图片个数
    var wNum = $('.product-list li').size() * $('.product-list li').eq(0).outerWidth();
    $('.product-list').css('width', wNum);
    var iW = $('.viewpager').outerWidth(); //运动距离

    //2、开定时器，每次运动4个图距离，往左边运动：-5*iW
    function next() { //动画时间间隔：5000-2000
        $('.product-list').stop().animate({
            'left': -iW
        }, function () {
            //出去的图片，剪切放到末尾
            $('.product-list li:lt(5)').insertAfter($('.product-list li:last'));
            //ul归位
            $('.product-list').css('left', 0);
        });

    }

    function prev() {
        //先剪切最后的五个图插入到ul首位
        //		$('#moveimg li:gt(4)').insertBefore($('#moveimg li:first'));
        for (var i = 0; i < 5; i++) {
            $('.product-list li:last').insertBefore($('.product-list li:first'));
        }
        //预留5个图位置
        $('.product-list').css('left', -iW);
        //挪到可视区
        $('.product-list').stop().animate({
            'left': 0
        });
    }
    //点击切换下一页：五张图
    $('.next').click(function () {
        next();
    });

    $('.prev').click(function () {
        prev();
    });




    //回到顶部
    $('.top').hide(); //隐藏go to top按钮
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        //滚动距离
        //当window的scrolltop距离大于1时，go to 
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });





    //购物车
    /*
 	需求：
 		* 数量加和减、手动修改数量
 		* 小计更新
 		* 删除当行
 		* 删除全部
 		* 全选
 		* 全删
*/

    ///* 数量加和减、手动修改数量
    //点击加
  
    $('tbody').on('click', '.cMinus', function () {


        var num = $(this).prev().val() * 1;

        num++;


        if (num >= 50) {
            num = 50;

        }

        // console.log($(this).prev().val(num))
        $(this).prev().val(num);
        // console.log($(this).parent().parent().next());
        getnum($(this));
        allnum()

    });
    //点击减

    $('tr').on('click', '.cPlus', function () {
        // console.log($(this).next().val() * 1);
        var num = $(this).next().val() * 1;
        num--;
        if (num <= 0) {
            num = 1;
        }
        $(this).next().val(num);

        getnum($(this));
        allnum()
    });


    $('tr').on('input', '.Num', function () {
        $(this).val($(this).val() <= 50 ? $(this).val() : 50) //限制不能超过

        getnum($(this));
        allnum()


    })
    //判断是否为数字
    // $('#cart').on('blur', '.nownum', function () {
    //     console.log(1);
    //     if (!isNaN($(this).val()*1)) {
    //         alert("是数字");
    //     } else {
    //         alert("不全是数字");
    //     }
    // });
    //小计更新
    function getnum(now) {

        var Num = now.parent().find('input').val() * 1; //获取input里面的值：获取数量

        var money = now.parent().parent().prev().text().slice(1) * 1; //获取单商品总价;
        console.log(money);

        var money_to = '￥ ' + (Num * money).toFixed(2);
        console.log(money_to);
        now.parent().parent().next().children(0).html(money_to);
    }

    $('tr').on('click', '.del', function () {

        $(this).next().css('display', 'block');
        $('tr .confirm').on("click", function () {
            console.log($(this).parent().parent().parent().parent())
            $(this).parent().parent().parent().parent().remove();
            Del();
            allnum()
        })
     
     



    })

    //点击删除当行
    // $('tr').on('click', '.del', function () {

    //     var res = confirm('你确定忍心放弃我嘛');
    //     if (res) {
    //         $(this).parent().parent().remove();
    //     }
    //     Del();
    //     allnum()

    // })
    //
    function Del() {
        // console.log($('#cart .nownum').size())
        if ($('tr .Num').size() <= 0) {
            $('.carTable').css('display', 'none');
            $('.main-f').css('display', 'none');
            $('.main-h').css('display', 'none');
            $('.main1').css('display', 'block')
        } else {
            $('.main-f').css('display', 'block');
            $('.carTable').css('display', 'block');
            $('.main-h').css('display', 'block');
            $('.main1').css('display', 'none')
        }
        allnum()

    }





    //全选/不选
    $('.che input').on('click', '', function () {

        var cek_l1 = $('.che input:checked').size(); //已勾选的checked长度

        var cek_l2 = $('.che input').size(); //checked总长度

        if (cek_l1 == cek_l2) {
            $('.ano1 input').prop('checked', true);
            $('th input').prop('checked', true);

        } else {
            $('.ano1 input').prop('checked', false);
            $('th input').prop('checked', false);
        }
        allnum()

    })

    //勾选全选或者取消全选
    $('.ano1 input').on('click', function () {
        if ($('.ano1 input').prop('checked')) {
            $('td input').prop('checked', true)
            var gid=$('tbody tr').prop('id');
            $.ajax({
                type:'post',
                url:'../api/del.php',
                data:{
                    id:gid
        
                },success:function(){
                    
                }
            })
        } else {
            $('td input').prop('checked', false);
        }
        allnum()
    })


    $('th input').on('click', function () {
        if ($('th input').prop('checked')) {
            $('td input').prop('checked', true)
            $('.ano1 input').prop('checked', true);
            var gid=$('tbody tr').prop('id');
            $.ajax({
                type:'post',
                url:'../api/del.php',
                data:{
                    id:gid
        
                },success:function(){
                    
                }
            })
            
       
              
           
        } else {
            $('td input').prop('checked', false);
            $('.ano1 input').prop('checked', false);

        }
        allnum()
    })

    //

    var arr = [];

    function allnum() {
        arr = []; //放已勾选的下标

        $('.che input').each(function (i, item) {
            if ($('.che input').eq(i).prop('checked')) {
                arr.push(i);
                $('.che input').eq(i).parent().parent().css('background','#fdf0ef')
                var gid=$('tbody tr').prop('id');
                $.ajax({
                    type:'post',
                    url:'../api/del.php',
                    data:{
                        id:gid
            
                    },success:function(){
                        
                    }
                })
            }else{
                  $('.che input').eq(i).parent().parent().css('background','#ffffff')
            }
            

        });
        var num = 0; //数量为0
        var price = 0; //总价为0
        arr.forEach(function (item) {
            num += $('.Num').eq(item).val() * 1; //总的数量
            price += $('.subtotal').eq(item).text().slice(1) * 1; //总的价格
        });
        $('.allnum').html('商品数量总计：' + num + '件');
        $('.allnum1').html('包装数量总计：' + num + '件');
        $('.all').html('商品金额总计（不含税金和运费）：<strong>' + price.toFixed(2) + '</strong>');
    }



    //选中删除
    $('.ano2').on('click', function () {

        console.log(arr.length)


        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i])
            $('tbody tr').eq(arr[i]).remove();



        }
        console.log(arr);
        arr = [];
        console.log(arr);
        Del();
        allnum();
                                                                                                                                                                                                                                                                                                                                                                 
    })




if(window.localStorage.username){
    var dd=window.localStorage.username;

    $('.user').html(dd)
}else{
    $('.user').click(function(){
        window.location='../html/login.html';
    })
}


})