<template>
	<div class="biu-slider-item">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'biu-slider-item',
	mounted() {
   	this.$nextTick(this.$parent.init);
  }
}
</script>