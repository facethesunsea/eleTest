import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        meta: {
            title: 'console 登录'
        },
        component: ()=>import(/* webpackChunkName: "consoleT" */ './Test/index.vue')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})