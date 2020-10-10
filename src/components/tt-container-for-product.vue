<template>
  <div class="tt-container-for-product">
    <div class="title-and-link">
      <div class="title-for-product">{{product.title}}</div>
      <div class="link-to-all-products">Все блюда</div>
    </div>
    <div class="description-for-product">{{product.descriptionCountry}}</div>
    <div class="product-items">
      <img src="../assets/images/product1.png" alt="eat">
      <img src="../assets/images/product2.png" alt="eat">
      <div class="title-for-product-item">{{product.titleProduct[0]}}</div>
      <div class="title-for-product-item">{{product.titleProduct[1]}}</div>
      <div class="description-for-product-item">{{product.descriptionProduct[0]}}</div>
      <div class="description-for-product-item">{{product.descriptionProduct[1]}}</div>
      <div class="price-for-product">{{product.price[0]}}</div>
      <div class="price-for-product">{{product.price[1]}}</div>
      <button class="product-to-pocket">В корзину</button>
      <button class="product-to-pocket">В корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tt-container-for-product",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style>
.product-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
}
.tt-container-for-product {
  margin-top: 25px;
}
.title-for-product {
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 22px;
  color: #32564A;
}
.title-and-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px
}
.link-to-all-products {
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 15px;
  text-decoration-line: underline;
  color: #32564A;
  cursor: pointer;
}
.description-for-product {
  margin-bottom: 20px;
  line-height: 17px;
  color: #000000;
}
.title-for-product-item {
  margin-top: 10px;
  font-weight: 600;
  font-size: 1rem;
  line-height: 20px;
  text-align: center;
}
.description-for-product-item {
  font-family: 'Montserrat-Light', sans-serif;
  font-size: 0.85rem;
  line-height: 15px;
  text-align: center;
}
.price-for-product {
  font-size: 1.2rem;
  text-align: center;
  margin: 6px 0;
}
.product-to-pocket {
  padding: 11px 0;
  width: 100%;
  background: #C4D8B7;
  border-radius: 20px;
  color: #32564A;
  font-weight: 600;
}
.product-to-pocket:active {
  color: white;
}
</style>