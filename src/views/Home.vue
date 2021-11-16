<template>
  <div>
    <v-progress-circular
      v-if="loading"
      indeterminate
      size="100"
      width="15"
      color="primary"
    />
    <div v-if="food.length" class="food-items">
      <div
        v-for="foodItem in food"
        :key="foodItem.id"
        class="food-item"
      >
        <img class="food-item__img" :src="getImg(foodItem.img)" :alt="foodItem.dish">
        <div class="food-item__title">{{ foodItem.dish }}</div>
        <div class="food-item__price">{{ foodItem.price }} р.</div>
        <div class="food-item__description">{{ foodItem.description }}</div>
        <div class="d-flex justify-space-between">
          <v-text-field
            v-model.number="foodItem.count"
            class="food-item__count shrink"
            min="1"
            type="number"
            hide-details
            single-line
            outlined
            dense
          />
          <v-btn
            :color="isCart(foodItem) ? 'success' : 'primary'"
            @click="addFoodCart(foodItem)"
          >
            {{ isCart(foodItem) ? "В корзину" : "Купить" }}
          </v-btn>
        </div>
        <v-btn
          class="food-item__favorite"
          icon
          @click="addFoodFavorite(foodItem)"
        >
          <v-icon :color="isFavorite(foodItem) ? 'red' : ''">
            {{ isFavorite(foodItem) ? "favorite" : "favorite_border" }}
          </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      numberFood: {},
    };
  },
  async created() {
    await this.$store.dispatch("getFood");
    this.loading = false;
  },
  computed: {
    food() {
      return this.$store.state.food;
    },
  },
  methods: {
    getImg(img) {
      return require("../assets/images/" + img);
    },
    isFavorite(foodItem) {
      return !!this.$store.state.foodFavorite.filter(
        (item) => item.id === foodItem.id
      ).length;
    },
    isCart(foodItem) {
      return !!this.$store.state.foodCart.filter(
        (item) => item.id === foodItem.id
      ).length;
    },
    addFoodCart(item) {
      if (this.isCart(item)) this.$router.push({ name: "cart" });
      else {
        if (!item.count || isNaN(item.count)) item.count = 1;
        this.$store.commit("addFoodCart", item);
      }
    },
    addFoodFavorite(item) {
      if (!this.isFavorite(item)) this.$store.commit("addFoodFavorite", item);
      else this.$store.commit("removeFoodFavorite", item.id);
    },
  },
};
</script>

<style scoped>
.food-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.food-item {
  position: relative;
}

.food-item__img {
  width: 100%;
  margin-bottom: 10px;
}

.food-item__title {
  margin-bottom: 10px;
}

.food-item__price {
  color: orange;
  margin-bottom: 10px;
}

.food-item__description {
  height: 75px;
  overflow: hidden;
  margin-bottom: 10px;
}

.food-item__count {
  width: 100px;
}

.food-item__favorite {
  position: absolute;
  top: -16px;
  right: -16px;
  background: #fff;
}
</style>
