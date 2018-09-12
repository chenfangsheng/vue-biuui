<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			<biu-grid-wrap :rows='3' height='33vw' :line='false' class='preview-demo-box'>
				<biu-grid-item v-for="(item, index) in list" :key='index' class="biu-center">
					<div class="preview-box biu-preview-img" :style="{backgroundImage: 'url('+ item.src +')'}"  @click="show(index)"></div>
				</biu-grid-item>
			</biu-grid-wrap>
			
			<biu-preview :list="list" ref="previewer" @on-index-change="logIndexChange"></biu-preview>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
				  src: 'http://www.stormfury.cn/demo/static/images/my-cat1.jpg',
					title: '我家小蓝白的美照------1'
				  //msrc: ... //缩略图地址
				},
				{
				  src: 'http://www.stormfury.cn/demo/static/images/my-cat2.jpg',
					title: '我家小蓝白的美照------2'
				},
				{
				  src: 'http://www.stormfury.cn/demo/static/images/my-cat3.jpg',
					title: '我家小蓝白的美照------3'
				}
			]
		}
	},
	methods: {
    logIndexChange (arg) {
      console.log(arg)
    },
    show (index) {
      this.$refs.previewer.show(index)
    }
  }
}
</script>

<style lang="scss">
.preview-demo-box{
	padding: 1.5%;
}
.preview-box{
	position: relative;
	overflow: hidden;
	width: 90%;
	padding-top: 90%;
}
.biu-preview-img{
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>