<template>
	<biu-layout>
		<biu-body slot='body'>

			<biu-list-wrap title='普通示例'>
				<biu-list-cell type='div'>
					<biu-radio-group v-model="radioDemo" slot='left'>
						<biu-radio val="A"></biu-radio>
						<biu-radio val="B"></biu-radio>
						<biu-radio val="C"></biu-radio>
					</biu-radio-group>
					<span slot='right'>答案：{{radioDemo}}</span>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='disabled'>
				<biu-list-cell type='div'>
					<biu-radio-group v-model="radioDemo1Val" slot='left'>
						<biu-radio :val="itme.val" v-for="(itme, i) in radioDemo1List" :key='i' :disabled='itme.disabled'>{{itme.text}}</biu-radio>
					</biu-radio-group>
					<span slot='right'>答案：{{radioDemo1Val ? radioDemo1Val : '未选择'}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='更改图标颜色'>
				<biu-list-cell type='div'>
					<biu-radio-group v-model="radioDemo2Val" slot='left' color='#2db7f5'>
						<biu-radio val="A"></biu-radio>
						<biu-radio val="B"></biu-radio>
						<biu-radio val="C"></biu-radio>
					</biu-radio-group>
					<span slot='right'>答案：{{radioDemo2Val}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='更改图标大小'>
				<biu-list-cell type='div'>
					<biu-radio-group v-model="radioDemo3Val" slot='left' size="30">
						<biu-radio val="A"><span style="font-size: 24px;">A</span></biu-radio>
						<biu-radio val="B"><span style="font-size: 24px;">B</span></biu-radio>
						<biu-radio val="C"><span style="font-size: 24px;">C</span></biu-radio>
					</biu-radio-group>
					<span slot='right'>答案：{{radioDemo3Val}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='vertical垂直排列'>
				<biu-list-cell type='div'>
					<biu-radio-group v-model="radioDemo4Val" slot='left' vertical>
						<biu-radio val="A"></biu-radio>
						<biu-radio val="B"></biu-radio>
						<biu-radio val="C"></biu-radio>
					</biu-radio-group>
					<span slot='right'>答案：{{radioDemo4Val}}</span>
				</biu-list-cell>
			</biu-list-wrap>

		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			radioDemo: 'A',
			radioDemo1Val: '',
			radioDemo2Val: 'A',
			radioDemo3Val: 'A',
			radioDemo4Val: 'A',
			radioDemo1List: [
				{val: '美食', text: '美食', disabled: false},
				{val: '旅游', text: '旅游', disabled: false},
				{val: '运动', text: '运动', disabled: false},
				{val: '游戏', text: '游戏', disabled: true}
			]
		}
	}
}
</script>

<style lang="scss">

</style>