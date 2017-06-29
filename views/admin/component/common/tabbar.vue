<template>
    <div id="tabbar">
        <mt-tabbar v-model="selected" :fixed="true">
            <mt-tab-item id="index">
                <!--<img slot="icon" src="../../assets/images/nav-home.png"-->
                      <!--@click="handleByIndex()" class="icon home " :class="{'active':this.selected}" >-->
                <span slot="icon"  @click="handleByIndex()" class="icon home" :class="{'active':this.selected}" ></span>
                首页
            </mt-tab-item>

            <mt-tab-item id="category">
                <!--<img slot="icon" src="../../assets/images/nav-category.png">-->
                <span slot="icon"  class="icon category" :class="{'active':this.selected}" ></span>
                分类
            </mt-tab-item>

            <mt-tab-item id="cart">
                <!--<img slot="icon" src="../../assets/images/nav-cart.png">-->
                <span slot="icon"  class="icon cart" :class="{'active':this.selected}" ></span>
                购物车
            </mt-tab-item>

            <mt-tab-item id="dashboard">
                <!--<img slot="icon" src="../../assets/images/nav-user.png">-->
                <span slot="icon"  class="icon user" :class="{'active':this.selected}" ></span>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import config from '../../constants/config';
    export default {
        data(){
            return {
                selected: false
            }
        },
        mounted(){
            console.log(this.selected)
        },
        completed(){
            console.log(config)
        },
        methods: {
            handleByIndex() {
                this.selected = true;
                console.log(this.selected)

            }
        }
    }
</script>

<style>
    a.mint-tab-item {
        color: #929292;
    }
    a.mint-tab-item.is-selected{
        color: #eb4c1e!important;
    }
    a.mint-tab-item > div.mint-tab-item-icon > .icon{
        width:1.5rem;
        height:1.5rem;
        overflow: hidden;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon.home{
        background: url(../../assets/images/nav-home.png) no-repeat;
        background-size:100%;
    }
    a.mint-tab-item.is-selected > div.mint-tab-item-icon > .icon.home.active{
        background: url(../../assets/images/nav-home-active.png) no-repeat;
        background-size:100%;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon.category{
        background: url(../../assets/images/nav-category.png) no-repeat;
        background-size:100%;
    }
    a.mint-tab-item.is-selected > div.mint-tab-item-icon > .icon.category.active{
        background: url(../../assets/images/nav-category-active.png) no-repeat;
        background-size:100%;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon.cart{
        background: url(../../assets/images/nav-cart.png) no-repeat;
        background-size:100%;
    }
    a.mint-tab-item.is-selected > div.mint-tab-item-icon > .icon.cart.active{
        background: url(../../assets/images/nav-cart-active.png) no-repeat;
        background-size:100%;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon.user{
        background: url(../../assets/images/nav-user.png) no-repeat;
        background-size:100%;
    }
    a.mint-tab-item.is-selected > div.mint-tab-item-icon > .icon.user.active{
        background: url(../../assets/images/nav-user-active.png) no-repeat;
        background-size:100%;
    }
</style>




