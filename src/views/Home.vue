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
        v-for="foodItem of food"
        :key="foodItem.id"
        class="food-item"
      >
        <img class="food-item__img" :src="getImg(foodItem.img)" :alt="foodItem.dish">
        <div class="food-item__title">{{ foodItem.dish }}</div>
        <div class="food-item__price">{{ foodItem.price }} р.</div>
        <div class="food-item__description">{{ foodItem.description }}</div>
        <div class="d-flex">
          <v-text-field
            v-model="numberFood[foodItem.id]"
            value="1"
            type="number"
            hide-details
            single-line
            outlined
            dense
          />
          <v-btn
            color="primary"
            @click="addFoodCart(foodItem)"
          >
            В корзину
          </v-btn>
        </div>
        <v-btn
          class="food-item__favorite"
          icon
          @click="addFoodFavorite(foodItem)"
        >
        <v-icon color="red">favorite_border</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      numberFood: {},
    };
  },
  async created() {
    try {
      const food = await axios.get(
        "https://random-data-api.com/api/food/random_food?size=30"
      );
      this.$store.commit("setFoods", food.data);
    } catch(e) {
      console.log(e.message);
    } finally {
      this.loading = false;
    }
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
    addFoodCart(item) {
      item.count = 3;
      this.$store.commit("addFoodCart", item);
    },
    addFoodFavorite(item) {
      this.$store.commit("addFoodFavorite", item);
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

.food-item__favorite {
  position: absolute;
  top: -16px;
  right: -16px;
  background: #fff;
}
</style>
