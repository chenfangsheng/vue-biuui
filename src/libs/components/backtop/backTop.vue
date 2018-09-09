<template>
	<div class="biu-backtop" 
		v-show="show"
		@click.stop="backtop" 
		:style="{right: right, bottom: bottom, background: iconColor}">
    <biu-icon :name='name' color='#fff'></biu-icon>
	</div>
</template>

<script>
import Icon from '../icon/icon.vue';
import { scrollTop, getScrollview } from '../../../utils';
export default {
  name: 'biu-backtop',
  components: {
    'biu-icon': Icon
 	},
	props: {
		name: {
			type: String,
			default: 'top-three'
		},
		right: {
      type: String,
      default: '.3rem'
    },
    bottom: {
      type: String,
      default: '1rem'
    },
    iconColor: {
    	type: String,
      default: 'rgba(0,0,0,.3)'
    }
	},
	data() {
		return {
			show: false
		}
	},
	methods: {
    backtop() {
      let top = 0;
      if (this.scrollView === window) {
        if (document.documentElement && document.documentElement.scrollTop) {
          top = document.documentElement.scrollTop;
        } else {
          top = document.body.scrollTop;
        }
      } else {
        top = this.scrollView.scrollTop
    	}

      scrollTop(this.scrollView, top, 0);
    },
    scrollHandler() {
      let offsetTop = window.pageYOffset;
      let offsetHeight = window.innerHeight;

      if (this.scrollView !== window) {
        offsetTop = this.scrollView.scrollTop;
        offsetHeight = this.scrollView.offsetHeight;
      }

      this.show = offsetTop >= offsetHeight / 2;
    },
    throttle(method, context) {
      clearTimeout(method.tId);
      method.tId = setTimeout(() => {
        method.call(context);
      }, 50);
    },
    throttledCheck() {
      this.throttle(this.scrollHandler);
    }
  },
  mounted() {
    this.scrollView = getScrollview(this.$el);

    this.scrollView.addEventListener('scroll', this.throttledCheck, false);
    this.scrollView.addEventListener('resize', this.scrollHandler, false);
  },
  beforeDestroy() {
    this.scrollView.removeEventListener('scroll', this.throttledCheck, false);
    this.scrollView.removeEventListener('resize', this.scrollHandler, false);
  }
}	
</script>