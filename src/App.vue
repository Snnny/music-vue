<template>
  <div id="app">
  	<div>

      <router-view  name="head"></router-view>
      <router-view  name="nav"></router-view>
      <router-view  name="play"></router-view>
      <router-view ></router-view>
  		<!-- <music-header></music-header>
    	<music-nav></music-nav> -->
  	</div>
   
  </div>
</template>

<script>

</script>

<style lang="sass">
@import './assets/reset.scss';

</style>
