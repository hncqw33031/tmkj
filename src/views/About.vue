<template>
	<div class="container">
		<van-image width="100%" fit="cove" :src="require('../assets/img/contact-bg.jpg')" />
		<!-- 关于我们 -->
		<div class="about">
			<h2>关于我们</h2>
			<p class="title">
				不忘初心 砥砺前行
			</p>
			<ul>
				<li>
					<div class="content">
						<h3>不忘初心，方得始终</h3>
						<p>长沙天码教育科技有限公司是由IT行业精英发起创办的创新型互联网科技公司。公司始终专注于高端网站建设、系统开发、微信开发、IDC服务、互联网人才服务等业务。</p>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>我们的价值</h3>
						<p>近十年的项目经验，以及良好的服务意识，天码科技为每一位客户量身定制集“品牌策略+客户咨询+项目规划+创意执行运用+互联网人才培养”为一体的解决方案，从而使客户的商业目的得以实现</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 服务客户 -->
		<div class="serve">
			<h2>服务客户</h2>
			<p class="title">
				客户至上,服务周到
			</p>
			<van-grid :border="false" :column-num="4" >
			  <van-grid-item v-for="item in serveList" :key="item.id">
			    <van-image :src="item.img" />
			  </van-grid-item>
			</van-grid>
		</div>
		<van-notice-bar
		 class='bottom'
		  left-icon="volume-o"
		  text="唯有落实顾客至上的观念，才能使服务的品质日渐提开，客户方能真正成为我们的永久支持者。"
		/>
	</div>
</template>

<script>
	import {
		serveList
	} from '@/util/data.js'
	export default {
		name: 'news',
		data() {
			return {
				serveList,
			}
		},
		created() {
			console.log(serveList);
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

	.about {
		padding: 20px;
	}

	.about ul li {
		height: 200px;
		margin: 10px 0;
		border-radius: 10px;
		background-size: contain;
		overflow: hidden;
	}

	.about ul li:nth-child(1) {
		background-image: url(../assets/img/about-first.jpg);
	}

	.about ul li:nth-child(2) {
		background-image: url(../assets/img/about-worth.jpg);
	}

	.about ul li .content {
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.about ul li:nth-child(1) .content {
		background-image: linear-gradient(rgba(0, 203, 132, 0), rgba(0, 203, 132, 1) 80%);
	}

	.about ul li:nth-child(2) .content {
		background-image: linear-gradient(rgba(45, 175, 255, 0), rgba(45, 175, 255, 1) 80%);
	}

	.about ul li .content h3 {
		font-size: 20px;
		font-weight: 500;
	}

	.about ul li .content p {
		font-size: 14px;
	}

	.serve {
		padding: 20px;
	}
	.bottom{
		margin: 20px 0;
	}
</style>
