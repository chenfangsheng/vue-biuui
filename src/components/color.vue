<template>
	<biu-layout>
		<biu-body slot='body'>

			<biu-grid-wrap :rows='3' :line='false' title="主打色">
        <biu-grid-item v-for="(item,index) in list" :key='index'>
          <div class="color-box" :style="{backgroundColor: item.color}">
            <div v-text="item.name"></div>
            <div v-text="item.color"></div>
          </div>
        </biu-grid-item>
      </biu-grid-wrap>

      <biu-grid-wrap :rows='3' :line='false' title="中性色">
        <biu-grid-item v-for="(item,index) in list1" :key='index'>
          <div class="color-box" :style="{backgroundColor: item.color, color: index > 2 ? '#657180' : '#fff'}">
            <div v-text="item.name"></div>
            <div v-text="item.color"></div>
          </div>
        </biu-grid-item>
      </biu-grid-wrap>

		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
    return {
      list: [
        {name: 'primary',color: '#2d8cf0'},
        {name: 'info',color: '#2db7f5'},
        {name: 'success',color: '#19be6b'},
        {name: 'warning',color: '#ff9900'},
        {name: 'error',color: '#ed4014'},
        {name: 'default',color: '#333333'}
      ],
      list1: [
        {name: '主标题色',color: '#17233d'},
        {name: '正文色',color: '#515a6e'},
        {name: '辅助标题色',color: '#888888'},
        {name: '失效/禁用色',color: '#c5c8ce'},
        {name: '边框色',color: '#ececec'},
        {name: '背景色',color: '#f8f8f9'}
      ]
    }
  }
}
</script>

<style lang="scss">
.color-box{
  border-radius: 4px;
  padding: .3rem 0;
  margin: 0 .2rem;
  color: #fff;
}
</style>