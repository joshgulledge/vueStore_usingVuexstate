import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      user: null,
      products: [{
        id: '24ab7b14-f935-44c1-b91b-8598123ea54a',
        title: 'Headlight Helmet',
        price: 59.95,
        category: 'Hiking',
        description: 'Protect your noggin and light your way. Get the best of both worlds with this 300 lumen lighted helmet.',
        image: 'headlight-helmet.jpg',
      }, {
        id: 'cebbc5ba-f49a-4708-b3dc-51a346b3231e',
        title: 'Ultimate Dreamline Kayak',
        price: 649.99,
        category: 'Kayaking',
        description: 'Carbon fiber body with platinum hooks make this the perfect gift for that special someone.',
        image: 'ultimate-dreamline-kayak.jpg',
      }, {
        id: '6130cdd4-071a-4559-8072-35f0fbec5516',
        title: 'Moccasins',
        price: 35.95,
        category: 'Climbing',
        description: 'Ditch the heavy boots for these lightweight hiking sandals. Perfect for rugged terrain and hiking in streams.',
        image: 'moccasins.jpg',
      }, {
        id: 'dd0343e9-50b2-4f1d-8b87-93c0b34f3d35',
        title: 'Firebrand Kayak',
        price: 499.95,
        category: 'Kayaking',
        description: 'Why blend in when you can scream speed with this hot and sleek firebrand?',
        image: 'firebrand-kayak.jpg',
      }, {
        id: '7277956e-795f-4c0f-9861-cf03635df5ea',
        title: 'Mega Pokey Kit',
        price: 129.99,
        category: 'Climbing',
        description: 'Everything you need for traction on that thrilling ice climb.',
        image: 'mega-pokey-kit.jpg',
      }],
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
});

export default store;
