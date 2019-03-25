
  $(function () {


        var url = decodeURI(location.search).slice(1);
        $.ajax({
            type: 'post',
            url: '../api/details.php',
            data: {
                id: url
            },
            success: function (str) {


                var arr = JSON.parse(str);
                var res = arr.map(function (item) {
                    //渲染数据
                    return ` <div class="content">
                    <div class="main-h">
                        <p>
                            <a>首页</a>&gt;
                            <a>彩妆香氛</a>&gt;
    
                            <a>香水</a>&gt;
                            <a>女士香水</a>
                            &gt;
    
                            <!--显示商品品牌-->
                            <a title="古驰" target="_blank">古驰</a>&gt;
    
                            <a>${item.shopname}</a>
                        </p>
                    </div>
                    <div class="main-m clearfix">
                        <div class="main-l1">
                            <div class="main-l">
    
                                <div class="imglist">
                                    <ul>
                                        <li><img src="${item.img1}" alt="">
                                            <i class="act"></i>
                                        </li>
                                        <li><img src="${item.img1}">
                                            <i></i>
                                        </li>
                                        <li><img src="${item.img2}">
                                            <i></i></li>
                                        <li><img src="${item.img3}">
                                            <i></i></li>
                                    </ul>
                                </div>
                                <div class="imgpart">
                                    <div class="pic">
                                        <img src="${item.img1}" alt="">
                                        <div class="magnify"></div>
                                    </div>
                                    <div class="bigpic">
                                        <img src="${item.img1}" alt="">
                                    </div>
    
                                </div>
    
                            </div>
                            <div class="share_box ">
                                <span class="sh1">
                                    <i></i><a>正品保障</a>
                                </span>
                                <span class="sh2">
                                    <i></i><a>七天退换</a>
                                </span>
                                <span class="sh3">
                                    <i></i><a>权威质检</a>
                                </span>
                                <span class="sh4">
                                    <i></i><a>分享</a>
                                </span>
                                <span class="sh5">
                                    <i></i><a>收藏商品</a>
                                </span>
    
                            </div>
                        </div>
                        <div class="main-r">
    
                            <div class="proName">
                                <h2>${item.shopname}</h2>
                                <h3 id="subHeadSpan"></h3>
                            </div>
                            <div class="proDetails">
                                <div class="prolist">
                                    <span>寺库价</span>
                                    <div class="money">¥ <strong>${item.money}</strong></div>
                                </div>
                                <div class="prolist">
                                    <span>发货地</span>
                                    <div class="pd"> <span class="changdi">${item.changdi}</span> 有货
                                        预计<b>5-10</b>个工作日内送达</div>
    
                                </div>
                                <div class="prolist">
                                    <span>温馨提示</span>
                                    <span class="text">本商品无质量问题不支持退换货</span>
                                </div>
    
                                <div class="prolist">
                                    <span>商品信息</span>
                                    <span class="text">自营</span>
                                </div>
    
    
                            </div>
    
                            <div class="proList">
                                <span class="pdt">购买数量</span>
                                <div class="counum">
                                    <a id="minus"></a>
                                    <input type="text" value="1" id="Number">
                                    <a id="plus"></a>
                                </div>
                            </div>
                            <div class="pro">
                                <div class="progost fl">
                                    <img src="../img/az.png" alt="">
                                    <p>微信扫码下单更优惠</p>
                                </div>
                                <a  class="cl1 fl"></a>
                                <a  class="cl2 fl">
                                    <i class="li1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main-m1 clearfix">
                        <div class="main-m1-l fl">
                            <h3>大家都在买</h3>
                            <div class="showLeftCon showLeftCon02" id="togetherBuy">
                                <ul>
                                    <li class="clearfix">
                                        <div class="sPic fl"><img
                                                src="http://pic11.secooimg.com/product/50/50/98/50/b2208ad49e0346ac8c3b2f2a36cc5354.jpg"
                                                style="display: inline;" width="50" height="50"></div>
                                        <div class="sbox fr">
                                            <div class="sName">APPLE/苹果 iPhone X 64GB 苹果X 移动联通电信4G 手机 全网通【12期分期免息】</div>
                                            <div class="sPri"><strong><span class="rmb">¥</span>6,299</strong></div>
                                        </div><a></a>
                                    </li>
                                    <li class="clearfix">
                                        <div class="sPic fl"><img
                                                src="http://pic11.secooimg.com/product/50/50/10/10/ed7cc6eab01b44faa811e6f7af9d9bbb.jpg"
                                                style="display: inline;" width="50" height="50"></div>
                                        <div class="sbox fr">
                                            <div class="sName">Fendi /芬迪 佘诗曼同款 女士出街百搭色小牛皮小怪兽金属铆钉装饰气质单肩斜挎链条包</div>
                                            <div class="sPri"><strong><span class="rmb">¥</span>8,879</strong></div>
                                        </div><a target="_blank"></a>
                                    </li>
                                    <li class="clearfix">
                                        <div class="sPic fl"><img
                                                src="http://pic11.secooimg.com/product/50/50/97/50/a2a06955b75c4930b048a48f53a24d56.jpg"
                                                style="display: inline;" width="50" height="50"></div>
                                        <div class="sbox fr">
                                            <div class="sName">Pinko 品高 19春夏 女士小牛皮金属双燕标识链条单肩包斜挎包</div>
                                            <div class="sPri"><strong><span class="rmb">¥</span>1,099</strong></div>
                                        </div><a></a>
                                    </li>
                                    <li class="clearfix">
                                        <div class="sPic fl"><img
                                                src="http://pic11.secooimg.com/product/50/50/49/10/1f7ce3fb5ca04dadb14ca58179fc7dd6.jpg"
                                                style="display: inline;" width="50" height="50"></div>
                                        <div class="sbox fr">
                                            <div class="sName">LONGINES/浪琴手表心月系列女士石英腕表L8.109.9.78.2watch全球联保</div>
                                            <div class="sPri"><strong><span class="rmb">¥</span>20,133</strong></div>
                                        </div><a target="_blank"></a>
                                    </li>
                                    <li class="clearfix">
                                        <div class="sPic fl"><img
                                                src="http://pic11.secooimg.com/product/50/50/57/10/9d75188f95994132b3df617d6bd3f381.jpg"
                                                style="display: inline;" width="50" height="50"></div>
                                        <div class="sbox fr">
                                            <div class="sName">Calvin Klein 男士皮质礼盒装短款钱包 79220</div>
                                            <div class="sPri"><strong><span class="rmb">¥</span>424</strong></div>
                                        </div><a target="_blank"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="main-m1-r fl">
                            <div class="main-m1-r1">
                                <div class="main-m1-r-h">
                                    <ul class="selist">
                                        <li>商品详情</li>
                                        <li class="li1" >
                                            <a class="join"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="main-m1-r-m">
                                    <img src="../img/369Z.png">
                                </div>
                            </div>
    
    
                            <div class="main-m1-r2">
                                <div class="main-m1-r-h1">
                                    <ul id="ullist">
                                        <li class="lis" id="conm">商品详情</li>
                                        <li id="conm2">同品牌评价（3586）</li>
                                    </ul>
                                </div>
                                <div class="main-m1-r-m1">
                                    <div class="dc_score clearfix">
                                        <div class="fl zhpf">综合评分</div><i class>|</i>
                                        <div class="fl star_d" id="commentSumCore"><span class="star4"><em
                                                    style="width:100%;"></em></span><i><b>5.0</b> / 5.0</i></div>
                                        <div class="fr">
                                            <a class="pl_btn_red" id="fbcomment" target="_blank">发表评价</a>
                                        </div>
                                    </div>
    
                                    <div class="dc_c_pl">
                                        <ul class="dc_c_t clearfix">
                                            <li class="on"><a href="javascript:void(0);" id="allCommentCount">全部（82）</a>
                                            </li>
                                            <li class=""><a href="javascript:void(0);" id="allImgCommentCount">有图评价（7）</a>
                                            </li>
                                        </ul>
                                        <div class="dc_list" id="comment_show">
                                            <dl>
                                                <dt>
                                                    <p><img src="http://pic12.secooimg.com/home/detail/tx.jpg" width="50"
                                                            height="50"></p>
                                                    <p class="name">L***3</p>
                                                </dt>
                                                <dd>
                                                    <div class="pl_detail">
                                                        <div class="d_pf clearfix">
                                                            <div class="fl star_x"><span class="star4"><em
                                                                        style="width:100%;"></em></span>5.0</div>
                                                            <div class="fr"> 2018/07/10 01:45:17 </div>
                                                        </div>
                                                        <div class="d_cont">一闻就是典型迪奥型。 味持久。前期比较浓
                                                            之前爱马仕大地的就比较淡。相对来说就是味浓持久。不过还是一直喜欢迪奥的香水</div>
                                                        <div class="pl_photos">
                                                            <div class="share_icon comment_share" style="display:none;">
                                                                <span class="share_t"><a href="###"><i></i>分享（0）</a></span>
                                                                <div class="bdsharebuttonbox share_c" data-tag="share_1"
                                                                    onclick="shareComment(1137708, this)"> <a
                                                                        class="bds_tsina" data-cmd="tsina"></a> <a
                                                                        class="bds_sqq" data-cmd="sqq"></a> <a
                                                                        class="bds_qzone" data-cmd="qzone" href="#"></a>
                                                                </div>
                                                            </div> <span class="pl_dianzan pl_dianzan1"
                                                                onclick="clickPraise(1137708,0);"><i></i><span
                                                                    id="praiseCount_1137708">（0）</span><em
                                                                    id="praise_1137708"
                                                                    style="display:none"><span></span>一个评价只能点一次赞哟!</em></span>
    
                                                            <p class="pl_goodsxx"></p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p><img src="http://pic12.secooimg.com/home/detail/tx.jpg" width="50"
                                                            height="50"></p>
                                                    <p class="name" title="Jd11928647776">Jd11928647776</p>
                                                </dt>
                                                <dd>
                                                    <div class="pl_detail">
                                                        <div class="d_pf clearfix">
                                                            <div class="fl star_x"><span class="star4"><em
                                                                        style="width:100%;"></em></span>5.0</div>
    
                                                        </div>
                                                        <div class="d_cont">不错。男朋友喜欢</div>
                                                        <div class="pl_photos">
                                                            <div class="share_icon comment_share" style="display:none;">
                                                                <span class="share_t"><a href="###"><i></i>分享（0）</a></span>
                                                                <div class="bdsharebuttonbox share_c" data-tag="share_1"
                                                                    onclick="shareComment(1752528, this)"> <a
                                                                        class="bds_tsina" data-cmd="tsina"></a> <a
                                                                        class="bds_sqq" data-cmd="sqq"></a> <a
                                                                        class="bds_qzone" data-cmd="qzone" href="#"></a>
                                                                </div>
                                                            </div> <span class="pl_dianzan pl_dianzan1"
                                                                onclick="clickPraise(1752528,0);"><i></i><span
                                                                    id="praiseCount_1752528">（0）</span><em
                                                                    id="praise_1752528"
                                                                    style="display:none"><span></span>一个评价只能点一次赞哟!</em></span>
    
                                                            <p class="pl_goodsxx"></p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p><img src="http://pic12.secooimg.com/home/detail/tx.jpg" width="50"
                                                            height="50"></p>
                                                    <p class="name">l***1</p>
                                                </dt>
                                                <dd>
                                                    <div class="pl_detail">
                                                        <div class="d_pf clearfix">
                                                            <div class="fl star_x"><span class="star4"><em
                                                                        style="width:100%;"></em></span>5.0</div>
    
                                                        </div>
                                                        <div class="d_cont">挺好的，物流也快。收到了很开心</div>
                                                        <div class="pl_photos">
                                                            <div class="share_icon comment_share" style="display:none;">
                                                                <span class="share_t"><a href="###"><i></i>分享（0）</a></span>
                                                                <div class="bdsharebuttonbox share_c" data-tag="share_1"
                                                                    onclick="shareComment(1748848, this)"> <a
                                                                        class="bds_tsina" data-cmd="tsina"></a> <a
                                                                        class="bds_sqq" data-cmd="sqq"></a> <a
                                                                        class="bds_qzone" data-cmd="qzone" href="#"></a>
                                                                </div>
                                                            </div> <span class="pl_dianzan pl_dianzan1"
                                                                onclick="clickPraise(1748848,0);"><i></i><span
                                                                    id="praiseCount_1748848">（0）</span><em
                                                                    id="praise_1748848"
                                                                    style="display:none"><span></span>一个评价只能点一次赞哟!</em></span>
    
                                                            <p class="pl_goodsxx"></p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p><img src="http://pic12.secooimg.com/home/detail/tx.jpg" width="50"
                                                            height="50"></p>
                                                    <p class="name" title="ilovemusf">ilovemusf</p>
                                                </dt>
                                                <dd>
                                                    <div class="pl_detail">
                                                        <div class="d_pf clearfix">
                                                            <div class="fl star_x"><span class="star4"><em
                                                                        style="width:100%;"></em></span>5.0</div>
    
                                                        </div>
                                                        <div class="d_cont">质量不错哦，好用的话再买一瓶。</div>
                                                        <div class="pl_photos">
                                                            <div class="share_icon comment_share" style="display:none;">
                                                                <span class="share_t"><a href="###"><i></i>分享（0）</a></span>
                                                                <div class="bdsharebuttonbox share_c" data-tag="share_1"
                                                                    onclick="shareComment(1747118, this)"> <a
                                                                        class="bds_tsina" data-cmd="tsina"></a> <a
                                                                        class="bds_sqq" data-cmd="sqq"></a> <a
                                                                        class="bds_qzone" data-cmd="qzone" href="#"></a>
                                                                </div>
                                                            </div> <span class="pl_dianzan pl_dianzan1"
                                                                onclick="clickPraise(1747118,0);"><i></i><span
                                                                    id="praiseCount_1747118">（0）</span><em
                                                                    id="praise_1747118"
                                                                    style="display:none"><span></span>一个评价只能点一次赞哟!</em></span>
    
                                                            <p class="pl_goodsxx"></p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p><img src="http://pic12.secooimg.com/home/detail/tx.jpg" width="50"
                                                            height="50"></p>
                                                    <p class="name" title="Vi15373946007">Vi15373946007</p>
                                                </dt>
                                                <dd>
                                                    <div class="pl_detail">
                                                        <div class="d_pf clearfix">
                                                            <div class="fl star_x"><span class="star4"><em
                                                                        style="width:100%;"></em></span>5.0</div>
    
                                                        </div>
                                                        <div class="d_cont">挺好的 是正品 老公很喜欢 已经推荐给朋友了</div>
                                                        <div class="pl_photos">
                                                            <div class="share_icon comment_share" style="display:none;">
                                                                <span class="share_t"><a href="###"><i></i>分享（0）</a></span>
                                                                <div class="bdsharebuttonbox share_c" data-tag="share_1"
                                                                    onclick="shareComment(1746054, this)"> <a
                                                                        class="bds_tsina" data-cmd="tsina"></a> <a
                                                                        class="bds_sqq" data-cmd="sqq"></a> <a
                                                                        class="bds_qzone" data-cmd="qzone" href="#"></a>
                                                                </div>
                                                            </div> <span class="pl_dianzan pl_dianzan1"
                                                                onclick="clickPraise(1746054,0);"><i></i><span
                                                                    id="praiseCount_1746054">（0）</span><em
                                                                    id="praise_1746054"
                                                                    style="display:none"><span></span>一个评价只能点一次赞哟!</em></span>
                                                            \
                                                            <p class="pl_goodsxx"></p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p><img src="http://pic12.secooimg.com/home/detail/tx.jpg" width="50"
                                                            height="50"></p>
                                                    <p class="name" title="xe12701861355">xe12701861355</p>
                                                </dt>
                                                <dd>
                                                    <div class="pl_detail">
                                                        <div class="d_pf clearfix">
                                                            <div class="fl star_x"><span class="star4"><em
                                                                        style="width:100%;"></em></span>5.0</div>
    
                                                        </div>
                                                        <div class="d_cont">味道是自己喜欢的味道</div>
                                                        <div class="pl_photos">
                                                            <div class="share_icon comment_share" style="display:none;">
                                                                <span class="share_t"><a href="###"><i></i>分享（0）</a></span>
                                                                <div class="bdsharebuttonbox share_c" data-tag="share_1"
                                                                    onclick="shareComment(1699346, this)"> <a
                                                                        class="bds_tsina" data-cmd="tsina"></a> <a
                                                                        class="bds_sqq" data-cmd="sqq"></a> <a
                                                                        class="bds_qzone" data-cmd="qzone" href="#"></a>
                                                                </div>
                                                            </div> <span class="pl_dianzan pl_dianzan1"
                                                                onclick="clickPraise(1699346,0);"><i></i><span
                                                                    id="praiseCount_1699346">（0）</span><em
                                                                    id="praise_1699346"
                                                                    style="display:none"><span></span>一个评价只能点一次赞哟!</em></span>
    
                                                            <p class="pl_goodsxx"></p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p><img src="http://pic12.secooimg.com/home/detail/tx.jpg" width="50"
                                                            height="50"></p>
                                                    <p class="name" title="xk6503940474">xk6503940474</p>
                                                </dt>
                                                <dd>
                                                    <div class="pl_detail">
                                                        <div class="d_pf clearfix">
                                                            <div class="fl star_x"><span class="star4"><em
                                                                        style="width:100%;"></em></span>5.0</div>
    
                                                        </div>
                                                        <div class="d_cont">收到货非常好用，还会继续购买</div>
                                                        <div class="pl_photos">
                                                            <div class="share_icon comment_share" style="display:none;">
                                                                <span class="share_t"><a href="###"><i></i>分享（0）</a></span>
                                                                <div class="bdsharebuttonbox share_c" data-tag="share_1"
                                                                    onclick="shareComment(1697730, this)"> <a
                                                                        class="bds_tsina" data-cmd="tsina"></a> <a
                                                                        class="bds_sqq" data-cmd="sqq"></a> <a
                                                                        class="bds_qzone" data-cmd="qzone" href="#"></a>
                                                                </div>
                                                            </div> <span class="pl_dianzan pl_dianzan1"
                                                                onclick="clickPraise(1697730,0);"><i></i><span
                                                                    id="praiseCount_1697730">（0）</span><em
                                                                    id="praise_1697730"
                                                                    style="display:none"><span></span>一个评价只能点一次赞哟!</em></span>
    
                                                            <p class="pl_goodsxx"></p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <dl>
                                                <dt>
                                                    <p><img src="http://pic12.secooimg.com/home/detail/tx.jpg" width="50"
                                                            height="50"></p>
                                                    <p class="name">阿***丫</p>
                                                </dt>
                                                <dd>
                                                    <div class="pl_detail">
                                                        <div class="d_pf clearfix">
                                                            <div class="fl star_x"><span class="star4"><em
                                                                        style="width:100%;"></em></span>5.0</div>
    
                                                        </div>
                                                        <div class="d_cont">。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</div>
                                                        <div class="pl_photos">
                                                            <div class="share_icon comment_share" style="display:none;">
                                                                <span class="share_t"><a href="###"><i></i>分享（0）</a></span>
                                                                <div class="bdsharebuttonbox share_c" data-tag="share_1"
                                                                    onclick="shareComment(1694944, this)"> <a
                                                                        class="bds_tsina" data-cmd="tsina"></a> <a
                                                                        class="bds_sqq" data-cmd="sqq"></a> <a
                                                                        class="bds_qzone" data-cmd="qzone" href="#"></a>
                                                                </div>
                                                            </div> <span class="pl_dianzan pl_dianzan1"
                                                                onclick="clickPraise(1694944,0);"><i></i><span
                                                                    id="praiseCount_1694944">（0）</span><em
                                                                    id="praise_1694944"
                                                                    style="display:none"><span></span>一个评价只能点一次赞哟!</em></span>
    
    
                                                            <p class="pl_goodsxx"></p>
                                                        </div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <div class="comment_page"><a href="javascript:void(0);" class="on">1</a><a
                                                    href="javascript:void(0);" onclick="pageComment(0,0,2)">2</a><a
                                                    href="javascript:void(0);"
                                                    onclick="pageComment(0,0,3)">3</a><span>...</span><a
                                                    href="javascript:void(0);" onclick="pageComment(0,0,11)">11</a><a
                                                    href="javascript:void(0);" onclick="pageComment(0,0,2)"
                                                    class="page_next">下一页</a></div>
                                        </div>
                                    </div>  
                                </div>
                            </div> 
                        </div>
                    </div>
    
                </div>`;
                }).join("");
                $('.main').html(res);

                $(function () {
                    var ulobj = $(".imglist ul");
                    var picimg = $(".imgpart .pic img");
                    var objimg = $(".imgpart .bigpic img");


                    ulobj.on("mouseenter", "li", function () {
                        console.log(ulobj);
                        var imgsrc = $(this).children("img").attr("src");
                        $(this).addClass("active").siblings().removeClass("active");
                        picimg.attr("src", imgsrc);
                        objimg.attr("src", imgsrc)
                    });
                    var pic = $(".imgpart .pic");
                    var magnify = $(".imgpart .pic .magnify");
                    magnify.hide();
                    var bigpic = $(".imgpart .bigpic");
                    var objimg = $(".imgpart .bigpic img");
                    pic.mousemove(function (e) {
                        magnify.show();
                        bigpic.show();
                        var pagex = e.pageX;
                        var pagey = e.pageY;
                        var pictop = pic.offset().top;
                        var picleft = pic.offset().left;
                        var magnifyw = magnify.width();

                        var magnifyh = magnify.height();
                        var magnifytop = pagey - pictop - magnifyh / 2;
                        var magnifyleft = pagex - picleft - magnifyw / 2;
                        var picw = pic.width() - magnifyw;


                        var pich = pic.height() - magnifyh;
                        magnifytop = magnifytop < 0 ? 0 : magnifytop;
                        magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
                        magnifytop = magnifytop > pich ? pich : magnifytop;
                        magnifyleft = magnifyleft > picw ? picw : magnifyleft;
                        magnify.css({
                            top: magnifytop,
                            left: magnifyleft
                        });
                        var minl = bigpic.width() - objimg.width();
                        var mint = bigpic.height() - objimg.height();
                        var objimgl = -magnifyleft * 2;
                        var objimgt = -magnifytop * 2;
                        objimgl = objimgl < minl ? minl : objimgl;
                        objimgt = objimgt < mint ? mint : objimgt;
                        objimg.css({
                            top: objimgt,
                            left: objimgl
                        })
                    });
                    pic.mouseleave(function () {
                        magnify.hide();
                        bigpic.hide()
                    })



                })


                $('#plus').click(function () {


                    var num = $(this).prev().val() * 1;


                    num++;


                    if (num >= 10) {
                        num = 10;

                    }

                    // console.log($(this).prev().val(num))
                    $(this).prev().val(num);
                    // console.log($(this).parent().parent().next());


                });
                //点击减

                $('#minus').on('click', function () {

                    // console.log($(this).next().val() * 1);
                    var num = $(this).next().val() * 1;
                    num--;

                    if (num <= 0) {
                        num = 1;
                    }
                    $(this).next().val(num);

                });


                $('#Number').on('input', function () {
                    $(this).val($(this).val() <= 50 ? $(this).val() : 50) //限制不能超过           

                });



                $('#ullist li').on("click", function () {
                    console.log($(this).offset().top);
                    var p = $(this).offset().top;
                    //点击当前的变高亮+排他
                    $(this)
                        .attr('class', 'lis')
                        .siblings()
                        .attr('class', '');


                    //内容跟着出来
                    // $('.main-m1-r-m .login-in')
                    //     .eq($(this)
                    //         .index())
                    //     .css('display', 'block')
                    //     .siblings()
                    //     .css('display', 'none')
                });















                //回到顶部
                $('.goback').css('opacity', '0'); //隐藏go to top按钮
                $(window).scroll(function () {
                    // console.log($(this).scrollTop());
                    //滚动距离
                    //当window的scrolltop距离大于1时，go to 
                    if ($(this).scrollTop() > 300) {
                        $('.goback').css('opacity', '1');
                    } else {
                        $('.goback').css('opacity', '0');
                    }
                });
                $('.top').click(function () {
                    $('html ,body').animate({
                        scrollTop: 0
                    }, 800);
                    return false;
                });
                var top = $('.selist').offset().top - 36;

                //回到吸顶菜单的初始位置
                $('.selist li').eq(0).click(function () {
                    $('html ,body').animate({
                        scrollTop: (0, top)
                    }, 800);
                    return false;
                })
                var top1 = $('#ullist').offset().top - 36;
                $('#ullist li').click(function () {
                    $('html ,body').animate({
                        scrollTop: (0, top1)
                    }, 800);
                    return false;
                });






                //吸顶菜单



                var a = $('.main-m1-r-h');
                var a1 = $('.main-m1-r-h1');
               var  b = a.offset().top;
               var  b1 = a1.offset().top;
                // console.log(a.offset().top);
                // console.log(scrollY)
                $(document).on('scroll', function () {

                    //超出一定距离隐藏吸顶菜单
                    if (window.scrollY > '8160') {

                        a.hide();

                    } else {
                        a.show();
                    }

                    if (window.scrollY > '9617') {
                        a1.hide();
                    } else {
                        a1.show();
                    }






                    if (window.scrollY >= b1) {
                        a1.css('position', 'fixed')
                            .css('top', '0px');
                    } else {
                        a1.css(
                            'position', 'relative',
                        ).css('top', '0px');
                    };



                    if (window.scrollY >= b) {
                        a.css('position', 'fixed')
                            .css('top', '0px');

                    } else {
                        a.css(
                            'position', 'relative',
                        ).css('top', '0px')
                    }

                });





                $('.cl1').on('click', function () {
                    // console.log($('#Number').val())//数量
                    var Num = $('#Number').val();
                    var url = location.href;
                    var changdi=$('.changdi').html();//场地
                    // console.log(changdi)

                    var str = url.split('?')[1]; //商品ID
                    // console.log(str)
                    $.ajax({
                        type: "POST",
                        url: '../api/gwc.php',
                        data: {
                            num: Num,
                            gid: str,
                            changdi:changdi
                        },
                        success: function (item) {
                            // console.log(item)

                        }


                    });



                    window.location.href='../html/shop.html';
                });





            }
        });
    });