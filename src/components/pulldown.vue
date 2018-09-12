<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>

			<biu-pulldown :callback="loadList" ref="pulldown">
				<biu-grid-wrap :rows='2' height='50vw'>
					<biu-grid-item v-for="(item,index) in list" :key='index'>
						<img class="biu-preview-img" :src="item.url" alt="" @click="show(index)">
					</biu-grid-item>
				</biu-grid-wrap>
			</biu-pulldown>

			<biu-backtop iconColor='#19be6b'></biu-backtop>
			<biu-preview :list="imgList" ref="previewer"></biu-preview>
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
	computed: {
    imgList () {
      return this.list.map(one => {
        return {src: one.url};
      })
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
          _this.list = [..._list.results,..._this.list];

					/* 单次请求数据完毕 */
					_this.$refs.pulldown.$emit("pulldown.finishLoad");
         	 	
          _this.page++;
        });
		},
		show (index) {
      this.$refs.previewer.show(index)
    }
  }
};
</script>

<style lang="scss">
img{
	width: 100%;
	min-width: 50vw;
	min-height: 50vw;
}
</style>