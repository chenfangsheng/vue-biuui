<template>
	<biu-layout>
		<biu-body slot='body'>
			<biu-list-wrap title='自带图标'>
				<biu-list-cell type='div' iconName='dialog' iconColor='#ef4f4f' arrow>
					<span slot='left'>我的消息</span>
					<biu-badge slot='right'>new</biu-badge>
				</biu-list-cell>
				<biu-list-cell type='div' iconName='city' iconColor='#19be6b' arrow>
					<span slot='left'>我的城市</span>
					<span slot='right'>杭州</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='自定义图标'>
				<biu-list-cell type='link' href='http://www.iconfont.cn/' newIcon='iconfont icon-alien' iconColor='#ef4f4f' arrow>
					<span slot='left'>Iconfont</span>
					<span slot='right'>点击前往阿里巴巴矢量图标库</span>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='自定义图片'>
				<biu-list-cell type='div' mediaImg='../../static/images/vue-logo.png' arrow>
					<div slot='left'>
						<span class="biu-media-title">VUE</span>
						<p class="biu-media-info">一个易用、灵活、高效的JavaScript 框架</p>
					</div>
				</biu-list-cell>
				<biu-list-cell type='div' mediaImg='../../static/images/logo.png' arrow>
					<div slot='left'>
						<span class="biu-media-title">BIU UI</span>
						<p class="biu-media-info">试一试呗</p>
					</div>
				</biu-list-cell>
			</biu-list-wrap>

			<biu-list-wrap title='更改自定义图片大小'>
				<biu-list-cell type='div' media-img='../../static/images/react-logo.png' media-width='1.2rem' arrow>
					<div slot='left'>
						<span class="biu-media-title">React</span>
						<p class="biu-media-info">一个用于构建用户界面的 JAVASCRIPT 库</p>
					</div>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='type-div（input）'>
				<biu-list-cell type='div'>
					<span slot='left'>姓名：</span>
					<input type="text" slot='right' placeholder="请输入您的姓名"/>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='type-div（button）'>
				<biu-list-cell type='div' iconName='phone' iconColor='#19be6b'>
					<input slot='right' type="text" placeholder="请输入手机号"/>
					<biu-button slot="right" type='success' @click.native='sendCode' :disabled='downDisabled'>{{downText}}</biu-button>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='type-radio'>
				<biu-list-cell type='radio'>
					<span slot='left'>选项一</span>
					<input slot="right" type="radio" name='radioDemo' value="one" v-model="checkRadio"/>
				</biu-list-cell>
				<biu-list-cell type='radio'>
					<span slot='left'>选项二</span>
					<input slot="right" type="radio" name='radioDemo' value="two" v-model="checkRadio"/>
				</biu-list-cell>
				<biu-list-cell type='div'>
					<span slot='left'>您的选择：</span>
					<span slot='right' v-text="checkRadio"></span>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='type-checkbox'>
				<biu-list-cell type='checkbox'>
					<span slot='left'>选项一</span>
					<input slot="right" type="checkbox" name='checkboxDemo' value="one" v-model="checkboxName"/>
				</biu-list-cell>
				<biu-list-cell type='checkbox'>
					<span slot='left'>选项二</span>
					<input slot="right" type="checkbox" name='checkboxDemo' value="two" v-model="checkboxName"/>
				</biu-list-cell>
				<biu-list-cell type='checkbox'>
					<span slot='left'>选项三</span>
					<input slot="right" type="checkbox" name='checkboxDemo' value="three" v-model="checkboxName" disabled/>
				</biu-list-cell>
				<biu-list-cell type='div'>
					<span slot='left'>您的选择：</span>
					<span slot='right' v-text="checkboxName"></span>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='type-router'>
				<biu-list-cell type='router' :href='{path: "/index"}' arrow>
					<span slot='left'>跳转首页</span>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='type-link'>
				<biu-list-cell type='link' href='https://www.baidu.com/' arrow>
					<span slot='left'>跳转外部链接</span>
				</biu-list-cell>
			</biu-list-wrap>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			checkRadio: 'one',
			checkboxName: ['three'],
			downText: '发送验证码',
			downNum: 60,
			downDisabled: false
		}
	},
	methods: {
		sendCode() {
			let _this = this;
			
			this.$dialog.loading.open({mes: '发送中,请稍候'});
			let timer = setTimeout(() => {
				_this.$dialog.loading.close();
				_this.$dialog.toast({icon: 'success', mes: '发送成功'});
				_this.setCountText();
				_this.countDown();
			},1000);
		},
		countDown() {
			let _this = this;
			
			let timer = setInterval(() => {
				let type = _this.setCountText();
				if(!type){
					clearInterval(timer);
				}
			},1000)
		},
		setCountText() {
			if(this.downNum === 1) {
				this.downNum = 60;
				this.downText = '重新发送';
				this.downDisabled = false;
				return false;
			}else{
				if(this.downNum === 60){
					this.downDisabled = true;
				}
				this.downNum --;
				this.downText = '重新发送(' + this.downNum + ')';
				return true;
			}
		}
	}
}	
</script>

<style lang='scss'>

</style>
