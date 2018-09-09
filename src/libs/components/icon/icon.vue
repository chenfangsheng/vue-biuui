<template>
	<i :class="classes" :style="styles"></i>
</template>

<script>
export default {
  name: "biu-icon",
  props: {
    name: String,
    color: {
      validator(value) {
        if (!value) return true;
        return value;
      },
      default: '#19be6b'
    },
    size: {
      validator(value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: ".45rem"
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      if (this.custom) {
        return "icon-custom-" + this.name;
      }
      return "biu-icon-" + this.name;
    },
    styles() {
      const style = {};

      if (!!this.size) {
        style.fontSize = this.size;
      }

      if (!!this.color) {
        style.color = this.color;
      }

      return style;
    }
  }
};
</script>
