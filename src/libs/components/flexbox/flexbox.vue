<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'biu-flexbox',
	props: {
		direction: {
			validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1;
      },
      default: 'horizontal'
		}
	},
	computed: {
		classes() {
			let d = 'biu-flexbox biu-flexbox-' + this.direction;
			return d;
		}
	}
}
</script>