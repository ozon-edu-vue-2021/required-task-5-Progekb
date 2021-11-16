<template>
  <div>
    <div v-if="!foodFavorite.length">Нет избранных товаров</div>
    <div
      v-else
      class="foodfavorite-items"
    >
      <div
        v-for="foodItem in foodFavorite"
        :key="foodItem.id"
        class="foodfavorite-item"
      >
        <img class="foodfavorite-item__img" :src="getImg(foodItem.img)" :alt="foodItem.dish">
        <div class="foodfavorite-item__price">{{ foodItem.price }} р.</div>
        <div class="foodfavorite-item__title">{{ foodItem.dish }}</div>
        <v-btn
          class="foodfavorite-item__delete"
          icon
          @click="removefoodFavorite(foodItem)"
        >
          <v-icon>delete</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorite",
  data() {
    return {};
  },
  computed: {
    foodFavorite() {
      return this.$store.state.foodFavorite;
    },
  },
  methods: {
    getImg(img) {
      return require("../assets/images/" + img);
    },
    removefoodFavorite(item) {
      this.$store.commit("removeFoodFavorite", item.id);
    },
  },
};
</script>

<style scoped>
.foodfavorite-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

.foodfavorite-item {
  position: relative;
}

.foodfavorite-item__img {
  height: 150px;
  margin-bottom: 10px;
}

.foodfavorite-item__title {
  margin-bottom: 10px;
}

.foodfavorite-item__price {
  color: orange;
  margin-bottom: 10px;
}

.foodfavorite-item__delete {
  position: absolute;
  top: -10px;
  right: 0;
  background: #fff;
}
</style>
