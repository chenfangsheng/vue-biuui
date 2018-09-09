<template>
	<biu-layout>
		<biu-body slot='body' bg='#fff'>
			<div class="biu-public-pd">
				<h5 class="biu-remarks">size->small</h5>
				<biu-button size='small'>Default</biu-button>
				<biu-button size='small' type='primary'>Primary</biu-button>
				<biu-button size='small' type='success'>Success</biu-button>
				<biu-button size='small' type='info'>Info</biu-button>
				<biu-button size='small' type='warn'>warn</biu-button>
				<biu-button size='small' type='error'>Error</biu-button>
				<biu-button size='small' type='dashed'>Dashed</biu-button>
				
				<h5 class="biu-remarks">size->default</h5>
				<biu-button>Default</biu-button>
				<biu-button type='primary'>Primary</biu-button>
				<biu-button type='success'>Success</biu-button>
				<biu-button type='info'>Info</biu-button>
				<biu-button type='warn'>warn</biu-button>
				<biu-button type='error'>Error</biu-button>
				<biu-button type='dashed'>Dashed</biu-button>
				
				<h5 class="biu-remarks">size->large</h5>
				<biu-button size='large'>Default</biu-button>
				<biu-button size='large' type='primary'>Primary</biu-button>
				<biu-button size='large' type='success'>Success</biu-button>
				<biu-button size='large' type='info'>Info</biu-button>
				<biu-button size='large' type='warn'>warn</biu-button>
				<biu-button size='large' type='error'>Error</biu-button>
				<biu-button size='large' type='dashed'>Dashed</biu-button>
				
			</div>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped="true">
button{
	margin-top: .2rem;
}
</style>