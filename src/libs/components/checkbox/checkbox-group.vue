<template>
  <div class="biu-checkbox-group" :class="{'biu-checkbox-vertical': vertical}">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
export default {
  name: "biu-checkbox-group",
  props: {
    value: {
      type: Array,
      default: []
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
        item => item.$options.name === "biu-checkbox"
      );

      if (this.childrens) {
        this.childrens.forEach(child => {
          child.model = value;
        });
      }
    },
    change(val) {
      this.callback(val);
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
