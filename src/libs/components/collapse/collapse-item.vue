<template>
  <div :class="itemClasses">
    <div :class="headerClasses" @click="toggle">
      <div class="biu-collapse-title"><slot></slot></div>
      <biu-icon name='arrow-right' v-if="!hideArrow" color="#a0a0a0" size=".28rem"></biu-icon>
    </div>
    <div :class="contentClasses" v-show="isActive">
      <div :class="boxClasses" ref="content"><slot name="content"></slot></div>
    </div>
  </div>
</template>
<script>
import Icon from "../icon/icon.vue";

const prefixCls = "biu-collapse";
export default {
  name: "biu-collapse-item",
  components: { 
    'biu-icon': Icon
  },
  props: {
    name: {
      type: String
    },
    hideArrow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      index: 0, // use index for default when name is null
      isActive: false
    };
  },
  computed: {
    itemClasses() {
      return [
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: this.isActive
        }
      ];
    },
    headerClasses() {
      return `${prefixCls}-header`;
    },
    contentClasses() {
      return `${prefixCls}-content`;
    },
    boxClasses() {
      return `${prefixCls}-content-box`;
    }
  },
  methods: {
    toggle() {
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      });
    }
  }
};
</script>