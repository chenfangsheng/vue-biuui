<template>
	<div class="biu-mask" :style="styles"></div>
</template>

<script>
export default {
	name: 'biu-mask',
	props: {
		bgColor: {
			type: String,
			default: 'rgb(0,0,0)'
		},
		opacity: {
			type: Number,
			default: .3
		},
		value: {
      type: Boolean,
      default: false
    }
	},
	data() {
 		return {
 			show: this.value
 		}
 	},
 	watch: {
    value(val) {
      this.show = val;
    }
  },
  computed: {
    styles() {
    	const style = {'background-color': this.bgColor};
      if (this.show) {
          style['opacity'] = this.opacity;
          style['pointer-events'] = 'auto';
      }
      return style;
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/libs/mask.scss";
</style>