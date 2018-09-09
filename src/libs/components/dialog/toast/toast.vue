<template>
	<div class="biu-Invisible-mask">
	  <div class="biu-toast" :class="type">
      <biu-icon v-if="icon" :name='icon' size='.8rem' color='#fff' class="biu-toast-iconfont"></biu-icon>
	    <p class="biu-toast-content" v-html="mes"></p>
	  </div>
	</div>
</template>

<script>
import Icon from '../../icon/icon.vue';
export default {
  name: 'biu-toast',
  components: {
    'biu-icon': Icon
 	},
  props: {
  	type: String,
    mes: String,
    icon: String,
    timeout: Number,
    callback: Function
  }
}
</script>

<style lang="scss">

</style>