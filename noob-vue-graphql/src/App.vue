<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<template>
  <div id="app">
    <div class="container">
      <SiteHeader></SiteHeader>
      <at-button type="primary">Test</at-button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SiteHeader from './components/core/SiteHeader';

export default {
  name: 'app',
  components: {
    SiteHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
