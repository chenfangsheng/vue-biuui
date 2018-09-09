<template>
	<div>
		<biu-mask v-model="show" @click.native="close"></biu-mask>
		<div class="biu-actionsheet" :class="show ? 'biu-actionsheet-active' : ''">
			<a v-for="item, index in list" @click.stop="itemClick(item)" href="javascript:;" class="biu-actionsheet-item" :key="index">{{item.text}}</a>
      <a v-if="cancel" @click.stop="close" href="javascript:;" class="biu-actionsheet-action">{{cancel}}</a>
		</div>
	</div>
</template>

<script>
import Mask from '../mask/mask.vue';
export default {
	name: 'biu-actionsheet',
	components: {
		'biu-mask': Mask
	},
	props: {
		cancel: String,
		value: {
      type: Boolean,
      default: false
    },
    list: {
    	type: Array,
      required: true
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
 	methods: {
 		itemClick(item) {
 			if(item) {
        typeof item.callback === 'function' && item.callback(item);
        !item.stay && this.close();
      }
 		},
 		close() {
 			this.show = false;
 			this.$emit('input', false);
 		}
 	}
}
</script>

<style lang="scss">
li{
	padding: .2rem .3rem;
	font-size: .3rem;
	color: #666;
}
</style>