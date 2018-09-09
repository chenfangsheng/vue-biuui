<template>
	<biu-layout>
		<biu-body slot='body'>

      <h5 class="biu-remarks">自定义内容</h5>
			<biu-swiper v-model="index" height="3rem">
        <biu-swiper-item v-for="(item, index) in 5" :key="index">
          <div class="tab-swiper biu-center">{{'item' + (index + 1)}} Container</div>
        </biu-swiper-item>
      </biu-swiper>

      <h5 class="biu-remarks">实现轮播功能</h5>
			<biu-swiper v-model="index1" height="4rem" :list='list' @on-index-change="indexChange" auto loop :interval='2000'></biu-swiper>

		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
      index: 0,
      index1: 0,
      list: [
        {
          url: 'javascript:;',
          img: 'https://gratisography.com/thumbnails/gratisography-316-thumbnail-small.jpg',
          title: 'Daisies in Summer'
        }, {
          url: 'javascript:;',
          img: 'https://gratisography.com/thumbnails/gratisography-241-thumbnail-small.jpg',
          title: 'Barbed Wire Fence'
        }, {
          url: 'javascript:;',
          img: 'https://gratisography.com/thumbnails/gratisography-157-thumbnail-small.jpg',
          title: 'Jumping Cats'
        }
      ]
		}
  },
  methods: {
    indexChange(index) {
      this.index1 = index;
    }
  }
};
</script>

<style lang="scss" scoped>
img{
	width: 100%
}
.tab-swiper{
  height: 3rem;
  font-size: .4rem;
  background: #fff;
}
</style>