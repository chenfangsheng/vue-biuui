<template>
	<div>
		<biu-mask v-model="show" @click.native="close"></biu-mask>
		<div :class="classes" :style="styles">
			<div class="biu-popup-content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import Mask from '../mask/mask.vue';
export default {
	name: 'biu-popup',
	components: {
    'biu-mask': Mask
 	},
 	data() {
 		return {
 			show: this.value
 		}
 	},
 	props: {
 		value: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    bgColor: {
    	type: String,
      default: '#fff'
    },
    position: {
    	validator(value) {
        return ['bottom', 'center', 'left', 'right'].indexOf(value) > -1;
      },
      default: 'bottom'
    }
 	},
 	watch: {
    value(val) {
      this.show = val;
    }
  },
  computed: {
    classes() {
      return (this.position === 'center' ? 'biu-popup-center ' : 'biu-popup biu-popup-' + this.position) + (this.show ? ' biu-popup-show ' : '');
    },
    styles() {
      if (this.position === 'left' || this.position === 'right') {
        return {width: this.width, 'background-color': this.bgColor};
      } else if (this.position === 'bottom') {
        return {width: '100%', height: this.height, 'background-color': this.bgColor};
      } else {
        return {width: this.width, height: this.height, 'background-color': this.bgColor};
      }
	  }
  },
 	methods: {
 		close() {
 			this.show = false;
 			this.$emit('input', false);
 		}
 	}
}
</script>