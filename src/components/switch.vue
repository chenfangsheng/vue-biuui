<template>
	<biu-layout>
		<biu-body slot='body'>
			
			<biu-list-wrap title='普通示例'>
				<biu-list-cell type='div'>
					<biu-switch v-model="switchDemo" slot="left"></biu-switch>
					<span slot='right'>{{switchDemo}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='自定义文字' class="switch-demo-size">
				<biu-list-cell type='div'>
					<biu-switch v-model="switchDemo5" slot="left">
						<span slot="open">开</span>
        		<span slot="close">关</span>
					</biu-switch>
					<biu-switch v-model="switchDemo5" slot="left">
						<i class="iconfont icon-tick" slot="open"></i>
						<i class="iconfont icon-fork" slot="close"></i>
					</biu-switch>
					<biu-switch v-model="switchDemo5" slot="left" size="large">
						<span slot="open">开启</span>
        		<span slot="close">关闭</span>
					</biu-switch>
					<biu-switch v-model="switchDemo5" slot="left" size="large">
						<span slot="open">ON</span>
        		<span slot="close">OFF</span>
					</biu-switch>
					<span slot='right'>{{switchDemo5}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='不同尺寸'>
				<biu-list-cell type='div' class="switch-demo-size">
					<biu-switch v-model="switchDemo1" slot="left" size="large"></biu-switch>
					<biu-switch v-model="switchDemo1" slot="left"></biu-switch>
					<biu-switch v-model="switchDemo1" slot="left" size="small"></biu-switch>
					<span slot='right'>{{switchDemo1}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='加载中'>
				<biu-list-cell type='div' class="switch-demo-size">
					<biu-switch v-model="switchDemo2" slot="left" loading></biu-switch>
					<biu-switch v-model="switchDemo6" slot="left" loading></biu-switch>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='自定义颜色'>
				<biu-list-cell type='div' class="switch-demo-size">
					<biu-switch v-model="switchDemo3" slot="left" color='#2d8cf0'></biu-switch>
					<biu-switch v-model="switchDemo3" slot="left" color='#fc746c'></biu-switch>
					<biu-switch v-model="switchDemo3" slot="left" color='#8b78e2'></biu-switch>
					<span slot='right'>{{switchDemo3}}</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='disabled禁用'>
				<biu-list-cell type='div'>
					<biu-switch v-model="switchDemo4" slot="left" disabled></biu-switch>
				</biu-list-cell>
			</biu-list-wrap>

		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			switchDemo: true,
			switchDemo1: true,
			switchDemo2: true,
			switchDemo3: true,
			switchDemo4: true,
			switchDemo5: true,
			switchDemo6: false
		}
	}
}
</script>

<style lang="scss">
.switch-demo-size{
	span{
		margin-right: .2rem;
		&:last-child{
			margin-right: 0;
		}
	}
}
</style>