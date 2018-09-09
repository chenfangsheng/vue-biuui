<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			<biu-pullup :callback="loadList" ref="pullup">
				<biu-grid-wrap :rows='2' slot="list" height='50vw'>
					<biu-grid-item v-for="(item,index) in list" :key='index'>
						<img :src="item.url" alt="">
					</biu-grid-item>
				</biu-grid-wrap>
				<!-- 数据全部加载完毕显示 -->
				<span slot="doneTip">~ 我也是有底线的 ~</span>
			</biu-pullup>

			<biu-backtop iconColor='#19be6b'></biu-backtop>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			list: [],
			size: 10,
			page: 1
		}
	},
	mounted() {
		this.loadList();
	},
  methods: {
    loadList() {
			const _this = this;

      this.$http.get("https://gank.io/api/data/福利/"+_this.size+"/"+_this.page)
        .then(function(response) {
          const _list = response.data;
          _this.list = [..._this.list, ..._list.results];

          if (_list.length < _this.size || _this.page == 5) {
            /* 所有数据加载完毕 */
            _this.$refs.pullup.$emit(
              "pullup.loadedDone"
            );
            return;
          }

          /* 单次请求数据完毕 */
          _this.$refs.pullup.$emit("pullup.finishLoad");

          _this.page++;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
img{
	width: 100%
}
</style>