<template>
	<div class="container">
		<van-image
		  width="100%"
		  fit="cove"
		  :src="require('../assets/img/news1.jpg')"
		/>
		<div class="news-list">
			<van-tabs v-model="active">
			  <van-tab :title="item.type" v-for="item in newList" :key='item.id'>
				  <div class="item" v-for="item1 in item.content" :key='item1.id'>
					  <a :href="item1.url">{{item1.title}}</a><div class="date">{{item1.date}}</div>
				  </div>
			  </van-tab>
			</van-tabs>
		</div>
		<div class="notice">
			<van-notice-bar
			  left-icon="volume-o"
			  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
			/>
		</div>
	</div>
</template>

<script>
	import {newsData} from '@/util/data.js'
	export default {
		name:'news',
		data(){
			return {
				newList:newsData,
				active: 0,
			}
		},
		created() {
			console.log(this.newList);
		}
	}
</script>

<style scoped>
	.news-list{
		padding: 20px;
	}
	.news-list .item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:10px;
	}
	.news-list .item a{
		display: block;
		width: 200px;
		color: #666;
		font-size: 14px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.news-list .item .date{
		color: #333;
		width: 80px;
		font-size: 14px;
		text-align: right;
	}
	.notice{
		padding: 20px 0;
	}
</style>
