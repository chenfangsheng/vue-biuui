<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			<div class="pd03">
				<biu-button size='large' @click.native="showToast(false, 'default')">toast->type：defail</biu-button>
				<biu-button size='large' type='primary' @click.native="showToast(false, 'primary')">toast->type：primary</biu-button>
				<biu-button size='large' type='success' @click.native="showToast('success')">toast->icon：success</biu-button>
				<biu-button size='large' type='error' @click.native="showToast('error')">toast->icon：error</biu-button>
				<biu-button size='large' type='warn' @click.native="showToast('warn')">toast->icon：warn</biu-button>
				
				<biu-button size='large' @click.native="showAlert('default')">alert->type：default</biu-button>
				<biu-button size='large' type='success' @click.native="showAlert('success')">alert->type：success</biu-button>
				
				<biu-button size='large' @click.native="showConfirm">confirm->type：default</biu-button>
				
				<biu-button size='large' @click.native="showLoading('defail')">loading->type：defail</biu-button>
				<biu-button size='large' type='primary' @click.native="showLoading('primary')">loading->type：primary</biu-button>
				<biu-button size='large' type='defail' @click.native="showLoading('defail', true)">loading->vertical：true</biu-button>
			</div>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	methods: {
		showToast(icon,type) {
			if(icon) {
				this.$dialog.toast({mes: icon, icon: icon});
			}else{
				this.$dialog.toast({type: type, mes: 'Hello World!', timeout: 2000});
			}
		},
		showAlert(type) {
			let _this = this;
			this.$dialog.alert({
				type: type,
				title: '友情提醒', 
				mes: '点击确定有惊喜!',
				callback: () => {
					_this.$dialog.toast({mes: '你点了确定！'});
				}
			});
		},
		showConfirm(type) {
			let _this = this;
			this.$dialog.confirm({
				type: type,
				title: '修改姓名',
				edit: true,
				placeholder: '请输入您的姓名...',
				callback: (data) => {
					this.$dialog.toast({mes: '您的姓名是：' + data.data});
				}
			});
		},
		showLoading(type, direction) {
			this.$dialog.loading.open({type: type, mes: '正在加载', vertical: direction ? true : false});
			setTimeout(() => {
				this.$dialog.loading.close();
			},2000)
		}
	}
}
</script>

<style lang="scss">
.pd03{
	padding: .3rem .3rem .8rem;
}
</style>