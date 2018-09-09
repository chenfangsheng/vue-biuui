<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			
			<div class="biu-public-pd">
				<biu-button size='large' type='success' @click.native='show1 = true'>中间弹出</biu-button>
				<biu-button size='large' type='warn' @click.native='show2 = true'>底部弹出</biu-button>
				<biu-button size='large' type='error' @click.native='show3 = true'>左边弹出</biu-button>
				<biu-button size='large' type='error' @click.native='show4 = true'>右边弹出</biu-button>
				
				<biu-popup v-model='show1' position='center' width='80%' bgColor='transparent'>
					<img class="demo-img" src="https://ws1.sinaimg.cn/large/0065oQSqly1fubd0blrbuj30ia0qp0yi.jpg"/>
					<biu-button size='large' type='success' @click.native='show1 = false'>close</biu-button>
				</biu-popup>
				
				<biu-popup v-model='show2' position='bottom'>
					<div class="biu-public-pd">
						<img class="demo-img" src="https://ws1.sinaimg.cn/large/0065oQSqly1fubd0blrbuj30ia0qp0yi.jpg"/>
						<biu-button size='large' type='warn' @click.native='show2 = false'>close</biu-button>
					</div>
				</biu-popup>
				
				<biu-popup v-model='show3' position='left' width='60%'>
					<div class="biu-public-pd">
						<img class="demo-img" src="https://ws1.sinaimg.cn/large/0065oQSqly1fubd0blrbuj30ia0qp0yi.jpg"/>
						<biu-button size='large' type='error' @click.native='show3 = false'>close</biu-button>
					</div>
				</biu-popup>
				
				<biu-popup v-model='show4' position='right' width='60%'>
					<div class="biu-public-pd">
						<img class="demo-img" src="https://ws1.sinaimg.cn/large/0065oQSqly1fubd0blrbuj30ia0qp0yi.jpg"/>
						<biu-button size='large' type='error' @click.native='show4 = false'>close</biu-button>
					</div>
				</biu-popup>
				
			</div>
				
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
		return {
			show1: false,
			show2: false,
			show3: false,
			show4: false
		}
	}
}
</script>

<style lang="scss">
.demo-img{
	width: 100%;
}
</style>