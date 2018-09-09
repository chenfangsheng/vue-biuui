<template>
  <span
    tabindex="0"
    :class="wrapClasses"
    :style="wrapStyle"
    @click="toggle"
    @keydown.space="toggle"
  >
    <input type="hidden" :name="name" :value="currentValue">
    <span :class="innerClasses">
      <slot name="open" v-if="currentValue === trueValue"></slot>
      <slot name="close" v-if="currentValue === falseValue"></slot>
    </span>
  </span>
</template>
<script>
import Emitter from "../../mixins/emitter";
const prefixCls = "biu-switch";
export default {
  name: "biu-switch",
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return ['large', 'small', 'default'].indexOf(value) > -1;
      },
      default: 'default'
    },
    color: {
      validator(value) {
        if (!value) return true;
        return value;
      },
      default: "#19be6b"
    },
    name: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: this.currentValue === this.trueValue,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-loading`]: this.loading
        }
      ];
    },
    wrapStyle() {
      return this.currentValue === this.trueValue ? {borderColor: this.color, backgroundColor: this.color} : '';
    },
    innerClasses() {
      return `${prefixCls}-inner`;
    }
  },
  methods: {
    toggle(event) {
      event.preventDefault();
      if (this.disabled || this.loading) {
        return false;
      }
      const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
      this.currentValue = checked;
      this.$emit("input", checked);
      this.$emit("on-change", checked);
      this.dispatch("FormItem", "on-form-change", checked);
    }
  },
  watch: {
    value(val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw "Value should be trueValue or falseValue.";
      }
      this.currentValue = val;
    }
  }
};
</script>