$(function () {
    $('#che').click(function(){
        console.log($('#che').prop('checked'))
        if(true){
            var a2 = localStorage.username;
            console.log(a2)

        }

    })

    $('.reg').on("click", function () {
        window.location.href = "reg.html";
    })




    $('#log-list li').on("click", function () {
        
        //点击当前的变高亮+排他
        $(this)
            .attr('class', 'active')
            .siblings()
            .attr('class', '');
        //内容跟着出来
        $('.on .login-in')
            .eq($(this)
                .index())
            .css('display', 'block')
            .siblings()
            .css('display', 'none')
    })

    //
    $('.on').hover(function () {
        $('#img1').css({
            'transform': "scale(0.7)",
            "margin-left": "-100px",
            "margin-top": "-30px"
        }), $('#img2').css("opacity", '1')

    }, function () {
        $('#img1').css({
            'transform': "scale(1)",
            "margin-left": "0px",
            "margin-top": "0px"
        }), $('#img2').css("opacity", '0')
    })


    //input框
    $(".login-list input").on("focus", function () {
        $(this).addClass("aci");
    });
    $(".login-list input").on("blur", function () {
        $(this).removeClass("aci");
    });



    $("#username").on("focus", function () {
        $('#error_msg').css('display', 'none');
    });
    $("#password").on("focus", function () {
        $('#error_msg').css('display', 'none');
    });


    $.idcode.setCode();



    $("#verif").blur(function () {
        var IsBy = $.idcode.validateCode();
        // alert(IsBy);

        if (IsBy == "验证码正确！") {
            $('#error_msg').css('display', 'none');


            $('.login-btn').on('click', function () {
               

                $.ajax({
                    type: "post",
                    url: "../api/login.php",
                    // async: true,
                    data: "username=" +
                        $("#username").val() +
                        "&password=" +
                        $("#password").val(),

                    success: function (str) {
                
                        if (str == '存在') {
                         
                           if($('#che').prop('checked')){


                        
                   
                            var uu =window.localStorage;
                            uu.username=$("#username").val() ;
                            window.location='index.html';
                           
                           }else{
                        
                            
                      

                           }
                            
                    

                        } else {
                            $('#error_msg').html('用户名或密码不正确')
                            $('#error_msg').css('display', 'block');
                        }

                    }
                })
            })
        } else {
            $('#error_msg').css('display', 'block');
        }
    })




})