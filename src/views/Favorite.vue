<template>
  <div>
    <div v-if="!foodFavorite.length">Нет избранного</div>
    <div
      v-else
      class="foodfavorite-items"
    >
      <v-row
        v-for="foodItem of foodFavorite"
        :key="foodItem.id"
        class="foodfavorite-item"
      >
        <v-col sm="1">
          <img class="foodfavorite-item__img" :src="getImg(foodItem.img)" :alt="foodItem.dish">
        </v-col>
        <v-col sm="9">
          <div class="foodfavorite-item__title">{{ foodItem.dish }}</div>
          <div class="foodfavorite-item__price">{{ foodItem.price }} р.</div>
          <v-btn
            icon
            @click="removefoodFavorite(foodItem)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "Favorite",
  data() {
    return {}
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

}

.foodfavorite-item {

}

.foodfavorite-item__img {
  height: 100px;
  margin-bottom: 10px;
}

.foodfavorite-item__title {
  margin-bottom: 10px;
}

.foodfavorite-item__price {
  color: orange;
  margin-bottom: 10px;
}

</style>
