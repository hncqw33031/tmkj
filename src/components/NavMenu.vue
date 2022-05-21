<template>
	<div class="container">
		<div class="btn" @click="showPopup">
			<van-icon name="wap-nav" />
		</div>
		<img src="../assets/img/logo.png" alt="">
		<!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
		<van-popup v-model="show" position="top"  class='popup' closeable >
			<div class="header"></div>
			<div class="content">
				<div class="c-item" v-for="item in navList"  @click="jumpTo(item)">
					<van-icon :name="item.icon" />{{item.name}}
				</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
	// @ is an alias to /src
	export default {
		name: 'Main',
		data() {
			return {
				msg: '头部',
				show:false,
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
			showPopup(){
				console.log(111);
				this.show=true
			},
			jumpTo(item){
				this.show=false
				this.$router.push(item.path)
				console.log(item);
			}
		}
	}
</script>
<style scoped="scoped">
	.popup{
		height: 200px;
	}
	.container{
		height: 80px;
		background-color: #fff;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 150px;
		box-shadow: 0px 0px 10px 1px #ccc;
		width: 100%;
		position: fixed;
		z-index: 999;
		text-align: center;
		line-height: 80px;
	}
	.container img{
		width: 150px;
	}
	.container .btn{
		position: absolute;
		left: 0;
		width: 80px;
		height: 80px;
		font-size: 28px;
		font-weight: 100;
		text-align: center;
		line-height: 80px;
		color: #666s;
	}
	.container .popup .header{
		height: 80px;
		background-color: #fff;
		background-image: url(../assets/img/logo.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: 150px;
		width: 100%;
	}
	.container .popup .content .c-item{
		line-height: 20px;
		font-size: 16px;
		margin: 10px;
		float: left;
	}
	.container .popup .content .c-item i{
		font-size: 20px;
	}
	.container .popup .content .c-item a{
		color: #666;
	}
	.container .popup .content .c-item.active{
		color: #ff4500;
	}
</style>
