<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
//    import tabbar from './component/common/tabbar.vue'

    export default {
        name: 'app',
        data () {
            return {
                msg:{title: 'Welcome to Your Vue.js App'},
                visible: false
            }
        },
        components: {
//            tabbar,
        }
    }
</script>

<style>
    *{
        margin:0;
        padding:0;
        border:0;
    }

    .text-center {
        text-align: center;
    }

    .pull-left {
        float: left;
    }

    .pull-right {
        float: right;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: " ";
    }

    .clearfix:after {
        clear: both;
    }

    html,body{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body{
        font-family: "Helvetica Neue", Helvetica, sans-serif;
        font-size: .85rem;
        line-height: 1.5;
        color: #3d4145;
        background: #eee;
    }

    #app {
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0;
    }

    a{
        color: #0894ec;
        text-decoration: none;
    }


    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }

    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
