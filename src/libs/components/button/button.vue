<template>
	<button :class="buttonClass" :disabled='disabled' :style="buttonStyle">
		<span class="biu-button-content"><slot></slot></span>
	</button>
</template>

<script>
export default {
	name: 'biu-button',
  props: {
    disabled: Boolean,
    type: {
      validator(value) {
        return ['default', 'primary', 'text', 'info', 'success', 'warn', 'error', 'dashed'].indexOf(value) > -1;
      },
      default: 'default'
    },
    size: {
      validator(value) {
        return ['small', 'large'].indexOf(value) > -1;
      }
    },
    bgColor: {
      validator(value) {
        if (!value) return true;
        return value;
      }
    },
    color: {
      validator(value) {
        if (!value) return true;
        return value;
      }
    },
    shape: {
      validator(value) {
        return ['circle', 'angle'].indexOf(value) > -1;
      }
    }
  },
  computed: {
  	buttonClass() {
  		let size = '';
  		if(this.size === 'small') {
        size = 'biu-btn-small'
      } else {
        size = this.size === 'large' ? 'biu-btn-block' : '';
      }
      
      let type = ' biu-btn-' + this.type;
      
      let shape = '';
      if (this.shape === 'angle') {
        shape = ' biu-btn-angle';
      } else {
        shape = this.shape === 'circle' ? ' biu-btn-circle' : ''
      }
      
      return 'biu-btn ' + size + type + shape;
  	},
  	buttonStyle() {
  		let bg = 'background-color: ';
  		if(this.bgColor){
  			bg += this.bgColor;
  			bg += ';border-color: ' + this.bgColor;
  		}
  		
  		let color = 'color: ';
  		if(this.color){
  			color += this.color;
  		}
  		
  		return bg + ';' + color;
  	}
  }
}
</script>

<style lang="scss">
@import "../../styles/libs/button.scss";
</style>