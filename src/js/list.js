
$(function () {
    function listheml(arr) {
        var res = arr.map(function (item) {
            //渲染数据
            return `<li id="${item.id}">
                        <div class="img1"><img src="${item.img1}"></div>
                        <div class="tisps"><span>${item.changdi}</span><span>自营</span></div>
                        <div class="name" >${item.shopname}</div>
                        <div class="money">${item.money}</div>
                        <div class="goshop">
                        <a class="li1">加入购物车</a>
                        <span>仅剩1件</span>
                        <span class="love">
                        <i>收藏</i>
                        </span>
                        </div>
                        </li>`;
        }).join("");
        $('#list-list').html(res);
    };



    var moveok = true;
    var ipage = 1; //第一页
    var inum = 12; //一页显示的条数

    $.ajax({
        type: 'post',
        url: '../api/list.php',
        async: false,
        data: {
            page: ipage,
            num: inum
        },
        success: function (str) {

            var arr = JSON.parse(str);
            // console.log(arr)

            listheml(arr.data);
            // var pages=console.log(arr.allpages)
            $('.allpages').html(arr.allpages);
            

        }
    });




    $('.page-next').click(function(){
ipage++;
if(ipage<=3){
    $('.text1').html(ipage)

$.ajax({
    type: 'post',
    url: '../api/list.php',
    // async: false,
    data: {
        page: ipage,
        num: inum
    },
    success: function (str) {

        var arr = JSON.parse(str);
        // console.log(arr)

        listheml(arr.data);      
    }
})};
    });


    $('.page-prev').click(function(){
        ipage--;
        
            if(ipage>=1){
                $('.text1').html(ipage);

          
      
        $.ajax({
            type: 'post',
            url: '../api/list.php',
            // async: false,
            data: {
                page: ipage,
                num: inum
            },
            success: function (str) {
        
                var arr = JSON.parse(str);
                // console.log(arr)
        
                listheml(arr.data);      
            }
        })
    };


            });


//价格排序

            $('#cost').click(function(){
                $.ajax({
                    type: 'post',
                    url: '../api/shegnxun.php',
                    async: false,
                    data: {
                        page: ipage,
                        num: inum
                    },
                    success: function (str) {
                
                        var arr = JSON.parse(str);
                        
                
                        listheml(arr);      
                    }
                })



            })


 
            $('#zonghe').click(function(){
                var ipage = 1; //第一页
    var inum = 12; //一页显示的条数

    $.ajax({
        type: 'post',
        url: '../api/list.php',
        // async: false,
        data: {
            page: ipage,
            num: inum
        },
        success: function (str) {

            var arr = JSON.parse(str);
            // console.log(arr)

            listheml(arr.data);
      
            

        }
    });


            });


           
        
$('#list-list li').on('click',function(){
    var vl = $(this).attr('id');
    // console.log(vl)
  location.href= 'details.html?'+vl;
  

});



 




    $('dl .move').on('click', function () {
        if (moveok) {
            // console.log($(this).prev().children(1))

            $(this).prev().children(1).css('height', '126px');
            $(this).css('background-position-y', '-155px');

            $(this).html('收起');
            moveok = false;;

        } else {
            $(this).prev().children(1).css('height', '100px');
            $(this).css('background-position-y', '-165px');

            $(this).html('更多');
            moveok = true;
        }
    });

    $('dl .check').on('click', function () {
        // console.log($(this).prev().prev().children(1).children(1).children(1))

        if (moveok) {
            $(this).prev().children(1).css('height', '126px');
            $(this).css('background-position-y', '-155px');
            $(this).prev().prev().children(1).children(1).children(1).css({
                'overflow': 'auto'
            });
            $(this).html('收起');                              
            moveok = false;

        } else {
            $(this).prev().children(1).css('height', '100px');
            $(this).css('background-position-y', '-165px');

            $(this).prev().prev().children(1).children(1).children(1).css({
                'overflow': 'hidden'
            });
            $(this).html('多选');
            moveok = true;
        }
    });





    //点击更多选项显示或隐藏
    $('.main-h .control').on('click', function () {


        if (moveok) {
            $('.noe').css('display', 'block');
            moveok = false;
        } else {
            $('.noe').css('display', 'none');
            moveok = true;
        }
    })



    //建议部分
    $('.col').on('click', function () {
        $('.vis').css('display', 'none');

    })

    $('.feed-head a').on('click', function () {
        $('.feed-form').css('height', '142px');
        console.log($(this))

    })
    $('.feed-head a').on('click', function () {
        $('.feed-head a').attr('class', '');
        $(this).attr('class', 'act');
    });

    $('.arrow li').hover(function () {
        $(this).children().eq(4).css('visibility', 'visible')
    }, function () {
        $(this).children().eq(4).css('visibility', 'hidden')
    })





    //回到顶部
    $('.goback').hide(); //隐藏go to top按钮
    $(window).scroll(function () {
        // console.log($(this).scrollTop());
        //滚动距离
        //当window的scrolltop距离大于1时，go to 
        if ($(this).scrollTop() > 100) {
            $('.goback').fadeIn();
        } else {
            $('.goback').fadeOut();
        }
    });
    $('.goback').click(function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });




    //吸顶菜单

    var a = $('.ceiling');
   var b = a.offset().top;

    $(document).on('scroll', function () {

        if (window.scrollY >= b) {
            a.css('position', 'fixed')
                .css('top', '0px');

        } else {
            a.css(
                'position', 'relative',
            ).css('top', '0px');
        }



        if (window.scrollY > '1680') {
            a.hide();

        } else {
            a.show();
        }



    })





    $('.main-list-h a').on("click", function () {
        $(this).attr('class', 'on')
            .siblings()
            .attr('class', '');
        // console.log($(this).index())
        $('.arrow').eq($(this).index()).show();
        $('.arrow').eq(!$(this).index()).hide();



    })


    $('.synthesize a').click(function () {
        $(this).attr('class', 'io')
            .siblings()
            .attr('class', '');
    })






    if (window.localStorage.username) {
        var dd=window.localStorage.username;
        console.log(dd)
        $('.login').html(dd);
        $('.reg').html('推出');
        $('.reg').click(function(){
            window.location='';
            
                    })
    } else{
        $('.reg').click(function(){
window.location='../html/reg.html';

        })
        $('.login').click(function(){
window.location='../html/login.html';

        })
    }







        
    //头部经过事件
    $('.header_l1').on('mouseover', function () {
        $(this).css('color', '#ffb81c');
    })
    $('.header_l1').on('mouseout', function () {
        $(this).css('color', '#000');
    })

    $('.header_R span').on('mouseover', function () {
        $(this).css('color', '#ffb81c');
    })
    $('.header_R span').on('mouseout', function () {
        $(this).css('color', '#000');
    })
    $('.header_R i').on('mouseover', function () {
        $(this).css('color', '#ffb81c');
    })
    $('.header_R i').on('mouseout', function () {
        $(this).css('color', '#000');
    })









    //导航事件
    $('.nav .getli').on('mouseover', function () {


        $(this).css('color', '#fff');

        $(this).find("div").css('display', 'block');


    })
    $('.nav .getli ').on('mouseout', function () {

        $(this).css('color', '#ffb81c');
        $(this).find("div").css('display', 'none');
    });










});