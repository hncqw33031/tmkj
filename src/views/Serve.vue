<template>
	<div class="container">
		<van-image width="100%" fit="cove" :src="require('../assets/img/contact-bg.jpg')" />
		<!-- 我们的服务 -->
		<div class="serve">
			<h2>我们的服务</h2>
			<p class="title">
				专注互联人才服务
			</p>
			<ul>
				<li>
					<div class="content">
						<h3>企业设计服务</h3>
						<p>一对一专业需求分析、品牌定位、规划交互方案，提高设计效率，降低设计成本，设计师拥有多年团队设计经验和个人设计经验，一对一设计对接快速响应，专注耐心，经验丰富。根据企业的产品和品牌营销需求融入视觉美学和设计章法而设计，按时交稿，及时沟通，满意为止。</p>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>企业互联网咨询服务</h3>
						<p>专属技术顾问为企业提供免费诊断，APP定制开发、小程序公众号微商城开发、电商设计、界面设计等这些问题都可以来咨询我们，我们为您诊断企业原有的设计开发问题，专业团队给出建议和新方案解决企业问题。我们秉承帮助客户就是帮助自己的原则，鼎力相助。</p>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>企业研发服务</h3>
						<p>具备多行业研发经验，打造一站式服务，系统的技术能力支持可为企业全业务流程或节点项目，提供IT互联网技术外包服务（包括应急需求）；帮助企业解决技术瓶颈、提升研发效率、保障业务增长。</p>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>企业技术人才培养输送服务</h3>
						<p>基于丰富的IT人才资源库与灵活高效的人才供应机制，可为企业提供灵活的IT人力分配方案，提供完美契合企业不同阶段不同业务的IT专业人才。多年人才外包服务和人才实训经验，经过数个实际项目考验，IT解决技术持续迭代与升级，为企业提供智能的「人才培养」和「人才匹配」服务，Talents as a Service（人才即服务）模式。</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 服务流程 -->
		<div class="flow">
			<h2>IT人才服务流程</h2>
			<p class="title">来自各个大厂的IT人才</p>
			<van-image width="100%" fit="cove" :src="require('../assets/img/flow.png')" />
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
		<van-notice-bar
		 class='bottom'
		  left-icon="volume-o"
		  text="我们不是万能，但没有我们却万万不能。"
		/>
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
	import {
		newsData
	} from '@/util/data.js'
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
				newsList: []
			}
		},
		created() {
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				console.log(newsData);
				let arr = newsData
				let newArr = []
				let num = 0
				arr.forEach(item => {
					let content = item.content
					for (let i = 0; i < content.length; i++) {
						if (content[i].important && num < 6) {
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
	.container {
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

	/* 我们的服务 */
	.serve {
		padding: 20px;
	}

	.serve ul li {
		height: 200px;
		margin: 10px 0;
		border-radius: 10px;
		background-size: contain;
		overflow: hidden;
	}

	.serve ul li:nth-child(1) {
		background-image: url(../assets/img/serves/1.jpg);
	}

	.serve ul li:nth-child(2) {
		background-image: url(../assets/img/serves/2.jpg);
	}
	.serve ul li:nth-child(3) {
		background-image: url(../assets/img/serves/3.jpg);
	}
	.serve ul li:nth-child(4) {
		background-image: url(../assets/img/serves/4.jpg);
	}
	.serve ul li .content {
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.serve ul li:nth-child(1) .content {
		background-image: linear-gradient(rgba(0, 203, 132, 0), rgba(0, 203, 132, 1) 60%);
	}

	.serve ul li:nth-child(2) .content {
		background-image: linear-gradient(rgba(45, 175, 255, 0), rgba(45, 175, 255, 1) 60%);
	}
	
	.serve ul li:nth-child(3) .content {
		background-image: linear-gradient(rgba(77, 111, 255, 0), rgba(77, 111, 255, 1) 60%);
	}
	
	.serve ul li:nth-child(4) .content {
		background-image: linear-gradient(rgba(0, 191, 186, 0), rgba(0, 191, 186, 1) 60%);
	}

	.serve ul li .content h3 {
		font-size: 20px;
		font-weight: 500;
	}

	.serve ul li .content p {
		font-size: 14px;
	}
	/* 流程 */
	.flow{
		padding: 20px;
	}
	/* 案例 */
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
	.bottom{
		margin: 20px 0;
	}
</style>
