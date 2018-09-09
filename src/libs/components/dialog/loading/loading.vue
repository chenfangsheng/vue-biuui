<template>
	<div class="biu-Invisible-mask">
	  <div class="biu-loading" :class="type">
	  	<i class="biu-loading-icon"></i>
	    <p class="biu-loading-text" v-html="mes"></p>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'biu-loading',
  props: {
  	type: String,
    mes: String
  }
}
</script>

<style lang="scss">

</style>