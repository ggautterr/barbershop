<template>
  	<header>
    
    	<nav class="container">
    		<div class="nav-bar">
				<div class="nav">
					<ul>
						<li><router-view class="link" to="/barbershop-info"></router-view></li>
						<li><router-view class="link" to="/barbershop-news"></router-view></li>
						<li><router-view class="link" to="/barbershop-price"></router-view></li>
						<li><router-view class="link" to="/barbershop-shop"></router-view></li>
						<li><router-view class="link" to="/barbershop-contacts"></router-view></li>
					</ul>
				</div>
				<div class="bar">
					<router-view class="link" to="/barbershop-signIn"></router-view>
				</div>
      		</div>
    	</nav>


  	</header>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>

</style>
