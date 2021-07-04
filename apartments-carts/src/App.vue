<template>
  <main class="container">
    <h1 class="title">Каталог</h1>
    <section class="catalog">
      <baseLoader v-if="productsLoading" text="Секунду, загружаем апартаменты..." />
      <baseErrorLoad v-if="productsLoadingFailed" @loadSmth="this.loadProducts" />

      <productList :products="products" />
    </section>
  </main>
</template>

<script>
import productList from "@/components/productList.vue";
import baseLoader from "@/components/baseLoader.vue";
import baseErrorLoad from "@/components/baseErrorLoad.vue";

export default {
  name: "App",
  computed: {
    products() {
      return this.$store.state.products;
    },
    productsLoading() {
      return this.$store.state.isLoading;
    },
    productsLoadingFailed() {
      return this.$store.state.isLoadingErr;
    },
  },
  components: {
    productList,
    baseLoader,
    baseErrorLoad,
  },
  methods: {
    loadApartments() {
      this.$store.dispatch("loadProducts");
    },
  },
  created() {
    this.loadApartments();
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
button {
  border: 0;
  background-color: unset;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  width: 100%;
  max-width: 1900px;
  padding: 10px;
}
.catalog {
  width: 100%;
}
.title {
  text-align: center;
}
</style>
