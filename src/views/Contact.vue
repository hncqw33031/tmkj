<template>
	<div class="container">
		<van-image
		  width="100%"
		  fit="cove"
		  :src="require('../assets/img/contact-bg.jpg')"
		/>
		<div class="office">
			<h2>联系我们</h2>
			<p class="title">
				携手并进 共创辉煌
			</p>
			<div class="off-item" v-for="item in officeList" :key="item.id">
				<div class="img">
					<van-image
					  width="100%"
					  fit="cove"
					  :src="item.img"
					/>
				</div>
				<div class="content">
					<h3>{{item.name}}</h3>
					<p>{{item.addres}}</p>
					<p>{{item.email}}</p>
					<p>{{item.phone}}</p>
					<p><a :href="item.url">{{item.url}}</a></p>
				</div>
			</div>
		</div>
		<van-notice-bar
		 class='bottom'
		  left-icon="volume-o"
		  text="宝剑锋从磨砺出，梅花香自苦寒来.没有成功是一蹴而就的,让我们不忘初心,砥砺前行。"
		/>
	</div>
</template>

<script>
	import {officeList} from '@/util/data.js'
	export default {
		name:'news',
		data(){
			return {
				officeList,
			}
		},
		created() {
			console.log(officeList);
		}
	}
</script>

<style scoped>
	.container{
		padding-top: 20px;
	}
	h2 {
		font-size: 18px;
		color: #333;
		text-align: center;
		margin-bottom: 10px;
	}
	
	p.title {
		font-size: 14px;
		color: #ccc;
		text-align: center;
		margin-bottom: 10px;
	}
	.office {
		padding: 20px;
	}
	.office .off-item {
		margin:  20px 0;
		box-shadow: 0px 0px 4px 1px #e94719,10px 10px 2px 1px rgba(233,71,25,.2) ,11px 11px 5px 1px rgba(233,71,25,.2);
		overflow: hidden;
	}
	.office .off-item .img{
		width: 40%;
		padding: 10px;
		float: left;
		box-sizing: border-box;
	}
	.office .off-item .content{
		width: 60%;
		padding: 10px;
		float: left;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}
	.office .off-item .content h3{
		font-size: 14px;
	}
	.office .off-item .content p{
		font-size: 12px;
	}
	.office .off-item .content a{
		color: red;
	}
	.bottom{
		margin: 30px 0;
	}
</style>
