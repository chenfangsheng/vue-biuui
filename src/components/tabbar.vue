<template>
	<biu-layout>
    <biu-body slot='body'>

      <h5 class="biu-remarks">框架自带icon</h5>
			<biu-tabbar v-model="tabIndex">
        <biu-tabbar-item icon='like' activeIcon='like-solid'>爱好</biu-tabbar-item>
        <biu-tabbar-item icon='zan' activeIcon='zan-solid'>点赞</biu-tabbar-item>
        <biu-tabbar-item icon='select' activeIcon='select-solid' dot>收藏</biu-tabbar-item>
        <biu-tabbar-item icon='user' activeIcon='user-solid'>我的</biu-tabbar-item>
      </biu-tabbar>

      <h5 class="biu-remarks">自定义icon（推荐阿里巴巴的 iconfont）</h5>
			<biu-tabbar v-model="tabIndex">
        <biu-tabbar-item newIcon='iconfont icon-like' newActiveIcon='iconfont icon-like-solid'>爱好</biu-tabbar-item>
        <biu-tabbar-item newIcon='iconfont icon-zan' newActiveIcon='iconfont icon-zan-solid'>点赞</biu-tabbar-item>
        <biu-tabbar-item newIcon='iconfont icon-select' newActiveIcon='iconfont icon-select-solid' dot>收藏</biu-tabbar-item>
        <biu-tabbar-item newIcon='iconfont icon-user' newActiveIcon='iconfont icon-user-solid'>我的</biu-tabbar-item>
      </biu-tabbar>

		</biu-body>
		<biu-footer slot="footer">
      <biu-tabbar v-model="tabIndex">
        <biu-tabbar-item icon='index' activeIcon='index-solid'>主页</biu-tabbar-item>
        <biu-tabbar-item icon='user' activeIcon='user-solid'>我的</biu-tabbar-item>
      </biu-tabbar>
    </biu-footer>
	</biu-layout>
</template>

<script>
export default {
	data() {
    return {
      tabIndex: 0
    }
  }
}
</script>

<style lang="scss">

</style>