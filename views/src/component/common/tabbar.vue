<template>
    <div id="tabbar">
        <mt-tabbar v-model="selected" :fixed="true">
            <mt-tab-item id="index">
                <!--<router-link to="/" tag="ps">-->
                     <span slot="icon" @click="gotoAddress('/')" class="icon home"
                           :class="{'active':this.selected}"></span>
                    首页
                <!--</router-link>-->
            </mt-tab-item>

            <mt-tab-item id="category">
                <span slot="icon" @click="gotoAddress('/category')" class="icon category" :class="{'active':this.selected}"></span>
                分类
            </mt-tab-item>

            <mt-tab-item id="cart">
                <span slot="icon" @click="gotoAddress('/cart')" class="icon cart" :class="{'active':this.selected}"></span>
                购物车
            </mt-tab-item>

            <mt-tab-item id="my">
                <span slot="icon" @click="gotoAddress('/my')" class="icon user" :class="{'active':this.selected}"></span>
                我的
            </mt-tab-item>

        </mt-tabbar>
    </div>
</template>

<script>
    import config from '../../constants/config';
    function show(x){
        console.log(x)
    }
    export default {
        data(){
            return {
                selected: false
            }
        },
        mounted(){
            console.log(this.selected)
            show(localStorage)
        },
        completed(){

//            console.log(config)
        },
        methods: {
            handleByIndex() {
                this.selected = true;
                console.log(this.selected)

            },
            gotoAddress(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style>
    .linkText {
        color: #666;
        text-decoration: none;
    }

    a.mint-tab-item {
        color: #929292;
    }

    a.mint-tab-item.is-selected {
        color: #eb4c1e !important;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon {
        width: 1.5rem;
        height: 1.5rem;
        overflow: hidden;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon.home {
        background: url(/assets/images/nav-home.png) no-repeat;
        background-size: 100%;
    }

    a.mint-tab-item.is-selected > div.mint-tab-item-icon > .icon.home.active {
        background: url(/assets/images/nav-home-active.png) no-repeat;
        background-size: 100%;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon.category {
        background: url(/assets/images/nav-category.png) no-repeat;
        background-size: 100%;
    }

    a.mint-tab-item.is-selected > div.mint-tab-item-icon > .icon.category.active {
        background: url(/assets/images/nav-category-active.png) no-repeat;
        background-size: 100%;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon.cart {
        background: url(/assets/images/nav-cart.png) no-repeat;
        background-size: 100%;
    }

    a.mint-tab-item.is-selected > div.mint-tab-item-icon > .icon.cart.active {
        background: url(/assets/images/nav-cart-active.png) no-repeat;
        background-size: 100%;
    }

    a.mint-tab-item > div.mint-tab-item-icon > .icon.user {
        background: url(/assets/images/nav-user.png) no-repeat;
        background-size: 100%;
    }

    a.mint-tab-item.is-selected > div.mint-tab-item-icon > .icon.user.active {
        background: url(/assets/images/nav-user-active.png) no-repeat;
        background-size: 100%;
    }
</style>




