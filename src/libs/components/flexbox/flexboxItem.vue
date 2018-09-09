<template>
	<div class="biu-flexbox-item" :class="classes">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'biu-flexbox-item',
	props: {
    align: {
      validator(val) {
        return ['top', 'center', 'bottom'].indexOf(val) > -1;
      },
      default: 'center'
    }
  },
  computed: {
    classes() {
      if (this.align === 'top') {
        return 'biu-flexbox-item-start';
      } else if (this.align === 'bottom') {
        return 'biu-flexbox-item-end';
      } else {
        return 'biu-flexbox-item-center';
      }
    }
  }
}
</script>