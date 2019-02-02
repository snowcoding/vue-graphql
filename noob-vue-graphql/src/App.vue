<template>
  <div id="app">
    <div class="container">
      <SiteHeader></SiteHeader>
      <at-button type="primary">Test</at-button>
    </div>
  </div>
</template>

<script>
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

.inner-container {
  padding: 1em 0;
}

.page-title {
  font-weight: 300;
  font-size: 2em;
}
</style>
