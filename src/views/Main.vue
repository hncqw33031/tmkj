<template>
	<div class="home">
		<NavMenu></NavMenu>
		<div class="content">
			<keep-alive>
				<router-view ref='routerView'></router-view>
			</keep-alive>
		</div>
		<WebMessage></WebMessage>
	</div>
</template>

<script>
	// @ is an alias to /src
	import NavMenu from '@/components/NavMenu.vue'
	import WebMessage from '@/components/WebMessage.vue'
	export default {
		name: 'Main',
		components: {
			NavMenu,
			WebMessage
		}
	}
</script>
<style scoped="scoped">
	.home{
		width: 100%;
		overflow: hidden;
	}
	.content {
		padding-top: 80px;
	}
</style>
