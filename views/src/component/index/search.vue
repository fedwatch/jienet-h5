<template>
    <div>
        <!--首页商品点击搜索-->
        <nav class="bar-flat bar-tab" style="position: absolute;top:0;left:0;">
            <header class="header-index blackBg">
                <div class="fix_nav">
                    <div class="nav-left"><img src="/assets/images/jie-logo.png"/></div>
                    <div class="navbar-search right-search">
                        <router-link to="/search" class="form-control external">
                            {{data.title}}
                        </router-link>
                    </div>
                </div>
            </header>
        </nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                data:{title: '搜索时下折扣商品'},
            }
        },
    }
</script>

<style>
    /* 首页头部搜索 */
    .header-index {
        position: fixed;
        top: 20px;
        left: 0;
        width: 100%;
        z-index: 99;
    }

    .blackBg {
        background: rgba(0, 0, 0, 0.6);
    }

    .header-index .nav-left {
        position: absolute;
        left: 0.5em;
        top: 10px;
        width: 3rem;
        display: block;
    }

    .header-index .nav-left img {
        width: 100%;
    }

    .header-index .navbar-search {
        margin-left: 4rem;
        margin-right: 0.5rem;
    }

    .header-index .right-search .form-control {
        color: #fffcfc;
        /*width: 100%;*/
        height: 30px;
        line-height: 30px;
        margin: 10px 0 10px;
        border: 0;
        border-radius: 1rem;
        display: block;
        background: #998586 url(/assets/images/search.png) no-repeat 0.3rem center;
        padding-left: 2.5em;
        background-size: 1.6em;
        font-size: .65rem;
        text-align: left;
    }
</style>