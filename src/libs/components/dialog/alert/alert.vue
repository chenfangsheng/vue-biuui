<template>
	<div class="biu-black-mask">
	  <div class="biu-alert" :class="type">
	  	<div class="biu-popup-inner">
	  		<div class="biu-popup-title"><span v-text="title"></span></div>
		  	<div class="biu-popup-text"><span v-text="mes"></span></div>
	  	</div>
		  <div class="biu-popup-buttons">
		  	<span class="biu-popup-button" @click.stop="closeAlert" v-text="buttonText"></span>
		  </div>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'biu-alert',
  props: {
  	type: String,
    title: String,
    mes: String,
    buttonText: String,
    callback: Function
  }
}
</script>

<style lang="scss">

</style>