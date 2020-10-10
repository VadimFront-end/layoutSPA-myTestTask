<template>
  <div id="app">
    <ttMainWrapper/>
  </div>
</template>

<script>
import ttMainWrapper from './components/tt-main-wrapper'

export default {
  name: 'App',
  components: {
    ttMainWrapper
  }
}
</script>

<style>
@media (max-width: 390px) {
  #app {
    display: none;
  }
}
</style>
