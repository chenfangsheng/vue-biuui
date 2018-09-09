<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			<ul>
				<li v-for="(item, i) in 200" :key='i'>{{'item---' + i}}</li>
			</ul>
			
			<biu-backtop></biu-backtop>
			
			<biu-backtop right='1.5rem' iconColor='#19be6b' name='top'></biu-backtop>
			
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
li{
	padding: .2rem .3rem;
	font-size: .3rem;
	color: #666;
}
</style>