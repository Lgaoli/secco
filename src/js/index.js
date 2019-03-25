$(function () {

    $.ajax({
        type: 'post',
        url: 'api/xuanran.php',
        // async:false,
        data :{

        },
        sussecc: function (str) {
            var arr = JSON.parse(str);
            console.log(arr)
            var res = arr.map(function (item) {
                return `<li>
            <a href="javascript:;">
              <div class="view_img">
                <img
                  src="${item.img}"
                  alt=""
                />
                <div class="mask"></div>
              </div>

              <div class="view-fo">
                <p class="view-fo-name">${item.shopname}</p>
                <p class="view-fo-desc">
                  ${item.content}
                </p>
                <div class="line"></div>
                <p class="view-fo-price">￥${item.money}</p>
              </div>
              <div class="li-ho"></div>
            </a>
          </li>`
            }).join('');
            $('.product-list').html(res);
        }
    });

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
    })








    $('.search-inner').click(function () {
        var onOff = true;
        if (onOff) {
            $(this).children(0).val("");
            $(this).animate({
                "width": '200px',
                'color': '#ffb81c',

            });
            onOff = false;
        } else {

            $($(this)).animate({
                "width": '50px'
            });
            $(this).children(0).val("dsd");
            onOff = true;
        }
        // if ($(this).children(0).value == "搜索") {
        //     $(this).children(0).value = '';
        // }

        // $(this).children(0).blur(function (e) {
        //     var $this = $(this).children(0);
        //     if ($this.val() === '') {
        //         if (that.flag) {
        //             $(this).children(0).focus();
        //             return;
        //         }
        //         $('.search').removeClass('active')
        //         that.searchTimer = setTimeout(function () {
        //             $this.val($this.attr('data-value'));
        //             $this.removeClass('txl').addClass('txr');
        //         },290);
        //     }
        // });

    });
    if (window.localStorage.username) {
        var dd = window.localStorage.username;
        console.log(dd)
        $('.login').html(dd);
        $('.reg').html('推出');
        $('.reg').click(function () {
            var uu = window.localStorage;
            uu.username = '';
            window.location = '';
        })

    } else {
        $('.reg').click(function () {
            window.location = '../html/reg.html';

        })
        $('.login').click(function () {
            window.location = '../html/login.html';

        })

    }


    $('#di').on('click', function () {
        window.location = './html/list.html';
    })






    /*轮播图

	 	
	 */

    //1、ul的宽度：图片的宽度*图片个数
    var wNum = $('.product-list li').size() * $('.product-list li').eq(0).outerWidth();
    $('.product-list').css('width', wNum);
    var iW = $('.viewpager').outerWidth(); //运动距离

    //2、开定时器，每次运动4个图距离，往左边运动：-4*iW


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


})