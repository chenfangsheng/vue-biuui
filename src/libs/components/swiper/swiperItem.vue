<template>
  <div class="biu-swiper-item"><slot></slot></div>
</template>

<script>
export default {
  name: 'biu-swiper-item',
  mounted () {
    this.$nextTick(() => {
      this.$parent.rerender()
    })
  },
  beforeDestroy () {
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.rerender()
    })
  }
}
</script>