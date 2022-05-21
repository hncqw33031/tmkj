import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)
// 全局路由(无需嵌套上左右整体布局)


const mainRoutes = {
	path: '/',
	component: () => import('./views/Main'),
	children: [
		//主页
		{
			path: '/',
			name: 'Home',
			alias: '/home',
			component: () => import('./views/Home')
		},
		//关于我们
		{
			path: '/about',
			name: 'About',
			component: () => import('./views/About')
		},
		//服务咨询
		{
			path: '/serve',
			name: 'Serve',
			component: () => import('./views/Serve')
		},
		//新闻列表
		{
			path: '/news',
			name: 'News',
			component: () => import('./views/News')
		},
		//联系我们
		{
			path: '/contact',
			name: 'Contact',
			component: () => import('./views/Contact')
		},
	]
}



const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    mainRoutes
  ]
})
