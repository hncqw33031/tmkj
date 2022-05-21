<template>
  <div class="container">
	  <div class="header">
		  天青色等烟雨,而我在等你
	  </div>
	<div class="nav">
		<div class="nav-item" v-for="item in navList" @click="jumpTo(item)"><span>{{item.name}}</span><van-icon name="arrow" /></div>
	</div>
	<div class="ba">
		<p>©2022 天码科技 版权所有　湘ICP备19018386号-2</p>
		<p>技术支持：岳麓区分公司 天心区分公司</p>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Main',
  data(){
	  return {
		  navList:[
		  	{
		  		name:'首页',
		  		path:'Home',
		  		icon: 'wap-home-o'
		  	},
		  	{
		  		name:'服务资讯',
		  		path:'Serve',
		  		icon: 'service-o'
		  	},
		  	{
		  		name:'新闻资讯',
		  		path:'News',
		  		icon: 'newspaper-o'
		  	},
		  	{
		  		name:'关于我们',
		  		path:'About',
		  		icon: 'friends-o'
		  	},
		  	{
		  		name:'联系我们',
		  		path:'Contact',
		  		icon: 'contact'
		  	}
		  ]
	  }
  },
  methods:{
  	jumpTo(item){
  		this.show=false
  		this.$router.push(item.path)
  		console.log(item);
  	}
  }
}
</script>
<style scoped>
	.container{
		background-color: #000000;
		/* height: 300px; */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.container .header{
		border-bottom: 1px solid #eee;
		padding: 10px;
		font-size: 16px;
		color: #eee;
	}
	.container .nav{
		font-size: 16px;
		color: #eee;
		border-bottom: 1px solid #eee;
	}
	.container .nav .nav-item{
		padding:10px 20px;
		display: flex;
		justify-content: space-between;
	}
	.container p{
		font-size: 16px;
		color: #eee;
		text-align: center;
		margin: 10px 0;
	}
</style>
