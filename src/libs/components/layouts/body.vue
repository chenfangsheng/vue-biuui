<template>
	<section class="biu-body" :style="'background:' + bg">
  	<slot></slot>
  </section>
</template>

<script>
export default {
	name: 'biu-body',
	props: {
    bg: {
      type: String,
      default: '#f8f8f9'
  	}
  }
}	
</script>
<style lang="scss">

</style>
