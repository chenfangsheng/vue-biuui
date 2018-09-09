<template>
	<span class="biu-badge" :style="{backgroundColor: bgColor, transform: 'scale(' + scale + ')'}">
    <slot></slot>
  </span>
</template>

<script>
export default {
	name: 'biu-badge',
	props: {
		bgColor: {
			type: String,
			default: '#ef4f4f'
    },
    scale: {
      validator(val) {
        return /^(\d*(.\d+)?)$/.test(val);
      },
      default: 1
    }
	}
}
</script>

<style lang="scss">
.biu-badge{
  color: #fff;
  font-size: 12px;
  position: relative;
  display: inline-block;
  border-radius: 1000px;
  line-height: 1;
  padding: 3px 6px;
  white-space: nowrap;
  transform-origin: center center;
}
</style>