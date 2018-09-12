<template>
  <router-link class="biu-tabbar-item" v-if="type === 'router' && href" 
   :style="{color: iconColor}" :to="href" :class="classes" @click.native="tabChange">
    <biu-icon v-if="icon" :name='iconName' :color='iconColor' size='.42rem'></biu-icon>
    <i v-if="newIcon" class="biu-tabbar-icon" :class="iconName"></i>
    <span class="biu-tabbar-text"><slot></slot></span>
  </router-link>
  <a :href="href || 'javascript:;'" class="biu-tabbar-item" :class="classes" :style="{color: iconColor}" @click="tabChange" v-else>
    <biu-icon v-if="icon" :name='iconName' :color='iconColor' size='.42rem'></biu-icon>
    <i v-if="newIcon" class="biu-tabbar-icon" :class="iconName"></i>
    <span class="biu-tabbar-text"><slot></slot></span>
  </a>
</template>

<script>
import Icon from '../icon/icon.vue';
export default {
  name: 'biu-tabbar-item',
  components: {
    'biu-icon': Icon
 	},
	props: {
    icon: String,
    activeIcon: String,
		newIcon: String,
    newActiveIcon: String,
    dot: {
      type: Boolean,
      default: false
    },
    type: {
      validator (value) {
        return ['router', 'link'].indexOf(value) > -1;
      },
      default: 'router'
    },
    href: [String, Object]
  },
  data() {
    return {
      isCurrent: false,
      currentIndex: 0
    }
  },
  computed: {
    iconColor() {
      return this.isCurrent ? this.$parent.activeColor : '#979797';
    },
    classes() {
      let d = this.dot ? 'biu-tabbar-dot' : '';
      let i = this.isCurrent ? ' biu-tabbar-active' : '';
      return  d + i;
    },
    iconName() {
      if(this.icon && this.activeIcon) {
        return this.isCurrent ? this.activeIcon :  this.icon;
      }else if(this.newIcon && this.newActiveIcon) {
        return this.isCurrent ? this.newActiveIcon :  this.newIcon;
      }
    }
  },
  methods: {
    tabChange() {
      this.$parent.setCurrent(this.currentIndex);
    }
  }
}
</script>