<template>
  <div class="biu-radio-group" :class="{'biu-radio-vertical': vertical}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
export default {
  name: "biu-radio-group",
  data() {
    return {
      currentValue: this.value
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    color: {
      validator(value) {
        if (!value) return true;
        return value;
      },
      default: "#19be6b"
    },
    size: {
      validator(val) {
        return /^([1-9]\d*)$/.test(val);
      },
      default: 20
    },
    vertical: {
      type: Boolean,
      default: false
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    updateValue() {
      const value = this.value;
      this.childrens = this.$children.filter(
        item => item.$options.name === "biu-radio"
      );

      if (this.childrens) {
        this.childrens.forEach(child => {
          child.checked = value == child.val;
        });
      }
    },
    change(val) {
      this.callback(val);
      this.currentValue = val;
      this.updateValue();
      this.$emit("input", val);
    }
  },
  watch: {
    value() {
      this.updateValue();
    }
  },
  mounted() {
    this.$nextTick(this.updateValue);
  }
};
</script>
