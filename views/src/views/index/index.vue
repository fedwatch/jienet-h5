<template>
    <div id="indexPage">
        <!--<top></top>-->

        <search></search>
        <banner></banner>
        <feature></feature>
        <promo></promo>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import tabbar from '../../component/common/tabbar.vue';
    import feature from '../../component/index/feature.vue';
    import banner from '../../component/index/banner.vue';
    import promo from '../../component/index/promo.vue';
    import search from '../../component/index/search.vue';

//    import top from '../../component/index/top.vue';

    export default {
        data(){
            return{

            }
        },
        components:{
//            top,

            search,
            tabbar,
            feature,
            banner,
            promo,
        }
    }
</script>
<style>

</style>


