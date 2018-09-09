<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			<biu-grid-wrap :rows='3' height='33vw' :line='false' class='preview-demo-box'>
				<biu-grid-item v-for="(item, index) in list" :key='index' class="biu-center">
					<div class="preview-box biu-preview-img">
						<img :src="item.src" @click="show(index)">
					</div>
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
				  src: 'https://gratisography.com/thumbnails/gratisography-267-thumbnail-small.jpg',
					title: 'Hanging Umbrellas'
				  //msrc: ... //缩略图地址
				},
				{
				  src: 'https://gratisography.com/thumbnails/gratisography-282-thumbnail-small.jpg',
					title: 'Colorful City Building'
				},
				{
				  src: 'https://gratisography.com/thumbnails/gratisography-237-thumbnail-small.jpg',
					title: 'Barbed Wire Fence'
				},
				{
				  src: 'https://gratisography.com/thumbnails/gratisography-258-thumbnail-small.jpg',
					title: 'Colorful City Building'
				},
				{
				  src: 'https://gratisography.com/thumbnails/gratisography-261-thumbnail-small.jpg',
					title: 'Coffee Beans'
				},
				{
				  src: 'https://gratisography.com/thumbnails/gratisography-290-thumbnail-small.jpg',
					title: 'Woman with Donut Fingers'
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
	img{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate3d(-50%,-50%,0);
		height: 100%;
	}
	
}
</style>