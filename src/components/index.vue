<template>
	<biu-layout>
		<biu-body slot='body'>
			<div class="logo biu-center">
				<img src="../../static/images/logo.png"/>
			</div>
			<div class="info">
				一个基于VUE的移动端UI组件库 & BIU-UI
			</div>
			<!--demo link-->
			<biu-grid-wrap :rows='3'>
				<biu-grid-item v-for="(item,index) in list" :key='index'>
					<router-link :to="{path: item.link}">
						<biu-icon :name='item.name' :color='item.color'></biu-icon>
						<span class="grids-text" v-text="item.text"></span>
					</router-link>
				</biu-grid-item>
			</biu-grid-wrap>

			<h5 class="biu-remarks">更多功能正在开发中...</h5>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{name: 'color', text: 'Color', link: '/color', color: '#19be6b'},
				{name: 'button', text: 'Button', link: '/button', color: '#2db7f5'},
				{name: 'grid', text: 'Grid', link: '/grid', color: '#3ccd1c'},
				{name: 'badge', text: 'Badge', link: '/badge', color: '#fc746c'},
				{name: 'radio', text: 'Radio', link: '/radio', color: '#2db7f5'},
				{name: 'success', text: 'Checkbox', link: '/checkbox', color: '#8b78e2'},
				{name: 'switch', text: 'Switch', link: '/switch', color: '#fc746c'},
				{name: 'alien', text: 'Icons', link: '/icons', color: '#fc746c'},
				{name: 'flexbox', text: 'FlexBox', link: '/flexBox', color: '#2db7f5'},
				{name: 'list', text: 'List', link: '/list', color: '#ff9900'},
				{name: 'tab', text: 'Tab', link: '/tab', color: '#8b78e2'},
				{name: 'collapse', text: 'Collapse', link: '/collapse', color: '#fc746c'},
				{name: 'dialog', text: 'Dialog', link: '/dialog', color: '#3cc51e'},
				{name: 'slider', text: 'Slider', link: '/slider', color: '#ed4014'},
				{name: 'top-three', text: 'Backtop', link: '/backtop', color: '#fc746c'},
				{name: 'popup', text: 'Popup', link: '/popup', color: '#ff9900'},
				{name: 'preview', text: 'Preview', link: '/preview', color: '#8b78e2'},
				{name: 'action-sheet', text: 'ActionSheet', link: '/actionSheet', color: '#ff9900'},
				{name: 'linkage', text: 'Linkage', link: '/linkage', color: '#19be6b'},
				{name: 'time', text: 'DateSelect', link: '/dateSelect', color: '#fc746c'},
				{name: 'pull', text: 'Pull', link: '/pull', color: '#2db7f5'},
				{name: 'swiper', text: 'Swiper', link: '/swiper', color: '#fc746c'},
			]
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
.logo{
	padding: .3rem 0 .2rem;
	img{
		height: 1.5rem;
	}
}
.info{
	width: 100%;
	text-align: center;
	font-size: .32rem;
	color: #00a480;
	padding-bottom: .5rem;
}
</style>