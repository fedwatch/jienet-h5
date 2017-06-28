<template>
    <div id="promo">
        <div id="category" class="shop-index">
            <div class="shop-cate">
                <div class="active-t">
                    <div class="act-left" style="float:left;">
                        <a href="https://jie.net/static/dragonboat0522/wap/dragonboat.html#item1" >
                            <img    src="../../assets/images/index9.png"/>
                            <div class="zero-gift">
                                <div class="gift-font">新人0元礼</div>
                                <div class="check-act"><a href="javascript:;">点击查看活动详情</a></div>
                            </div>
                        </a>
                    </div>
                    <div class="act-right" style="float:left;">
                        <div class="act-a">
                            <a href="https://jie.net/static/dragonboat0522/wap/dragonboat.html#item3" >
                                <img    src="../../assets/images/index7.png"/>
                                <div class="zero-gift">
                                    <div class="zongzi">粽情粽意</div>
                                    <div class="zong-price">端午特价</div>
                                </div>
                            </a>
                        </div>
                        <div class="act-a">
                            <a href="https://jie.net/static/dragonboat0522/wap/dragonboat.html#item2" >
                                <img    src="../../assets/images/index8.png"/>
                                <div class="zero-gift-two">
                                    <div class="seckill-area">秒杀专区</div>
                                    <div class="ut-price-goods">降价商品，限时秒杀</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="active-b">

                    <div class="pull-left b-img">
                        <div class="bt-img">
                            <a href="javascript:void(0);" class="external" data-id="2503">
                                <div>
                                    <img  class="lazy"  src="https://static.jie.net/group1/M00/55/F7/rBAB4FkdYCuIJQwNAAA1JICL3dUAAAAHwLMptIAADU8927.jpg" style="height:203px;"/>
                                    <!--<div class="tipIm"><span class="plunge">直降</span></div>-->
                                </div>
                                <div style="padding:0 0.75rem;">
                                    <div style="font-size:0.667rem;">Mellower Coffee 麦隆咖啡 经典系列 甜香</div>
                                    <div>
                            <span style="font-size:0.425rem;color:#ff0000;">￥<span
                                    style="font-size:0.85rem;">28.00</span></span>
                                        <span style="font-size:0.425rem;color:#999999; margin-left:0.75rem;">已有<span>40</span>人购买</span>
                                    </div>
                                </div>

                            </a>
                        </div>
                    </div>
                    <div class="pull-right b-img">
                        <div class="bt-img">
                            <a href="javascript:void(0);" class="external" data-id="2499">
                                <div class="clearfix" style="line-height:1.2rem;">
                                    <img  class="lazy" src="https://static.jie.net/group1/M00/55/F7/rBAB31kdXLqIZnNFAAKInQsl6coAAAAHwKQKu0AAoi1245.jpg"  style="height:203px;"/>
                                    <!--<div class="tipIm"><span class="plunge">0元购</span></div>-->
                                </div>
                                <div style="padding:0 0.75rem;">
                                    <div style="font-size:0.667rem;">马来西亚进口 舒米勒特浓白咖啡</div>
                                    <div class="clearfix">
                            <span style="font-size:0.425rem;color:#ff0000;">￥<span
                                    style="font-size:0.85rem;">35</span></span>
                                        <span style="font-size:0.425rem;color:#999999;margin-left:0.75rem;">已有<span>16</span>人购买</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .shop-index {
        width: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
        align-content: space-between;
        -webkit-align-content: space-between;
        flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
    }

    .active-b{
        /*display: flex;*/
        /*align-items: center;*/
        /*flex-direction: row;*/
    }

    .shop-index .shop-img {
        width: 50%;
    }

    .shop-index .shop-img {
        padding: 0 0.25rem;
        background: #f7f7f7;
    }

    .shop-index .shop-img .shop-link {
        width: 100%;
        border-radius: 1rem;
    }

    .shop-index .shop-img .shop-link img {
        width: 100%;
        padding: 0 .255rem;
    }
    .shop-index .shop-cate .active-t{
        margin:0.5rem 0;
        height:9.1rem;
    }
    .shop-index .shop-cate .active-t .act-left{
        position:relative;
        width:40%;
        height:100%;
    }
    .shop-index .shop-cate .active-t  .zero-gift{
        position:absolute;
        top:0.75rem;
        left:0.75rem;
    }
    .shop-index .shop-cate .zero-gift .gift-font{
        font-size:0.789rem;
        color:#fff;
    }
    .shop-index .shop-cate .zero-gift .check-act{
        font-size:0.607rem;
        color:#fff;
    }
    .shop-index .shop-cate .zero-gift .zongzi{
        font-size:0.789rem;
        color:#386d09;
    }
    .shop-index .shop-cate .zero-gift .zong-price{
        font-size:0.607rem;
        color:#000;
    }
    .shop-index .shop-cate .zero-gift-two{
        position:absolute;
        top:5.25rem;
        left:0.75rem;
    }
    .shop-index .shop-cate .zero-gift-two .seckill-area{
        font-size:0.789rem;
        color:#000;
    }
    .shop-index .shop-cate .zero-gift-two .ut-price-goods{
        font-size:0.607rem;
        color:#000;
    }
    .shop-index .shop-cate .zero-gift .check-act a{
        color:#fff;
    }
    .shop-index .shop-cate .active-t .act-right{
        position:relative;
        width:60%;
        height:100%;
    }
    .shop-index .shop-cate .active-t .act-left img,
    .shop-index .shop-cate .active-t .act-right img{
        width:100%;
        height:100%;
    }
    .shop-index .shop-cate .b-img{
        width:49%;
        background-color:#fff;
        margin-bottom:60px;
    }
    .shop-index .shop-cate .b-img .bt-img{

        position:relative;
        width:100%;
    }
    .shop-index .shop-cate  .b-img .tipIm{
        position:absolute;
        width:2.55rem;
        height:2.55rem;
        top:0;
        left:0;
        color:#fff;
        font-size:0.607rem;
        background:url("../../assets/images/index10.png");
        background-size:100% 100%;
    }
    .shop-index .shop-cate  .b-img .plunge{
        margin-left:0.2rem;
        margin-top:0.2rem;
        display:inline-block;
    }
    .shop-index .shop-cate .b-img .bt-img img{
        width:100%;
    }
    .shop-index .shop-cate .act-a{
        height:50%;
    }
    .shop-index .shop-cate .act-a img{
        height:100%;
    }
</style>