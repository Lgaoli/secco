$(function () {

  

    $("#list-list").on('click','.li1',function () {

        var w = ($(window).width() - $('.love_tips').outerWidth()) / 2;
        var h = ($(window).height() - $('.love_tips').outerHeight()) / 2;
            $("#box").css({
                'display': 'block'
            });
            $('.love_tips').css({
                'display': 'block'
            })

            $('.love_tips').css({
                'top': h,'left': w,
            })

        }),
        // function show() {
        //     $("#box").css({
        //         'display': 'none'
        //     })
        // }



    $('.buy').click(function () {
        $('.love_tips').css({
            'display': 'none'
        });
        $("#box").css({
            'display': 'none'
        });
    })


    $(window).resize(function () {

        $('#box').css({
            'height': '100%',
            'width': '100%'
        });
        var w = ($(window).width() - $('.love_tips').outerWidth()) / 2;
        var h = ($(window).height() - $('.love_tips').outerHeight()) / 2;
    
        $('.love_tips').css({
            'top': h,'left': w
        })

    })
})