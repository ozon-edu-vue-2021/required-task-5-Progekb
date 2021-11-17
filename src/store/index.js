import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const imgs = [
  "6123150777.webp",
  "6126039472.webp",
  "6126040354.webp",
  "6128597660.webp",
  "6134992334.webp",
  "6136170572.webp",
  "6136172483.webp",
  "6140906765.webp",
  "6142673815.webp",
  "6142681673.webp",
  "6142683276.webp",
  "6148226736.webp",
];

export default new Vuex.Store({
  state: () => ({
    food: [],
    foodCart: [],
  }),
  getters: {
    cartSum: (state) => {
      return state.foodCart.reduce((acc, curVal) => {
        return acc + curVal.price * curVal.count;
      }, 0);
    },
    foodCartCount: (state) => {
      return state.foodCart.reduce((acc, curVal) => {
        return acc + curVal.count;
      }, 0);
    },
    foodFavoriteCount: (state) => {
      return state.food.reduce((acc, curVal) => {
        return acc + (curVal.favorite ? 1 : 0);
      }, 0);
    },
    foodFavorite: (state) => {
      return state.food.filter((item) => item.favorite)
    },
  },
  mutations: {
    setFoods: (state, val) => {
      state.food = val.map((item) => {
        item.img = imgs[Math.floor(Math.random() * (imgs.length - 1))];
        item.count = 1;
        item.favorite = false;
        item.price = Math.floor(Math.random() * 9999) + 1;
        return item;
      });
    },
    addFoodCart: (state, val) => {
      state.foodCart.push(val);
    },
    removeFoodCart: (state, id) => {
      state.foodCart = state.foodCart.filter((item) => item.id !== id);
    },
    addFoodFavorite: (state, val) => {
      state.food = state.food.map((item) => {
        if (val.id === item.id) item.favorite = true;
        return item;
      });
    },
    removeFoodFavorite: (state, id) => {
      state.food = state.food.map((item) => {
        if (id === item.id) item.favorite = false;
        return item;
      });
    },
  },
  actions: {
    async getFood(context) {
      try {
        const food = await axios.get(
          "https://random-data-api.com/api/food/random_food?size=30"
        );
        context.commit("setFoods", food.data);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
});
