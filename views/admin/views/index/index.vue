<template>
    <div id="indexPage">
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

    export default {
        data(){
            return{}
        },
        components:{
            tabbar,
            feature,
            banner,
            promo,
        }
    }
</script>
<style>

</style>


