<template>
  <li class="catalog__item">
    <img :src="require(`@/assets/img/${product.image}`)" alt="Название товара" class="catalog__item-img" />
    <h3 class="catalog__title">
      <a href="#" class="catalog__title-link">
        {{ product.title }}
      </a>
    </h3>
    <span class="catalog__price"> {{ formattedPrice }} ₽ </span>
    <!-- eslint-disable-next-line -->
    <baseLike v-model:likeCount="likeCount" />
  </li>
</template>

<script>
import baseLike from "@/components/baseLike.vue";

export default {
  props: {
    product: Object,
  },
  components: {
    baseLike,
  },
  computed: {
    likeCount: {
      get() {
        return this.product.likeCount;
      },
      set(value) {
        this.$store.dispatch("addLike", { productId: this.product.id, likeCount: value });
      },
    },
    formattedPrice() {
      return new Intl.NumberFormat().format(this.product.price);
    },
  },
  methods: {
    addLike(value) {
      this.$store.dispatch("updateLikeCount", { productId: this.product.id, likeCount: value });
    },
  },
};
</script>

<style lang="scss">
.catalog {
  &__item {
    position: relative;
    box-shadow: 2px 2px 9px -3px rgba(0, 0, 0, 0.48);
    border-radius: 8px;
  }
  &__item-img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }
  &__title {
    margin: 0;
    padding: 0;
  }
  &__title-link {
    text-decoration: none;
    color: #000;
  }
  &__price {
    font-weight: 700;
    font-size: 24px;
  }
  &__title,
  &__price {
    margin: 10px 10px;
  }
}
</style>
