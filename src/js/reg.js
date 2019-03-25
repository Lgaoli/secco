"use strict";
$(function () {
    /*
	验证用户名

    */
   $('.login').on('click',function(){
       console.log(1)
       window.location.href = "../html/login.html";
   })



    $("#password1").blur(function () {

        if ($("#password").val() != $("#password1").val()) {

            $('.error').html("两次输入的密码不一致");
            $('.error').css('color', 'red');

        } else {
            $('.error').html("");
        }
    })

    var isok = true;

    //勾选框时显示
    $("#che").click(function () {
        // console.log($('#che').prop('checked'));
        if ($("#che").prop("checked") == true) {
            $("#vip").css("display", "block");
        } else {
            $("#vip").css("display", "none");
        }
    });
    $.idcode.setCode();
    //验证码

    $(".main-reg input").on("focus", function () {
        $(this).addClass("aci");
    });
    $(".main-reg input").on("blur", function () {
        $(this).removeClass("aci");
    });

    //失去焦点判断用户名是否存在
    $("#username").on("blur", function () {
        var user = $("#username").val();
        var pasw = $("#password").val();
        if (user) {
            //非空判断

            var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/; //手机号码正则
            var reg1 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //电子邮箱正则
            var pas = /^(\w){6,20}$/;
            // return reg.test(str);
            if (reg.test(user) || reg1.test(user)) {
                //正则判断

                if (reg.test(user)) {
                    //判断是否为手机号码
                    $(".yz").css("display", "block");
                    $("#yzbtn").val("获取手机验证码");

                    $.ajax({
                        type: "post",
                        url: "../api/que.php",
                        // async: true,
                        data: "username=" +
                            $("#username")
                            .val()
                            .trim(),
                        success: function (str) {
                            // console.log(str);
                            var res = JSON.parse(str);

                            //从后端得到数据
                            if (res == "0") {
                                $(".user-error").html("此用户号可注册");
                                $(".user-error").css({
                                    color: "#58bc58"
                                }, {
                                    "font-size": "12px"
                                });
                                //判断验证码是否正确，真就往数据库传数据，
                                $("#verif").blur(function () {
                                    var IsBy = $.idcode.validateCode();
                                    // alert(IsBy);
                                    $(".user-error").html(IsBy);
                                    if (IsBy == "验证码正确！") {
                                        console.log( "验证码正确！")
                                        $(".user-error").html(IsBy);
                                        $(".reg-btn").on("click", function () {
                                            if ($("#password").val() == $("#password1").val()) {
                                                //开关防止提交多次数据
                                                console.log(isok);
                                                if (isok) {
                                                    console.log(1);
                                                    $.ajax({
                                                        type: "post",
                                                        url: "../api/reg.php",
                                                        // async: true,
                                                        data: "username=" +
                                                            $("#username").val() +
                                                            "&password=" +
                                                            $("#password").val(),

                                                        success: function (str) {
                                                            console.log(str);

                                                            // var res=JSON.parse(str);
                                                            // console.log(res);
                                                        }
                                                    });
                                                    isok = false;
                                                } else {
                                                    $(".user-error").val("用户已存在");

                                                    isok = false;
                                                }
                                            } else {
                                                $(".error").val("两次密码不一致");
                                            }
                                        });
                                    } else {
                                        $(".user-error").html(IsBy);
                                    }
                                });
                            } else {
                                $(".user-error").html("此用户号已存在");
                                $(".user-error").css({
                                    color: "red"
                                }, {
                                    "font-size": "12px"
                                });
                            }
                            // $('.user-error').html(res.message);
                            // console.log(res.code)
                        }
                    });
                } else if (reg1.test(user)) {
                    //电子邮箱验证

                    $(".yz").css("display", "block");
                    $("#yzbtn").val("获取邮箱验证码");

                    $("#verif").blur(function () {
                        var IsBy = $.idcode.validateCode();
                        // alert(IsBy);
                        $(".user-error").html(IsBy);
                        if (IsBy == "验证码正确！") {
                            $(".user-error").html(IsBy);
                        } else {
                            $(".user-error").html(IsBy);
                        }
                    });

                    $.ajax({
                        type: "post",
                        url: "../api/que.php",
                        // async: true,
                        data: "username=" +
                            $("#username")
                            .val()
                            .trim(),
                        success: function (str) {
                            // console.log(str);
                            var res = JSON.parse(str);

                            //从后端得到数据
                            if (res == "0") {
                                $(".user-error").html("此用户号可注册");
                                $(".user-error").css({
                                    color: "#58bc58"
                                }, {
                                    "font-size": "12px"
                                });
                                //判断验证码是否正确，真就往数据库传数据，
                                $("#verif").blur(function () {
                                    var IsBy = $.idcode.validateCode();
                                    // alert(IsBy);
                                    $(".user-error").html(IsBy);
                                    if (IsBy == "验证码正确！") {
                                        console.log( "验证码正确！")
                                        $(".user-error").html(IsBy);
                                        $(".reg-btn").on("click", function () {
                                            if ($("#password").val() == $("#password1").val()) {
                                                //开关防止提交多次数据
                                                console.log(isok);
                                                if (isok) {
                                                    console.log(1);
                                                    $.ajax({
                                                        type: "post",
                                                        url: "../api/reg.php",
                                                        // async: true,
                                                        data: "username=" +
                                                            $("#username").val() +
                                                            "&password=" +
                                                            $("#password").val(),

                                                        success: function (str) {
                                                            window.location.href='../html/login.html'

                                                            // var res=JSON.parse(str);
                                                            // console.log(res);
                                                        }
                                                    });
                                                    isok = false;
                                                } else {
                                                    $(".user-error").val("用户已存在");

                                                    isok = false;
                                                }
                                            } else {
                                                $(".error").val("两次密码不一致");
                                            }
                                        });
                                    } else {
                                        $(".user-error").html(IsBy);
                                    }
                                });
                            } else {
                                $(".user-error").html("此用户号已存在");
                                $(".user-error").css({
                                    color: "red"
                                }, {
                                    "font-size": "12px"
                                });
                            }
                            // $('.user-error').html(res.message);
                            // console.log(res.code)
                        }
                    });
                }
            } else {
                $(".user-error").html("请输入正确的手机号或者邮箱");
                $(".user-error").css({
                    color: "red"
                }, {
                    "font-size": "12px"
                });
            }
        } else {
            $(".user-error").html("用户号不能为空");
            $(".user-error").css({
                color: "red"
            }, {
                "font-size": "12px"
            });
        }
    });



    // $('.reg-btn').on("click", function () {

    //     if ($("#password").val() == $('#password1').val()) {
    //         $(".error").html("此用户号可注册");
    //     } else {
    //         $(".error").html("此用户号不能注册");
    //     }
    // })

    /*
      	用户注册
      	get/post
      		guestbook/index.php
      			m : index
      			a : reg
      			username : 要注册的用户名
      			password : 注册的密码
      		返回
      			{
      				code : 返回的信息代码 0 = 没有错误，1 = 有错误
      				message : 返回的信息 具体返回信息
      			}
          */
    //   $('#btnReg').on('click', '', function () {
    //     //   console.log(1)
    //     $.ajax({
    //         type: 'post',
    //         url: '../api/guestbook/index.php',
    //         async: true,
    //         data: 'm=index&a=reg&username=' + $('#username').val() + '&password=' +$('#password1').val() ,
    //         success:function(str){
    //           var res=JSON.parse(str);
    //         //   console.log(res);

    //         // und();

    //         }
    //     })
    // })；
});