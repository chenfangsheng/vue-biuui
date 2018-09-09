<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			<h5 class="biu-remarks">横向轮播</h5>
			<biu-slider autoplay="3000" style="height: 200px;">
				<biu-slider-item>
          <div class="biu-block biu-bg-primary"></div>
        </biu-slider-item>
        <biu-slider-item>
          <div class="biu-block biu-bg-success"></div>
        </biu-slider-item>
        <biu-slider-item>
          <div class="biu-block biu-bg-warning"></div>
        </biu-slider-item>
			</biu-slider>
			
			<h5 class="biu-remarks">竖向轮播</h5>
			<div style="height: 200px;">
				<biu-slider autoplay="3000" direction="vertical">
					<biu-slider-item>
	          <div class="biu-block biu-bg-info"></div>
	        </biu-slider-item>
	        <biu-slider-item>
	          <div class="biu-block biu-bg-error"></div>
	        </biu-slider-item>
	        <biu-slider-item>
	          <div class="biu-block biu-bg-default"></div>
	        </biu-slider-item>
				</biu-slider>
			</div>
				
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">

</style>