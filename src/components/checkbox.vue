<template>
	<biu-layout>
		<biu-body slot='body'>
			
			<biu-list-wrap title='普通示例'>
				<biu-list-cell type='div'>
					<biu-checkbox v-model="checkboxDemo" val="true" slot="left">是否同意给BIU-UI个好评</biu-checkbox>
					<span slot='right'>答案：{{checkboxDemo ? '同意' : '不同意'}}</span>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='disabled'>
				<biu-list-cell type='div'>
					<biu-checkbox-group v-model="checkboxDemo1Val" slot='left'>
						<biu-checkbox :val="itme.val" v-for="(itme, i) in checkboxDemo1List" :key='i' :disabled='itme.disabled'>{{itme.text}}</biu-checkbox>
					</biu-checkbox-group>
					<span slot='right'>答案：{{checkboxDemo1Val ? checkboxDemo1Val : '未选择'}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='更改图标颜色'>
				<biu-list-cell type='div'>
					<biu-checkbox-group v-model="checkboxDemo2Val" slot='left' color='#2db7f5'>
						<biu-checkbox val="A"></biu-checkbox>
						<biu-checkbox val="B"></biu-checkbox>
						<biu-checkbox val="C"></biu-checkbox>
					</biu-checkbox-group>
					<span slot='right'>答案：{{checkboxDemo2Val}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='更改图标大小'>
				<biu-list-cell type='div'>
					<biu-checkbox-group v-model="checkboxDemo3Val" slot='left' size="30">
						<biu-checkbox val="A"><span style="font-size: 24px;">A</span></biu-checkbox>
						<biu-checkbox val="B"><span style="font-size: 24px;">B</span></biu-checkbox>
						<biu-checkbox val="C"><span style="font-size: 24px;">C</span></biu-checkbox>
					</biu-checkbox-group>
					<span slot='right'>答案：{{checkboxDemo3Val}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='更改图标形状'>
				<biu-list-cell type='div'>
					<biu-checkbox-group v-model="checkboxDemo5Val" slot='left'>
						<biu-checkbox val="A" shape='circle'></biu-checkbox>
						<biu-checkbox val="B" shape='circle'></biu-checkbox>
						<biu-checkbox val="C" shape='circle'></biu-checkbox>
					</biu-checkbox-group>
					<span slot='right'>答案：{{checkboxDemo5Val}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='vertical垂直排列'>
				<biu-list-cell type='div'>
					<biu-checkbox-group v-model="checkboxDemo4Val" slot='left' vertical>
						<biu-checkbox val="A"></biu-checkbox>
						<biu-checkbox val="B"></biu-checkbox>
						<biu-checkbox val="C"></biu-checkbox>
					</biu-checkbox-group>
					<span slot='right'>答案：{{checkboxDemo4Val}}</span>
				</biu-list-cell>
			</biu-list-wrap>

		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			checkboxDemo: true,
			checkboxDemo1Val: [],
			checkboxDemo2Val: ['A'],
			checkboxDemo3Val: ['A'],
			checkboxDemo4Val: ['A'],
			checkboxDemo5Val: ['A'],
			checkboxDemo1List: [
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