<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>

			<div class="biu-public-pd">
				<h5 class="biu-remarks">普通示例</h5>
				<biu-badge>默认</biu-badge>
				<biu-badge bgColor='rgb(45, 183, 245)'>12</biu-badge>
				<biu-badge bgColor='rgb(60, 197, 30)'>423</biu-badge>
				<biu-badge bgColor='rgb(255, 153, 0)'>new</biu-badge>

				<h5 class="biu-remarks">缩放示例</h5>
				<biu-badge bgColor='rgb(45, 183, 245)' scale='.8'>1</biu-badge>
				<biu-badge bgColor='rgb(60, 197, 30)' scale='1'>1</biu-badge>
				<biu-badge bgColor='rgb(255, 153, 0)' scale='1.2'>1</biu-badge>
			</div>
			
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">

</style>