import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/index'
   	},{
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/index.vue'], resolve),
      meta: {
        keepAlive: true,
        title: 'BIU-UI'
      }
    },{
      path: '/dialog',
      name: 'dialog',
      component: resolve => require(['@/components/dialog.vue'], resolve),
      meta: {
        title: 'Dialog'
      }
    },{
      path: '/button',
      name: 'button',
      component: resolve => require(['@/components/button.vue'], resolve),
      meta: {
        title: 'Dialog'
      }
    },{
      path: '/grid',
      name: 'grid',
      component: resolve => require(['@/components/grid.vue'], resolve),
      meta: {
        title: 'Grid'
      }
    },{
      path: '/list',
      name: 'list',
      component: resolve => require(['@/components/list.vue'], resolve),
      meta: {
        title: 'List'
      }
    },{
      path: '/slider',
      name: 'slider',
      component: resolve => require(['@/components/slider.vue'], resolve),
      meta: {
        title: 'Slider'
      }
    },{
      path: '/backTop',
      name: 'backTop',
      component: resolve => require(['@/components/backTop.vue'], resolve),
      meta: {
        title: 'Backtop'
      }
    },{
      path: '/popup',
      name: 'popup',
      component: resolve => require(['@/components/popup.vue'], resolve),
      meta: {
        title: 'Popup'
      }
    },{
      path: '/flexbox',
      name: 'flexbox',
      component: resolve => require(['@/components/flexbox.vue'], resolve),
      meta: {
        title: 'Flexbox'
      }
    },{
      path: '/preview',
      name: 'preview',
      component: resolve => require(['@/components/preview.vue'], resolve),
      meta: {
        title: 'Preview'
      }
    },{
      path: '/actionSheet',
      name: 'actionSheet',
      component: resolve => require(['@/components/actionSheet.vue'], resolve),
      meta: {
        title: 'ActionSheet'
      }
    },{
      path: '/linkage',
      name: 'linkage',
      component: resolve => require(['@/components/linkage.vue'], resolve),
      meta: {
        title: 'Linkage'
      }
    },{
      path: '/dateSelect',
      name: 'dateSelect',
      component: resolve => require(['@/components/dateSelect.vue'], resolve),
      meta: {
        title: 'DateSelect'
      }
    },{
      path: '/pull',
      name: 'pull',
      component: resolve => require(['@/components/pull.vue'], resolve),
      meta: {
        title: 'Pull'
      }
    },{
      path: '/pullup',
      name: 'pullup',
      component: resolve => require(['@/components/pullup.vue'], resolve),
      meta: {
        title: 'Pullup'
      }
    },{
      path: '/pulldown',
      name: 'pulldown',
      component: resolve => require(['@/components/pulldown.vue'], resolve),
      meta: {
        title: 'Pulldown'
      }
    },{
      path: '/pulldownPullup',
      name: 'pulldownPullup',
      component: resolve => require(['@/components/pulldownPullup.vue'], resolve),
      meta: {
        title: 'PulldownPullup'
      }
    },{
      path: '/tab',
      name: 'tab',
      component: resolve => require(['@/components/tab.vue'], resolve),
      meta: {
        title: 'Tab'
      }
    },{
      path: '/swiper',
      name: 'swiper',
      component: resolve => require(['@/components/swiper.vue'], resolve),
      meta: {
        title: 'Swiper'
      }
    },{
      path: '/badge',
      name: 'badge',
      component: resolve => require(['@/components/badge.vue'], resolve),
      meta: {
        title: 'Badge'
      }
    },{
      path: '/radio',
      name: 'radio',
      component: resolve => require(['@/components/radio.vue'], resolve),
      meta: {
        title: 'Radio'
      }
    },{
      path: '/checkbox',
      name: 'checkbox',
      component: resolve => require(['@/components/checkbox.vue'], resolve),
      meta: {
        title: 'Checkbox'
      }
    },{
      path: '/switch',
      name: 'switch',
      component: resolve => require(['@/components/switch.vue'], resolve),
      meta: {
        title: 'Switch'
      }
    },{
      path: '/color',
      name: 'color',
      component: resolve => require(['@/components/color.vue'], resolve),
      meta: {
        title: 'Color'
      }
    },{
      path: '/icons',
      name: 'icons',
      component: resolve => require(['@/components/icons.vue'], resolve),
      meta: {
        title: 'Icons'
      }
    },{
      path: '/collapse',
      name: 'collapse',
      component: resolve => require(['@/components/collapse.vue'], resolve),
      meta: {
        title: 'Collapse'
      }
    }
  ]
})
