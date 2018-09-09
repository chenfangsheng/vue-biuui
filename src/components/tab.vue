<template>
	<biu-layout>
		<biu-body slot='body'>
      
      <h5 class="biu-remarks">常用示例-结合swiper组件</h5>
			<biu-tab active-color='#ff9900' v-model="index">
        <biu-tab-item class="biu-center" v-for="(item, index) in 5" :key="index">{{'item' + (index + 1)}}</biu-tab-item>
      </biu-tab>
      <biu-swiper v-model="index" height="3rem" :show-dots="false">
        <biu-swiper-item v-for="(item, index) in 5" :key="index">
          <div class="tab-swiper biu-center">{{'item' + (index + 1)}} Container</div>
        </biu-swiper-item>
      </biu-swiper>

      <h5 class="biu-remarks">bar-position: top（bar位置）</h5>
      <biu-tab active-color='#8b78e2' bar-position='top' v-model="index1">
        <biu-tab-item class="biu-center" v-for="(item, index) in 6" :key="index">{{'item' + (index + 1)}}</biu-tab-item>
      </biu-tab>
      <biu-swiper v-model="index1" height="3rem" :show-dots="false">
        <biu-swiper-item v-for="(item, index) in 6" :key="index">
          <div class="tab-swiper biu-center">{{'item' + (index + 1)}} Container</div>
        </biu-swiper-item>
      </biu-swiper>
      
      <h5 class="biu-remarks">scroll-threshold: 6（滚动阀值）</h5>
      <biu-tab active-color='#2db7f5' :scroll-threshold='6' v-model="index2">
        <biu-tab-item class="biu-center" v-for="(item, index) in 6" :key="index">{{'item' + (index + 1)}}</biu-tab-item>
      </biu-tab>
      <biu-swiper v-model="index2" height="3rem" :show-dots="false">
        <biu-swiper-item v-for="(item, index) in 6" :key="index">
          <div class="tab-swiper biu-center">{{'item' + (index + 1)}} Container</div>
        </biu-swiper-item>
      </biu-swiper>

      <h5 class="biu-remarks">line: true（显示分割线）</h5>
      <biu-tab active-color='#19be6b' v-model="index3" line>
        <biu-tab-item class="biu-center" v-for="(item, index) in 2" :key="index">{{'item' + (index + 1)}}</biu-tab-item>
      </biu-tab>
      <biu-swiper v-model="index3" height="3rem" :show-dots="false">
        <biu-swiper-item v-for="(item, index) in 2" :key="index">
          <div class="tab-swiper biu-center">{{'item' + (index + 1)}} Container</div>
        </biu-swiper-item>
      </biu-swiper>

      <h5 class="biu-remarks">animate: false（bar无动画）</h5>
      <biu-tab active-color='#fc378c' v-model="index4" :animate='false'>
        <biu-tab-item class="biu-center" v-for="(item, index) in 2" :key="index">{{'item' + (index + 1)}}</biu-tab-item>
      </biu-tab>
      <biu-swiper v-model="index4" height="3rem" :show-dots="false">
        <biu-swiper-item v-for="(item, index) in 2" :key="index">
          <div class="tab-swiper biu-center">{{'item' + (index + 1)}} Container</div>
        </biu-swiper-item>
      </biu-swiper>

       <h5 class="biu-remarks">badge-label（角标）</h5>
      <biu-tab active-color='#ff9900' v-model="index5" line>
        <biu-tab-item class="biu-center">新闻列表<biu-badge scale='.8'>1</biu-badge></biu-tab-item>
        <biu-tab-item class="biu-center">我的消息<biu-badge scale='.8'>2</biu-badge></biu-tab-item>
      </biu-tab>
      <biu-swiper v-model="index5" height="3rem" :show-dots="false">
        <biu-swiper-item v-for="(item, index) in 2" :key="index">
          <div class="tab-swiper biu-center">{{'item' + (index + 1)}} Container</div>
        </biu-swiper-item>
      </biu-swiper>

      <h5 class="biu-remarks">动态根据item文字长短获取bar宽度</h5>
      <biu-tab active-color='#2db7f5' v-model="index6" :custom-bar-width="getBarWidth(index6)">
        <biu-tab-item class="biu-center" v-for="(item, index) in list" :key="index">{{item}}</biu-tab-item>
      </biu-tab>
      <biu-swiper v-model="index6" height="3rem" :show-dots="false">
        <biu-swiper-item v-for="(item, index) in list" :key="index">
          <div class="tab-swiper biu-center">{{item}} Container</div>
        </biu-swiper-item>
      </biu-swiper>

      <h5 class="biu-remarks">END</h5>

      <biu-backtop></biu-backtop>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
    return {
      index: 0,
      index1: 0,
      index2: 0,
      index3: 0,
      index4: 0,
      index5: 0,
      index6: 0,
      list: ['美食', '美食杂志', '最全美食杂志']
    }
  },
  methods: {
    getBarWidth(index) {
      return this.list[index].length * 16 + 'px';
    }
  }
}
</script>

<style lang="scss">
.tab-swiper{
  height: 3rem;
  font-size: .4rem;
  background: #fff;
}
</style>