<template>
	<biu-layout>
		<biu-body slot='body'>
			
			<div class="biu-public-pd">
				<h5 class="biu-remarks">Horizontal</h5>
				<biu-flexbox>
					<div class="flexbox-horizontal-wrap">&lt;div&gt;</div>
					<biu-flexbox-item>
						<div class="flexbox-horizontal-wrap">&lt;biu-flexbox-item&gt;</div>
					</biu-flexbox-item>
					<div class="flexbox-horizontal-wrap">&lt;div&gt;</div>
				</biu-flexbox>
				
				<biu-flexbox>
					<biu-flexbox-item>
						<div class="flexbox-horizontal-wrap">&lt;biu-flexbox-item&gt;</div>
					</biu-flexbox-item>
					<biu-flexbox-item>
						<div class="flexbox-horizontal-wrap">&lt;biu-flexbox-item&gt;</div>
					</biu-flexbox-item>
				</biu-flexbox>
				
				<h5 class="biu-remarks">Vertical</h5>
				<biu-flexbox direction="vertical">
					<biu-flexbox-item>
						<div>&lt;biu-flexbox-item&gt;</div>
					</biu-flexbox-item>
					<biu-flexbox-item>
						<div>&lt;biu-flexbox-item&gt;</div>
					</biu-flexbox-item>
				</biu-flexbox>
				
				<biu-flexbox direction="vertical" style='height: 5rem;'>
					<div class="flexbox-vertical-wrap">&lt;div&gt;</div>
					<biu-flexbox-item>
						<div>&lt;biu-flexbox-item&gt;</div>
					</biu-flexbox-item>
					<div class="flexbox-vertical-wrap">&lt;div&gt;</div>
				</biu-flexbox>
			</div>
				
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">
.biu-flexbox-horizontal{
	background: #fff;
	padding: .2rem .1rem;
	border: 1px solid #dcdcdc;
	margin-top: .2rem;
	.flexbox-horizontal-wrap{
		background-color: #dcdcdc;
	  margin: 0 .1rem;
	  height: .7rem;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  color: #6b6b6b;
	  padding: 0 .3rem;
	  font-size: .2rem;
	}
}
.biu-flexbox-vertical{
	margin-top: .2rem;
	padding: .1rem .2rem;
	background: #fff;
	border: 1px solid #dcdcdc;
	.biu-flexbox-item{
		margin: .1rem 0;
		background-color: #dcdcdc;
		>div{
			height: .7rem;
			display: flex;
		  align-items: center;
		  justify-content: center;
		  color: #6b6b6b;
		  font-size: .2rem;
		}
	}
	.flexbox-vertical-wrap{
		width: 100%;
		background-color: #dcdcdc;
	  margin: .1rem 0;
	  height: .7rem;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  color: #6b6b6b;
	  font-size: .2rem;
	  .biu-flexbox-item{
	  	background-color: #dcdcdc;
	  }
	}
}

</style>