import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    products: null,
    isLoading: false,
    isLoadingErr: false,
  },
  mutations: {
    updateIsLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    loadProducts(context) {
      context.commit('updateIsLoading', true);
      axios.get("http://localhost:3000/api/apartments/")
        .then((response) => {
          this.state.products = response.data;
        })
        .catch(() => {
          this.state.isLoadingErr = true
        })
        .then(() => context.commit('updateIsLoading', false));
    },
    addLike(context, payload) {
      context.commit('updateIsLoading', true);
      const { productId, likeCount } = payload;
      const findProduct = this.state.products.find((product) => product.id === productId);

      axios.put(`http://localhost:3000/api/apartments/${productId}`, {
        ...findProduct,
        likeCount
      })
        .then((response) => {
          findProduct.likeCount = response.data.likeCount;
        })
        .catch(() => {
          this.state.isLoadingErr = true
        })
        .then(() => context.commit('updateIsLoading', false));
    },
  },
});
