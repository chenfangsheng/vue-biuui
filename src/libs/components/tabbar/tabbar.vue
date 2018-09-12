<template>
	<div class="biu-tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "biu-tabbar",
  props: {
    value: Number,
    activeColor: {
      type: String,
      default: "#19be6b"
    }
  },
  data() {
    return {
      activeIndex: this.value
    };
  },
  methods: {
    setCurrent(index) {
      const tabPanels = this.$children.filter(
        item => item.$options.name === "biu-tabbar-item"
      );
      tabPanels.forEach((item, key) => {
        this.$set(item, "isCurrent", index === key);
      });
    },
    setIndex() {
      const tabPanels = this.$children.filter(
        item => item.$options.name === "biu-tabbar-item"
      );
      tabPanels.forEach((item, key) => {
        this.$set(item, "currentIndex", key);
      });
    }
  },
  watch: {
    value(val) {
      this.setCurrent(val);
    }
  },
  mounted() {
    this.setCurrent(this.activeIndex);
    this.setIndex();
  }
};
</script>