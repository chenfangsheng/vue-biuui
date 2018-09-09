<template>
	<div class="biu-black-mask">
	  <div class="biu-confirm" :class="type">
	  	<div class="biu-popup-inner">
	  		<div class="biu-popup-title"><span v-text="title"></span></div>
	  		<div class="biu-popup-input" v-if="edit">
	  			<input :type="inputType" v-model="mes" :placeholder="placeholder"/>
	  		</div>
		  	<div class="biu-popup-text" v-else><span v-text="mes"></span></div>
	  	</div>
		  <div class="biu-popup-buttons">
		  	<span class="biu-popup-button biu-popup-button-cancel" @click.stop="closeConfirm">取消</span>
		  	<span class="biu-popup-button" @click.stop="runCallback">确定</span>
		  </div>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'biu-confirm',
  props: {
  	type: String,
    title: String,
    mes: String,
    edit: Boolean,
    inputType: String,
    placeholder: String,
    callback: Function
  },
  
}
</script>

<style lang="scss">

</style>