<template>
  <div class="tt-content">
    <ttSearcher/>
    <router-view/>
  </div>
</template>

<script>
import ttSearcher from '../components/tt-searcher'

export default {
name: "tt-content",
  components: {
    ttSearcher,
  }
}
</script>

<style>
.tt-content {
  width: 384px;
  margin: auto;
}
</style>