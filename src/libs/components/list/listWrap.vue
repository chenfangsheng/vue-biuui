<template>
	<div class="biu-list">
		<div class="biu-list-title" v-if="title" v-text='title'></div>
		<div class="biu-list-wrap">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'biu-list-wrap',
	props: {
		title: String
	}
}	
</script>