import axios from 'axios';


export default {
    state() {
      return {
        user: null,
      };
    },
    // always change state via a mutation or vue will not render correct data
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
    },
    actions: {
      registerUser({ commit }, user) {
        return axios.post('/api/register', user)
          .then((result) => commit('setUser', result.data));
      },
      signIn({ commit }, userLogin) {
        return axios.post('/api/sign-in', userLogin)
          .then((result) => commit('setUser', result.data));
      },
    },
  }