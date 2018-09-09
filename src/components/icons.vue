<template>
	<biu-layout>
		<biu-body slot='body'>
			
      <biu-grid-wrap :rows='4' height='2rem'>
				<biu-grid-item v-for="(item,index) in iconList" :key='index'>
          <div>
            <biu-icon :name='item.name'></biu-icon>
            <p>{{item.name}}</p>
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
      iconList: [
        {name: 'zan-solid'},
        {name: 'zan'},
        {name: 'welfare'},
        {name: 'king'},
        {name: 'king'},
        {name: 'flower'},
        {name: 'login-out'},
        {name: 'click'},
        {name: 'clock'},
        {name: 'video'},
        {name: 'money'},
        {name: 'hot'},
        {name: 'wifi'},
        {name: 'scan'},
        {name: 'refresh'},
        {name: 'tel'},
        {name: 'more'},
        {name: 'male'},
        {name: 'password'},
        {name: 'female'},
        {name: 'sales'},
        {name: 'notice'},
        {name: 'computer'},
        {name: 'menu'},
        {name: 'alien'},
        {name: 'range'},
        {name: 'color'},
        {name: 'list'},
        {name: 'collapse'},
        {name: 'switch'},
        {name: 'badge'},
        {name: 'swiper'},
        {name: 'tab'},
        {name: 'pull'},
        {name: 'tick'},
        {name: 'fork'},
        {name: 'linkage'},
        {name: 'top-three'},
        {name: 'top-two'},
        {name: 'help'},
        {name: 'more-solid'},
        {name: 'select-solid'},
        {name: 'select'},
        {name: 'like-solid'},
        {name: 'like'},
        {name: 'phone'},
        {name: 'camera'},
        {name: 'home'},
        {name: 'email'},
        {name: 'circle'},
        {name: 'checkbox'},
        {name: 'arrow-right'},
        {name: 'popup'},
        {name: 'time'},
        {name: 'time'},
        {name: 'action-sheet'},
        {name: 'city'},
        {name: 'flexbox'},
        {name: 'preview'},
        {name: 'radio'},
        {name: 'slider'},
        {name: 'top'},
        {name: 'grid'},
        {name: 'grid'},
        {name: 'media-list'},
        {name: 'error'},
        {name: 'warn'},
        {name: 'success'},
        {name: 'button'},
        {name: 'dialog'}
      ]
    }
  }
}
</script>

<style lang="scss">

</style>