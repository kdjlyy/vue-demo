import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI, { Table } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 解决 ElTable 自动宽度高度导致的「ResizeObserver loop limit exceeded」问题
const fixElTableErr = table => {
  const oldResizeListener = table.methods.resizeListener
  table.methods.resizeListener = function () {
    window.requestAnimationFrame(oldResizeListener.bind(this))
  }
}

// 一定要在Vue.use之前执行此函数
fixElTableErr(Table)

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
