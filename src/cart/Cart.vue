<template>
  <h1 class="header">
    Your Cart
  </h1>
  <div class="product-list">
    <div class="product" v-for="cartItem in cartItems" v-bind:key="cartItem.id">
      <span>
        <img :src="require(`@/assets/images/products/${cartItem.image}`)" class="product-image"/>
      </span>
      <div class="product-description">
        <span class="title">{{cartItem.title}}</span>
        <span class="description">{{cartItem.description}}</span>
        <span class="category">Product Category: {{cartItem.category}}</span>
      </div>
      <div class="price-section">
        <span class="price">${{cartItem.price.toFixed(2)}}</span>
      </div>
    </div>
  </div>
  <div class="total-line">
    <span>Cart Total:</span>
    <span class="total">${{cartTotal.toFixed(2)}}</span>
  </div>
</template>

<script>

export default {
  name: 'Cart',
  data() {
    return {
      filter: null,
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    cartTotal() {
      if (this.$store.state.cart.length > 0) {
        return this.$store.state.cart.reduce((curr, next) => curr + next.price, 0);
      }
      return 0;
    },
  },
};
</script>

<style scoped>
  .header {
    color: #336699;
    text-align: center;
  }
  .product-list {
    display:flex;
    flex-direction:column;
  }
  .product:nth-child(1) {
    border-top: 2px solid #ccc;
  }
  .product {
    display: flex;
    padding:25px 20px;
    border-bottom: 2px solid #ccc;
  }
  .product-image {
    width:200px;
  }
  .product-description {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
  }
  .category {
    justify-self: end;
    color: #999;
  }
  .title {
    font-size: 20px;
    color: #336699;
    font-weight: bold;
    color: #555;
    margin:10px 0 5px 0;
  }
  .description {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
    margin-right: 25px;

  }
  .price-section {
    display: flex;
    margin: auto 0 auto auto;
    border-left: 1px solid #ccc;
    font-size: 25px;
    padding: 32px 0;
    padding-left: 35px;
    text-align: right;
  }
  .price {
    color: #336699;
    width: 90px;
  }
  .total-line {
    display: flex;
    justify-content:flex-end;
    padding-top: 20px;
    font-size: 25px;
    color: #336699;
  }
  .total {
    margin-left: 50px;
    padding-right: 20px;
  }
</style>
