"use strict";$(function(){$.ajax({url:"../api/shop.php",async:!1,data:{},success:function(t){var n=JSON.parse(t);console.log(n);var i=n.map(function(t){return'<tr id="'+t.id+'">\n                <td valign="top" class="che" ><input type="checkbox"></td>\n                <td valign="top" style="width: 97px;">\n                    <div class="cart fl"><img src="'+t.img+'"></div>\n                    <div class="cartNames fl">\n                        <p class="name"><a href="http://item.secoo.com/44573561.shtml?source=cart"\n                                target="_blank">'+t.shopname+'</a></p>\n                    </div>\n                    <div class="cartNames fl" style="overflow:visible">\n                        <p class="namePro">\n                            颜色：黑色&nbsp;&nbsp;\n                            尺码：均码&nbsp;&nbsp;\n                        </p>\n                    </div>\n                </td>\n                <td valign="top">'+t.changdi+'</td>\n                <td valign="top" class="danjia">￥'+t.money+'</td>\n                <td valign="top">\n                    <div class="countNum clearfix">\n                        <div class="cPlus fl" action="decrease">-</div>\n                        <input class="Num fl" type="text" name="quantity" action="goto" value="'+t.num+'">\n                        <div class="cMinus fl" action="increase">+</div>\n                    </div>\n\n                </td>\n                <td valign="top">\n                    <div class="subtotal">￥ '+t.money+'.00</div>\n                </td>\n                <td valign="top">\n                    <div class="del"><a href="#">删除</a></div>\n                    <div class="del-box">\n                        <div class="del-text">您确定要删除吗？</div>\n                        <div class="del-btn">\n                            <a  class="confirm">确定</a>&nbsp;\n                            <a  class="cancel">取消</a>\n                        </div>\n                    </div>\n                </td>\n            </tr>'}).join();$("tbody").html(i),$("tbody tr").each(function(t){var n=1*$("tbody tr").eq(t).find($(".Num")).val()*(1*$("tbody tr").eq(t).find($(".danjia")).html().slice(1));$(".subtotal").eq(t).html("￥"+n+".00")}),$(".confirm").on("click",function(){console.log();var t=$("tbody tr").prop("id");$.ajax({type:"post",url:"../api/del.php",data:{id:t},success:function(){}})})}});var t=$(".product-list li").size()*$(".product-list li").eq(0).outerWidth();$(".product-list").css("width",t);var n=$(".viewpager").outerWidth();function i(t){var n=1*t.parent().find("input").val(),i=1*t.parent().parent().prev().text().slice(1);console.log(i);var c="￥ "+(n*i).toFixed(2);console.log(c),t.parent().parent().next().children(0).html(c)}function c(){$("tr .Num").size()<=0?($(".carTable").css("display","none"),$(".main-f").css("display","none"),$(".main-h").css("display","none"),$(".main1").css("display","block")):($(".main-f").css("display","block"),$(".carTable").css("display","block"),$(".main-h").css("display","block"),$(".main1").css("display","none")),o()}$(".next").click(function(){$(".product-list").stop().animate({left:-n},function(){$(".product-list li:lt(5)").insertAfter($(".product-list li:last")),$(".product-list").css("left",0)})}),$(".prev").click(function(){!function(){for(var t=0;t<5;t++)$(".product-list li:last").insertBefore($(".product-list li:first"));$(".product-list").css("left",-n),$(".product-list").stop().animate({left:0})}()}),$(".top").hide(),$(window).scroll(function(){100<$(this).scrollTop()?$(".top").fadeIn():$(".top").fadeOut()}),$(".top").click(function(){return $("html ,body").animate({scrollTop:0},300),!1}),$("tbody").on("click",".cMinus",function(){var t=1*$(this).prev().val();50<=++t&&(t=50),$(this).prev().val(t),i($(this)),o()}),$("tr").on("click",".cPlus",function(){var t=1*$(this).next().val();--t<=0&&(t=1),$(this).next().val(t),i($(this)),o()}),$("tr").on("input",".Num",function(){$(this).val($(this).val()<=50?$(this).val():50),i($(this)),o()}),$("tr").on("click",".del",function(){$(this).next().css("display","block"),$("tr .confirm").on("click",function(){console.log($(this).parent().parent().parent().parent()),$(this).parent().parent().parent().parent().remove(),c(),o()})}),$(".che input").on("click","",function(){$(".che input:checked").size()==$(".che input").size()?($(".ano1 input").prop("checked",!0),$("th input").prop("checked",!0)):($(".ano1 input").prop("checked",!1),$("th input").prop("checked",!1)),o()}),$(".ano1 input").on("click",function(){if($(".ano1 input").prop("checked")){$("td input").prop("checked",!0);var t=$("tbody tr").prop("id");$.ajax({type:"post",url:"../api/del.php",data:{id:t},success:function(){}})}else $("td input").prop("checked",!1);o()}),$("th input").on("click",function(){if($("th input").prop("checked")){$("td input").prop("checked",!0),$(".ano1 input").prop("checked",!0);var t=$("tbody tr").prop("id");$.ajax({type:"post",url:"../api/del.php",data:{id:t},success:function(){}})}else $("td input").prop("checked",!1),$(".ano1 input").prop("checked",!1);o()});var e=[];function o(){e=[],$(".che input").each(function(t,n){if($(".che input").eq(t).prop("checked")){e.push(t),$(".che input").eq(t).parent().parent().css("background","#fdf0ef");var i=$("tbody tr").prop("id");$.ajax({type:"post",url:"../api/del.php",data:{id:i},success:function(){}})}else $(".che input").eq(t).parent().parent().css("background","#ffffff")});var n=0,i=0;e.forEach(function(t){n+=1*$(".Num").eq(t).val(),i+=1*$(".subtotal").eq(t).text().slice(1)}),$(".allnum").html("商品数量总计："+n+"件"),$(".allnum1").html("包装数量总计："+n+"件"),$(".all").html("商品金额总计（不含税金和运费）：<strong>"+i.toFixed(2)+"</strong>")}if($(".ano2").on("click",function(){console.log(e.length);for(var t=e.length-1;0<=t;t--)console.log(e[t]),$("tbody tr").eq(e[t]).remove();console.log(e),e=[],console.log(e),c(),o()}),window.localStorage.username){var a=window.localStorage.username;$(".user").html(a)}else $(".user").click(function(){window.location="../html/login.html"})});