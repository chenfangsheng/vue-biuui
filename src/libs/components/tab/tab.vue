<template>
  <div
    class="biu-tab-wrap"
    :class="barPosition === 'top' ? 'biu-tab-bar-top' : ''">
    <div class="biu-tab-container">
      <div
        class="biu-tab"
        :class="[{'biu-tab-no-animate': !animate},{ scrollable },{'biu-tab-line': line}]"
        ref="nav">
        <slot></slot>
        <div
          v-if="animate"
          class="biu-tab-ink-bar"
          :class="barClass"
          :style="barStyle">
          <span
            class="biu-tab-bar-inner"
            :style="innerBarStyle"
            v-if="customBarWidth"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-items'
export default {
  name: 'biu-tab',
  mixins: [parentMixin],
  mounted () {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true
      }, 0)
    })
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator (val) {
        return ['bottom', 'top'].indexOf(val) !== -1
      }
    },
    line: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    barLeft () {
      if (this.hasReady) {
        const count = this.scrollable ? (window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width) : this.number
        return `${this.currentIndex * (100 / count)}%`
      }
    },
    barRight () {
      if (this.hasReady) {
        const count = this.scrollable ? (window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width) : this.number
        return `${(count - this.currentIndex - 1) * (100 / count)}%`
      }
    },
    // when prop:custom-bar-width
    innerBarStyle () {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      }
    },
    // end
    barStyle () {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      }
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor
      } else {
        commonStyle.backgroundColor = 'transparent' // when=prop:custom-bar-width
      }
      return commonStyle
    },
    barClass () {
      return {
        'biu-tab-ink-bar-transition-forward': this.direction === 'forward',
        'biu-tab-ink-bar-transition-backward': this.direction === 'backward'
      }
    },
    scrollable () {
      return this.number > this.scrollThreshold
    }
  },
  watch: {
    currentIndex (newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward'
      this.$emit('on-index-change', newIndex, oldIndex)
      this.hasReady && this.scrollToActiveTab()
    }
  },
  data () {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    }
  },
  methods: {
    scrollToActiveTab () {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return
      }
      const currentIndexTab = this.$children[this.currentIndex].$el
      let count = 0
      // scroll animation
      const step = () => {
        const scrollDuration = 15
        const nav = this.$refs.nav
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }
}
</script>