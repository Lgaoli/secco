"use strict";!function(c){var d={e:"idcode",codeType:{name:"follow",len:4},codeTip:"换一换",inputID:"verif"},l={storeLable:"codeval",store:"#ehong-code-input",codeval:"#ehong-code"};function o(e){c.extend(d,e)}function i(e,o){var n=c(l.codeval).get(0);if(!o)return c.data(n,e);c.data(n,e,o)}function n(e,o,n){var t=function(e,o){var n;n="follow"==e?function(e){for(var o="",n=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"),t=0;t<e;t++){var r=Math.floor(Math.random()*n.length);o+=r%2==0?n[r].toLowerCase():n[r]}return o}(o):"calc"==e?function(e){for(var o,n,t,r=new Array("0","1","2","3","4","5","6","7","8","9"),a=0;a<e;a++)t=Math.floor(Math.random()*r.length),o+=r[t],t=Math.floor(Math.random()*r.length),n+=r[t];return[parseInt(o),parseInt(n),parseInt(o)+parseInt(n)]}(o):"";return n}(d.codeType.name,d.codeType.len),r=Math.floor(6*Math.random()),a="";d.inputID||(a='<span><input id="ehong-code-input" type="text" maxlength="4" /></span>'),a+='<div id="ehong-code" class="ehong-idcode-val ehong-idcode-val',a+=String(r),a+='" href="#" onblur="return false" onfocus="return false" oncontextmenu="return false" onclick="$.idcode.setCode()">'+function(e){for(var o,n=new Array,t=new Array("#BF0C43","#E69A2A","#707F02","#18975F","#BC3087","#73C841","#780320","#90719B","#1F72D8","#D6A03C","#6B486E","#243F5F","#16BDB5"),r=0;r<e.length;r++)o=Math.floor(Math.random()*t.length),n.push('<font color="'+t[o]+'">'+e.charAt(r)+"</font>");return n.join("")}(t)+'</div><span id="ehong-code-tip-ck" class="ehong-code-val-tip" onclick="$.idcode.setCode()">'+d.codeTip+"</span>",c(e).html(a),i(l.storeLable,t)}c.idcode={getCode:function(e){return o(e),i(l.storeLable,null)},setCode:function(e){o(e),n("#"+d.e,d.codeType.name,d.codeType.len)},validateCode:function(e){return o(e),(d.inputID?c("#"+d.inputID).val():c(l.store).val()).toUpperCase()==i(l.storeLable,null).toUpperCase()?(c(".user-error").css({color:"#58bc58"},{"font-size":"14px","font-weight":"600"}),"验证码正确！"):(n("#"+d.e,d.codeType.name,d.codeType.len),c(".user-error").css({color:"red"},{"font-size":"14px","font-weight":"600"}),"验证码错误！")}}}(jQuery);