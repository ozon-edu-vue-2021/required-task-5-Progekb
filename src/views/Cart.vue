<template>
  <div>
    <div v-if="!foodCart.length">Корзина пуста</div>
    <div
      v-else
      class="foodcart-items"
    >
      <v-row
        v-for="foodItem in foodCart"
        :key="foodItem.id"
        class="foodcart-item"
      >
        <v-col sm="1">
          <img class="foodcart-item__img" :src="getImg(foodItem.img)" :alt="foodItem.dish">
        </v-col>
        <v-col sm="8">
          <div class="foodcart-item__title">{{ foodItem.dish }}</div>
          <div class="foodcart-item__price">{{ foodItem.price }} р.</div>
        </v-col>
        <v-col sm="1">
          <div class="foodcart-item__price">{{ sumItem(foodItem) }} р.</div>
        </v-col>
        <v-col sm="1">
          <v-text-field
            v-model.number="foodItem.count"
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
      <div>Общая стоимость: {{ cartSum }} р.</div>
      <v-btn
        color="success"
        @click="order"
      >
        Оформить
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    foodCart() {
      return this.$store.state.foodCart;
    },
    cartSum() {
      return this.$store.getters.cartSum;
    },
  },
  methods: {
    getImg(img) {
      return require("../assets/images/" + img);
    },
    sumItem(foodItem) {
      if (foodItem.count === 0) this.removeFoodCart(foodItem);
      return foodItem.price * foodItem.count;
    },
    removeFoodCart(item) {
      this.$store.commit("removeFoodCart", item.id);
    },
    order() {
      let orderList = ``;
      for (let food of this.foodCart) {
        orderList += `${food.dish}
Цена: ${food.price} р.
Кол-во: ${food.count}
Сумма: ${food.price * food.count} р.
-------------
`;
      }
      orderList += `Итого: ${this.cartSum} р.`;
      alert(orderList);
    },
  },
};
</script>

<style scoped>
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
