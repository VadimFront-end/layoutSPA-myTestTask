<template>
  <div class="tt-eats-constructor">
    <router-link :to="'/'">
      <ttLinkBack :title="linksTitle" @click="$store.commit('HIDE_FOOTER')"/>
    </router-link>
    <div style="margin: 14px 0">
      <p>Конструктор еды  «Ужин дома» – сервис по доставке готовых наборов блюд, с пошаговым рецептом от ресторана «Тито Арканум».</p>
      <p>Все для сбалансированного завтрака, обеда и ужина!</p>
    </div>
    <div style="display: flex;justify-content: space-between">
      <button class="bttn" style="margin-right: 15px">Кухни мира</button>
      <button class="bttn">Разделы меню</button>
    </div>
    <ttContainerForProduct
      v-for="(product,index) in PRODUCTS"
      :key="index"
      :product="product"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ttContainerForProduct from './tt-container-for-product'
import ttLinkBack from './tt-link-back'
export default {
  name: "tt-eats-constructor",
  components: {
    ttContainerForProduct,
    ttLinkBack
  },
  data() {
    return {
      linksTitle: 'Конструктор еды'
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS'
    ])
  },
  mounted() {
    this.$store.commit('HIDE_FOOTER', true);
  }
}
</script>

<style>
.tt-eats-constructor {
  padding-bottom: 40px;
}
.bttn {
  background: #32564A;
  border: 1px solid #32564A;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  color: white;
  font-weight: 600;
  width: 48%;
  padding: 40px 0;
  display: block;
}
.bttn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}
.bttn:active {
  box-shadow: 0 0 10px rgba(0.5, 0.5, 0.5, 0.9);
}
</style>