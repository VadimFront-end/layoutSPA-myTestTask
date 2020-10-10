<template>
  <div class="open-tab" :style="{background: 'url(' + require('../assets/images/' + item.imag + '.jpg')}">
    <div class="filter">
      <div class="title-for-open-tab">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tt-open-tab",
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>

.open-tab {
  margin-top: 10px;
  height: 97px;
  border-radius: 6px;
  cursor: pointer;
}
.filter {
  background: rgba(29, 29, 29, 0.65);
  width: 100%;
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-for-open-tab {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}
</style>