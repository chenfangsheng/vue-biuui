<template>
	<div class="biu-grid-item" :class="$parent.height != 0 ? 'biu-grid-item-center' : ''" :style="styles">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'biu-grid-item',
	computed: {
    styles() {
      if (this.$parent.height != 0) {
        return {
          height: this.$parent.height,
          padding: 0
        };
      }
    }
  }
}	
</script>

<style lang="scss">

</style>