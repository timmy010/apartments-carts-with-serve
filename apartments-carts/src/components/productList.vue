<template>
  <ul class="catalog__list">
    <productItem v-for="product in products" :key="product.id" :product="product" />
  </ul>
</template>

<script>
import productItem from "@/components/productItem.vue";

export default {
  components: { productItem },
  props: {
    products: Array,
  },
};
</script>

<style lang="scss">
.catalog__list {
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  list-style: none;
  padding: 0;
}
</style>
