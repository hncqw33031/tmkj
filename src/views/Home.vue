<template>
	<div class="container">
		<!-- 轮播图 -->
		<div class="banner">
			<swiper ref="mySwiper" :options="swiperOptions">
				<swiper-slide>
					<img src="../assets/img/banner1.jpg">
				</swiper-slide>
				<swiper-slide>
					<img src="../assets/img/banner2.jpg">
				</swiper-slide>
				<swiper-slide>
					<img src="../assets/img/banner3.jpg">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<!-- 关于我们 -->
		<div class="about">
			<h2>一站式互联网企业服务平台</h2>
			<p class="title">快速了解天码科技 很高兴认识你</p>
			<ul>
				<li>
					<div class="pic">
						<img src="../assets/img/about1.png">
					</div>
					<div class="text">
						<h3>视觉设计和创意</h3>
						<p>网站交互设计 、图标设计、移动应用UI、ICON设计、DM广告、平面媒体、VI全套设计、广告宣传VI、企业LOGO报</p>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../assets/img/about2.png">
					</div>
					<div class="text">
						<h3>视觉设计和创意</h3>
						<p>APP定制开发 小程序开发，公众号开发，微商城开发，H5定制开发服务系统定制开发 提供OA，ERP，CRM等系统</p>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../assets/img/about3.png">
					</div>
					<div class="text">
						<h3>视觉设计和创意</h3>
						<p>软件测试类、软件开发类、设计类、数据标注、企业IT运维、数据中心运维等IT人才服务</p>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="../assets/img/about4.png">
					</div>
					<div class="text">
						<h3>视觉设计和创意</h3>
						<p>微传单、游戏互动营销、微信H5推广、商务营销PPT、电商店铺装修、产品包装、网站广告</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 条纹 -->
		<div class="stripe">
			<ul>
				<li>
					<h3>541</h3>
					<p>新增企业用户</p>
				</li>
				<li>
					<h3>192</h3>
					<p>经典案例</p>
				</li>
				<li>
					<h3>12</h3>
					<p>涉及行业</p>
				</li>
				<li>
					<h3>220</h3>
					<p>用户答疑</p>
				</li>
			</ul>
		</div>
		<!-- 案例 -->
		<div class="case">
			<h2>品牌设计案例展示</h2>
			<p class="title">用视觉讲述企业的故事</p>
			<ul>
				<li v-for="(item,index) in images" @click="showPic(index)" :key="index">
					<!-- <img :src="item" style="width: 100%;"> -->
					<van-image fit="cover" :src="item" />
				</li>
			</ul>
		</div>
		<!-- 优势 -->
		<div class="advantage">
			<h2>天码科技服务优势</h2>
			<p class="title">细心做产品 用心做服务</p>
			<ul class="top">
				<li class="ad-item1">
					<div class="icon"></div>
					<h3>用户体验好</h3>
					<p>优质的界面</p>
				</li>
				<li class="ad-item2">
					<div class="icon"></div>
					<h3>安全性好</h3>
					<p>数据加密</p>
				</li>
				<li class="ad-item3">
					<div class="icon"></div>
					<h3>拓展性强</h3>
					<p>可升级嵌入</p>
				</li>
			</ul>
			<ul class="bottom">
				<li class="ad-item4">
					<div class="icon"></div>
					<h3>性价比高</h3>
					<p>实用兼低价</p>
				</li>
				<li class="ad-item5">
					<div class="icon"></div>
					<h3>个性化定制</h3>
					<p>按需开发</p>
				</li>
				<li class="ad-item6">
					<div class="icon"></div>
					<h3>服务贴心</h3>
					<p>一对一服务</p>
				</li>
			</ul>
		</div>
		<!-- 行业资讯-->
		<div class="news">
			<h2>行业资讯</h2>
			<p class="title">掌握一手资讯，走在行业前沿</p>
			<ul>
				<li v-for="item in newsList" :key="item.id">
					<a :href="item.url">{{item.title}}</a>
					<div class="date">{{item.date}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	import {
		ImagePreview
	} from 'vant';
	import {newsData} from '@/util/data.js'
	export default {
		name: 'home',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				banners: ['../assets/img/banner1.jpg', '../assets/img/banner2.jpg', '../assets/img/banner3.jpg'],
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true,
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: true
					},
					// Some Swiper option/callback...
				},
				images: [
					require("../assets/img/case1.png"),
					require("../assets/img/case2.png"),
					require("../assets/img/case3.png"),
					require("../assets/img/case4.png"),
					require("../assets/img/case5.png"),
					require("../assets/img/case6.png"),
					require("../assets/img/case7.png")
				],
				newsList:[]
			}
		},
		created() {
			this.getNewsList()
		},
		methods: {
			getNewsList(){
				console.log(newsData);	
				let arr = newsData
				let newArr = []
				let num = 0
				arr.forEach(item=>{
					let content = item.content
					for (let i = 0; i < content.length; i++) {
						if(content[i].important&&num<6){
							newArr.push(content[i]),
							num++
						}
					}
				})
				this.newsList = newArr
			},
			showPic(index) {
				ImagePreview({
					images: this.images,
					startPosition: index,
					closeable: true
				})
			}
		}
	}
</script>

<style scoped>
	.banner img {
		width: 100%;
	}

	.about {
		padding: 20px;
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

	.about ul li {
		display: flex;
		padding: 20px 0;
		border: 1px solid #ccc;
		/* background-color: #19233a; */
		background-image: url(../assets/img/stripe.jpg);
	}

	.about ul li .pic {
		text-align: center;
		padding: 10px;
	}

	.about ul li .pic img {
		width: 50px;
	}
	.about ul li .text {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.about ul li .text h3{
		font-size: 16px;
		color: #eee;
	}

	.about ul li .text p {
		font-size: 12px;
		color: #ddd;
	}

	.stripe {
		background-image: url(../assets/img/stripe.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		height: 100px;
	}

	.stripe ul {
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.stripe ul li {
		color: #fff;
		text-align: center;
	}

	.stripe ul li h3 {
		font-size: 22px;
	}

	.stripe ul li p {
		font-size: 12px;
	}

	.case {
		padding: 20px;
		background-color: #eee;
	}

	.case ul {
		height: 160px;
	}

	.case ul::after {
		content: '';
		display: block;
		clear: both;
	}

	.case ul li {
		width: 20%;
		height: 50%;
		float: left;
	}

	.case ul li>>>.van-image {
		height: 100%;
	}

	.case ul li:nth-child(1) {
		width: 40%;
		height: 100%;
	}
	.advantage{
		padding: 20px;
	}
	.advantage ul.top,.advantage ul.bottom{
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}
	.advantage ul li{
		width: 110px;
		height: 110px;
		/* border: 1px solid #000; */
		box-sizing: border-box;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content:center;
		align-items: center;
		background-color: #efefef;
		color: #1f324c;
	}
	.advantage ul .ad-item1{
		border-radius: 60px 60px 0 60px;
	}
	.advantage ul .ad-item2{
		border-radius: 60px 60px 0 0px;
	}
	.advantage ul .ad-item3{
		border-radius: 60px 60px  60px 0;
	}
	.advantage ul .ad-item4{
		border-radius: 60px 0 60px  60px;
	}	
	.advantage ul .ad-item5{
		border-radius:  0px 0 60px 60px;
	}
	.advantage ul .ad-item6{
		border-radius:0 60px 60px  60px;
	}
	.advantage ul li div.icon{
		width: 50px;
		height: 50px;
		background-image: url(../assets/img/icon.png);
		background-size: cover;
	}
	.advantage ul .ad-item2 div.icon{
		background-position: -55px 0;
	}
	.advantage ul .ad-item3 div.icon{
		background-position: -110px 0;
	}
	.advantage ul .ad-item4 div.icon{
		background-position: -165px 0;
	}	
	.advantage ul .ad-item5 div.icon{
		background-position: -220px 0;
	}
	.advantage ul .ad-item6 div.icon{
		background-position: -278px 0;
	}
	.advantage ul li h3{
		margin: 5px 0;
		font-size: 14px;
		color: #666;
		font-weight: 600;
	}
	.advantage ul li p{
		font-size: 12px;
	}
	/* 新闻资讯 */
	.news {
		padding: 20px;
	}
	.news ul li{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		border-bottom: 1px dashed  #e94719;
	}
	.news ul li a{
		color: #333;
		display: block;
		width: 60%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>
