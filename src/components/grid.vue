<template>
	<biu-layout>
		<biu-body slot='body'>
			<biu-grid-wrap :rows='2' title="等分2列">
				<biu-grid-item v-for="(item,index) in 4" :key='index'>
					<span>{{'item' + index}}</span>
				</biu-grid-item>
			</biu-grid-wrap>
			
			<biu-grid-wrap :rows='3' :line='false' title="等分3列（无边框）">
				<biu-grid-item v-for="(item,index) in 6" :key='index'>
					<span>{{'item' + index}}</span>
				</biu-grid-item>
			</biu-grid-wrap>
			
			<biu-grid-wrap :rows='4' title="等分4列">
				<biu-grid-item v-for="(item,index) in 8" :key='index'>
					<biu-icon name='select'></biu-icon>
					<p>{{'item' + index}}</p>
				</biu-grid-item>
			</biu-grid-wrap>
			
			<biu-grid-wrap :rows='5' title="等分5列">
				<biu-grid-item v-for="(item,index) in 10" :key='index'>
					<span>{{'item' + index}}</span>
				</biu-grid-item>
			</biu-grid-wrap>
			
			<biu-grid-wrap :rows='6' :line='false' title="等分6列（无边框）">
				<biu-grid-item v-for="(item,index) in 12" :key='index'>
					<span>{{'item' + index}}</span>
				</biu-grid-item>
			</biu-grid-wrap>
			
			<h5 class="biu-remarks">END</h5>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	
}	
</script>

<style lang="scss" scoped>
.iconfont{
	font-size: .4rem;
}
</style>