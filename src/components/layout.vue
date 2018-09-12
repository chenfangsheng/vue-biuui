<template>
	<biu-layout>
    <biu-header slot='header'>
			<div class="demo-layout biu-center">Header</div>
    </biu-header>
		<biu-body slot='body'>
      <div class="demo-body">
        <p class="demo-layout biu-center">Body-container</p>
        <p class="demo-body-text">BIU-UI已经帮我们布好局了,只需要添加对应组件即可。</p>
        <p class="demo-body-text">Body组件会自动撑满中间空余内容，内容超出出现滚动条。</p>
      </div>
		</biu-body>
    <biu-footer slot='footer'>
			<div class="demo-layout biu-center">Footer</div>
		</biu-footer>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
.demo{
  &-layout {
    padding: .3rem .4rem;
    font-size: .5rem;
    width: 100%;
    background-color: #fff;
  }
  &-body {
    padding: .3rem .4rem;
    height: 1000px;
    .demo-layout{
      background: none;
    }
    &-text{
      position: relative;
      font-size: .28rem;
      color: #999;
      margin-top: .2rem;
      padding-left: 20px;
      &:after{
        content: '';
        position: absolute;
        left: 0;
        top: .14rem;
        width: 5px;
        height: 5px;
        background-color: #666;
        border-radius: 50%;
      }
    }
  }
}
</style>