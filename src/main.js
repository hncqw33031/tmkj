import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
Vue.config.productionTip = false
import '@/assets/css/index.css'
//引入轮播组件


// 引入vant组件
import { Icon } from 'vant';
import { Popup } from 'vant';
import { Image as VanImage } from 'vant';
import { Tab, Tabs } from 'vant';
import { NoticeBar } from 'vant';
import { Grid, GridItem } from 'vant';


// 全局注册
Vue.use(Icon).use(Popup).use(VanImage).use(Tab).use(Tabs).use(NoticeBar).use(Grid).use(GridItem);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
