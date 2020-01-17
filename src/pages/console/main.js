import Vue from 'vue'
import App from './App.vue'
// import router from './router'

// import VueWechatTitle from "vue-wechat-title"

// vue-wechat-title插件是为了解决ios系统下的标题不能被document.title=xxx方式修改
// 路由中： meta: { title: ""}
// 建议全局只使用一次该指令 不要多处使用  标题可用vuex或router中定义  v-wechat-title
// Vue.use(VueWechatTitle);


Vue.config.productionTip = false

new Vue({
//   router,
  render: h => h(App)
}).$mount('#app')
