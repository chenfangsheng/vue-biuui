<template>
	<div class="biu-grid-wrap" :class="gridClass">
		<div class="biu-grid-title" v-if="title" v-text='title'></div>
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'biu-grid-wrap',
  props: {
		title: String,
  	rows: Number,
  	line: {
  		type: Boolean,
  		default: true
  	},
  	height: {
  		type: [String, Number],
  		default: 0
  	}
  },
  computed: {
  	gridClass() {
  		let b = 'biu-grid-' + this.rows;
  		let l = '';
  		if(this.line) {
  			l = ' biu-grid-line';
  		}
  		return b + l;
  	}
  }
}	
</script>

<style lang="scss">

</style>