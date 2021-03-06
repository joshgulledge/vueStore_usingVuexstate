import axios from 'axios';
import filterProducts from '../../products/filter-products';

export default {
  namespaced: true,
  state() {
    return {
      products: null,
      cart: [],
    };
  },
  getters: {
    getFilteredProducts(state) {
      return (filter) => filterProducts(filter, state.products);
    },
  },
  // always change state via a mutation or vue will not render correct data
  mutations: {
    setCart(state, item) {
      state.cart.push(item);
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    // fetchProducts(context) {
    //   axios.get('/api/products')
    //     .then((result) => context.commit('setProducts', result.data));
    // },
    fetchProducts({ commit }) {
      axios.get('/api/products')
        .then((result) => commit('setProducts', result.data));
    },
  },
};
