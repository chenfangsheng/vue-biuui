<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			
			<div class="biu-public-pd">
				<biu-button size='large' type='primary' @click.native='show = true'>不带关闭（默认）</biu-button>
				<biu-button size='large' type='success' @click.native='show1 = true'>带关闭</biu-button>
			</div>
			
			<biu-actionsheet v-model='show' :list='list'></biu-actionsheet>
			<biu-actionsheet v-model='show1' :list='list' cancel='关闭'></biu-actionsheet>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			show1: false,
			list: [
				{
					text: '选项一',
					callback: (item) => {
						console.log(item);
					}
				},
				{
					text: '选项二',
					stay: false,
					callback: (item) => {
						console.log(item);
					}
				}
			]
		}
	}
}
</script>

<style lang="scss">

</style>