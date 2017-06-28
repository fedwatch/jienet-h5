<template>
    <div id="search">
        <mt-search v-model="value">
            <mt-cell
                    v-for="item in result"
                    :title="item.title"
                    :value="item.value">
            </mt-cell>
        </mt-search>

        <tabbar></tabbar>
    </div>
</template>

<script>
    import tabbar from '../../component/common/tabbar.vue';

    export default {
        data(){
            return{

            }
        },
        components:{
            tabbar,
        }
    }
</script>

<style>

</style>