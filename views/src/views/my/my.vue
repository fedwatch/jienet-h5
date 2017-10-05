<template>
    <div id="my">
        <mt-header title="多个按钮" :fixed="true">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
                <mt-button @click="handleClose">关闭</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!--Form Components-->
        <!--带显示内容-->
        <mt-switch v-model="value">开关</mt-switch>
        <mt-switch v-model="value"></mt-switch>

        <!--Radio-->
        <!--基本用法-->
        <mt-radio
                title="单选框列表"
                v-model="value"
                :options="['选项A', '选项B', '选项C']">
        </mt-radio>
        <!--设置禁用选项-->
        <mt-radio
                title="单选框列表"
                v-model="value"
                :options="options">
        </mt-radio>

        <!--单选框右对齐-->
        <mt-radio
                align="right"
                title="右对齐"
                v-model="value"
                :options="options">
        </mt-radio>

        <!--Field-->
        <!--基础用法-->
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
        <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
        <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
        <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>

        <!--设置校验状态-->
        <mt-field label="邮箱" state="success" v-model="email"></mt-field>
        <mt-field label="邮箱" state="error" v-model="email"></mt-field>
        <mt-field label="邮箱" state="warning" v-model="email"></mt-field>

        <!--自定义内容（例如添加验证码）-->
        <mt-field label="验证码" v-model="captcha">
            <img src="/assets/100x100.png" height="45px" width="100px">
        </mt-field>



        <!--Badge-->
        <!--指定尺寸-->
        <mt-badge size="small">30</mt-badge>
        <mt-badge size="normal">10</mt-badge>
        <mt-badge size="large">10</mt-badge>

        <!--指定类型-->
        <mt-badge type="primary">30</mt-badge>
        <mt-badge type="error">10</mt-badge>
        <mt-badge type="success">10</mt-badge>
        <mt-badge type="warning">10</mt-badge>

        <!--指定颜色-->
        <mt-badge size="small" color="#888">自定义颜色</mt-badge>


        <!--CSS Components-->
        <!--固定在页面顶部-->
        <mt-header fixed title="固定在顶部"></mt-header>
        <!--设置 left 或 right slot-->
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!--设置多个按钮-->
        <mt-header title="多个按钮">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
                <mt-button @click="handleClose">关闭</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <!--Tabbar-->
        <!--搭配 tab-container 组件使用-->
        <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖">
                <img slot="icon" src="/assets/100x100.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="/assets/100x100.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="/assets/100x100.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="/assets/100x100.png">
                我的
            </mt-tab-item>
        </mt-tabbar>

        <!--Navbar-->
        <!--搭配 tab-container 组件使用-->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>


        <!--Button-->
        <!--改变颜色-->
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        <!--改变大小-->
        <mt-button size="small">small</mt-button>
        <mt-button size="large">large</mt-button>
        <mt-button size="normal">normal</mt-button>
        <!--禁用按钮-->
        <mt-button disabled>disabled</mt-button>
        <!--幽灵按钮-->
        <mt-button plain>plain</mt-button>
        <!--带图标-->
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>
        <!--自定义图标-->
        <mt-button>
            <img src="/assets/100x100.png" height="20" width="20" slot="icon">
            带自定义图标
        </mt-button>
        <!--绑定 click 事件-->
        <mt-button @click.native="handleClick">点击触发 handleClick</mt-button>

        <!--Cell-->
        <!--基础用法-->
        <mt-cell title="标题文字"></mt-cell>
        <mt-cell title="标题文字" value="说明文字"></mt-cell>

        <!--可点击的链接-->
        <mt-cell
                title="标题文字"
                to="//github.com"
                is-link
                value="带链接">
        </mt-cell>

        <!--带图标-->
        <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>

        <!--带自定义图标-->
        <mt-cell title="标题文字">
            <span>icon 是图片</span>
            <img slot="icon" src="/assets/100x100.png" width="24" height="24">
        </mt-cell>

        <!--自定义内容-->
        <mt-cell title="标题文字" is-link>
            <span style="color: green">这里是元素</span>
        </mt-cell>

        <!--带备注信息-->
        <mt-cell title="标题" label="描述信息" is-link></mt-cell>

        <!--Cell Swipe-->
        <!--增加右滑动按钮-->
        <mt-cell-swipe
                title="标题文字" :right="[
            {
              content: 'Delete',
              style: { background: 'red', color: '#fff' },
              handler: () => this.$messagebox('delete')
            }
        ]"></mt-cell-swipe>

        <!--Spinner-->
        <!--指定类型-->
        <mt-spinner type="snake"></mt-spinner>
        <mt-spinner type="double-bounce"></mt-spinner>
        <mt-spinner type="triple-bounce"></mt-spinner>
        <mt-spinner type="fading-circle"></mt-spinner>

        <!-- 或者接受传入类型的序号 -->
        <mt-spinner :type="0"></mt-spinner>
        <mt-spinner :type="1"></mt-spinner>
        <mt-spinner :type="2"></mt-spinner>
        <mt-spinner :type="3"></mt-spinner>

        <!--指定颜色-->
        <mt-spinner color="#26a2ff"></mt-spinner>
        <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
        <mt-spinner color="yellow"></mt-spinner>

        <!--指定尺寸-->
        <mt-spinner :size="60"></mt-spinner>

        <!--tab-container-->
        <!--改变 ative 的值，与 <tab-container-item> 的 id 一致即显示对应页面。-->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab-container1">
                <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
                <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
                <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>

        <!--Search-->
        <!--基础用法-->
        <mt-search v-model="value"></mt-search>
        <!--设置显示文字-->
        <mt-search
                v-model="value"
                cancel-text="取消"
                placeholder="搜索">
        </mt-search>
        <!--带搜索结果-->
        <mt-search v-model="value" :result.sync="result"></mt-search>
        <!--自定义搜索结果-->
        <mt-search v-model="value">
            <mt-cell
                    v-for="item in result"
                    :title="item.title"
                    :value="item.value">
            </mt-cell>
        </mt-search>


        <!--Loadmore-->
        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
            <ul>
                <li v-for="item in list">{{ item }}</li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>

        <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
            <li v-for="item in list">{{ item }}</li>
        </ul>

        <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
        </mt-actionsheet>
        <!--Popup-->
        <mt-popup
                v-model="popupVisible"
                position="bottom">
            ...
        </mt-popup>

        <!--Swipe-->

        <!--基础用法-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <!--隐藏 indicators-->
        <mt-swipe :show-indicators="false">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <!--取消自动播放-->
        <mt-swipe :auto="0">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <!--轮播图切换时会触发 change 事件，参数为切入轮播图的索引-->
        <mt-swipe @change="handleChange">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
<!--Lazy load-->
        <div id="container">
            <ul>
                <li v-for="item in list">
                    <img v-lazy.container="item">
                </li>
            </ul>
        </div>

        <!--Range-->
        <mt-range
                v-model="rangeValue"
                :min="10"
                :max="90"
                :step="10"
                :bar-height="5">
            <div slot="start">0</div>
            <div slot="end">100</div>
        </mt-range>

        <!--Progress-->
        <mt-progress :value="60" :bar-height="5">
            <div slot="start">0%</div>
            <div slot="end">100%</div>
        </mt-progress>
    </div>

</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    completed(){
        new Toast({
            message: '操作成功',
            iconClass: 'icon icon-success'
        });
    },
    methods:{
        handleTopChange(status) {
            this.topStatus = status;
        },
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
        },
        handleChange(index) {
            console.log(index)
        }
    }
}
</script>

<style>

</style>