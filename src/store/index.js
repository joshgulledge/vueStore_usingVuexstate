import { createStore } from 'vuex';

import productsModule from './modules/products';
import usersModule from './modules/users';

const store = createStore({
  modules: {
    products: productsModule,
    users: usersModule,
  },
  state() {
    return {};
  },
  // always change state via a mutation or vue will not render correct data
  mutations: {},
  actions: {},
});

export default store;
