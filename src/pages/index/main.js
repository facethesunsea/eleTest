import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { Icon, Swipe, SwipeItem, Grid, GridItem, Button, Tab, Tabs, Cell, CellGroup, Overlay, Loading } from 'vant';

Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Grid).use(GridItem);
Vue.use(Button);
Vue.use(Tab).use(Tabs);
Vue.use(Cell).use(CellGroup);
Vue.use(Overlay);
Vue.use(Loading);

// axios  在utils/request导入
// better-scroll  在components/Scroll里使用

// 在main.js中引入并初始化
// import FastClick from 'fastclick'; // 引入
// FastClick.attach(document.body);  // 使用


// 引入animate.css
import animated from 'animate.css';
Vue.use(animated);



// 导入icons里面的index.js文件
import '../../icons';
// 导入scss文件
import '../../styles/index.scss'

//test 引入mockjs
import '../../../mock'

import MyPlugin from '@/utils/preventMove.js';
Vue.use(MyPlugin);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
