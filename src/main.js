import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// axios  在utils/request导入
// better-scroll  在components/Scroll里使用

// 在main.js中引入并初始化
import FastClick from 'fastclick'; // 引入
FastClick.attach(document.body);  // 使用

// VueLazyload
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload);

// MintUI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';  //单独引入
Vue.use(MintUI);

// animate.css
import animated from 'animate.css';
Vue.use(animated);


// import BScroll from "better-scroll";
// Vue.use(BScroll);

// 导入icons里面的index.js文件
import './icons';
// 导入scss文件
import './styles/index.scss'

//test 引入mockjs
import './../mock'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
