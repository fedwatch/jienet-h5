import Vue from 'vue';
import App from './App.vue';

// import Element from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

import tabbar from './component/common/tabbar.vue'
import indexPage from './views/index/index.vue'


//开启debug模式
Vue.config.debug = true;

Vue.use(Mint);
// Vue.use(Element);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: indexPage
        },
        {
            path: '/first',
            component: tabbar
        },
    ]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
}).$mount('#app')
