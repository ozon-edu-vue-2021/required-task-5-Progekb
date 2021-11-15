<template>
  <div>
    <div v-if="!foodCart.length">Корзина пуста</div>
    <div
      v-else
      class="foodcart-items"
    >
      <v-row
        v-for="foodItem of foodCart"
        :key="foodItem.id"
        class="foodcart-item"
      >
        <v-col sm="1">
          <img class="foodcart-item__img" :src="getImg(foodItem.img)" :alt="foodItem.dish">
        </v-col>
        <v-col sm="9">
          <div class="foodcart-item__title">{{ foodItem.dish }}</div>
          <div class="foodcart-item__price">{{ foodItem.price }} р.</div>
        </v-col>
        <v-col sm="1">
          <v-text-field
            :value="foodItem.count"
            type="number"
            hide-details
            single-line
            outlined
            dense
          />
        </v-col>
        <v-col sm="1">
          <v-btn
            icon
            @click="removeFoodCart(foodItem)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-btn color="success">Оформить</v-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: "Cart",
  data() {
    return {}
  },
  computed: {
    foodCart() {
      return this.$store.state.foodCart;
    },
  },
  methods: {
    getImg(img) {
      return require("../assets/images/" + img);
    },
    removeFoodCart(item) {
      this.$store.commit("removeFoodCart", item.id);
    },
  },
};
</script>

<style scoped>
.foodcart-items {

}

.foodcart-item {
  border-top: 1px solid;
}

.foodcart-item__img {
  height: 100px;
  margin-bottom: 10px;
}

.foodcart-item__title {
  margin-bottom: 10px;
}

.foodcart-item__price {
  color: orange;
  margin-bottom: 10px;
}

</style>
