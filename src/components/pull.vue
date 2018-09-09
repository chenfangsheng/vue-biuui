<template>
	<biu-layout>
		<biu-body slot='body'>

			<biu-list-wrap title='下拉刷新&上拉加载'>
        <biu-list-cell type='router' :href='{path: "/pulldown"}' arrow>
					<span slot='left'>pulldown</span>
				</biu-list-cell>
				<biu-list-cell type='router' :href='{path: "/pullup"}' arrow>
					<span slot='left'>pullup</span>
				</biu-list-cell>
        <biu-list-cell type='router' :href='{path: "/pulldownPullup"}' arrow>
					<span slot='left'>pulldown & pullup</span>
				</biu-list-cell>
			</biu-list-wrap>

		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">

</style>