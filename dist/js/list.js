"use strict";$(function(){function n(s){var i=s.map(function(s){return'<li id="'+s.id+'">\n                        <div class="img1"><img src="'+s.img1+'"></div>\n                        <div class="tisps"><span>'+s.changdi+'</span><span>自营</span></div>\n                        <div class="name" >'+s.shopname+'</div>\n                        <div class="money">'+s.money+'</div>\n                        <div class="goshop">\n                        <a class="li1">加入购物车</a>\n                        <span>仅剩1件</span>\n                        <span class="love">\n                        <i>收藏</i>\n                        </span>\n                        </div>\n                        </li>'}).join("");$("#list-list").html(i)}var s=!0,i=1;$.ajax({type:"post",url:"../api/list.php",async:!1,data:{page:i,num:12},success:function(s){var i=JSON.parse(s);n(i.data),$(".allpages").html(i.allpages)}}),$(".page-next").click(function(){++i<=3&&($(".text1").html(i),$.ajax({type:"post",url:"../api/list.php",data:{page:i,num:12},success:function(s){n(JSON.parse(s).data)}}))}),$(".page-prev").click(function(){1<=--i&&($(".text1").html(i),$.ajax({type:"post",url:"../api/list.php",data:{page:i,num:12},success:function(s){n(JSON.parse(s).data)}}))}),$("#cost").click(function(){$.ajax({type:"post",url:"../api/shegnxun.php",async:!1,data:{page:i,num:12},success:function(s){n(JSON.parse(s))}})}),$("#zonghe").click(function(){$.ajax({type:"post",url:"../api/list.php",data:{page:1,num:12},success:function(s){n(JSON.parse(s).data)}})}),$("#list-list li").on("click",function(){var s=$(this).attr("id");location.href="details.html?"+s}),$("dl .move").on("click",function(){s=s?($(this).prev().children(1).css("height","126px"),$(this).css("background-position-y","-155px"),$(this).html("收起"),!1):($(this).prev().children(1).css("height","100px"),$(this).css("background-position-y","-165px"),$(this).html("更多"),!0)}),$("dl .check").on("click",function(){s=s?($(this).prev().children(1).css("height","126px"),$(this).css("background-position-y","-155px"),$(this).prev().prev().children(1).children(1).children(1).css({overflow:"auto"}),$(this).html("收起"),!1):($(this).prev().children(1).css("height","100px"),$(this).css("background-position-y","-165px"),$(this).prev().prev().children(1).children(1).children(1).css({overflow:"hidden"}),$(this).html("多选"),!0)}),$(".main-h .control").on("click",function(){s=s?($(".noe").css("display","block"),!1):($(".noe").css("display","none"),!0)}),$(".col").on("click",function(){$(".vis").css("display","none")}),$(".feed-head a").on("click",function(){$(".feed-form").css("height","142px"),console.log($(this))}),$(".feed-head a").on("click",function(){$(".feed-head a").attr("class",""),$(this).attr("class","act")}),$(".arrow li").hover(function(){$(this).children().eq(4).css("visibility","visible")},function(){$(this).children().eq(4).css("visibility","hidden")}),$(".goback").hide(),$(window).scroll(function(){100<$(this).scrollTop()?$(".goback").fadeIn():$(".goback").fadeOut()}),$(".goback").click(function(){return $("html ,body").animate({scrollTop:0},300),!1});var o=$(".ceiling"),c=o.offset().top;if($(document).on("scroll",function(){window.scrollY>=c?o.css("position","fixed").css("top","0px"):o.css("position","relative").css("top","0px"),"1680"<window.scrollY?o.hide():o.show()}),$(".main-list-h a").on("click",function(){$(this).attr("class","on").siblings().attr("class",""),$(".arrow").eq($(this).index()).show(),$(".arrow").eq(!$(this).index()).hide()}),$(".synthesize a").click(function(){$(this).attr("class","io").siblings().attr("class","")}),window.localStorage.username){var t=window.localStorage.username;console.log(t),$(".login").html(t),$(".reg").html("推出"),$(".reg").click(function(){window.location=""})}else $(".reg").click(function(){window.location="../html/reg.html"}),$(".login").click(function(){window.location="../html/login.html"});$(".header_l1").on("mouseover",function(){$(this).css("color","#ffb81c")}),$(".header_l1").on("mouseout",function(){$(this).css("color","#000")}),$(".header_R span").on("mouseover",function(){$(this).css("color","#ffb81c")}),$(".header_R span").on("mouseout",function(){$(this).css("color","#000")}),$(".header_R i").on("mouseover",function(){$(this).css("color","#ffb81c")}),$(".header_R i").on("mouseout",function(){$(this).css("color","#000")}),$(".nav .getli").on("mouseover",function(){$(this).css("color","#fff"),$(this).find("div").css("display","block")}),$(".nav .getli ").on("mouseout",function(){$(this).css("color","#ffb81c"),$(this).find("div").css("display","none")})});