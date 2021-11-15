import Vue from "vue";
import Vuex from "vuex";

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
    foodFavorite: [],
  }),
  getters: {
    getFullNameAndAge: (state) => {
      return state.profile
        ? `${state.profile.firstName} ${state.profile.secondName} (${state.profile.age})`
        : "";
    },
  },
  mutations: {
    setFoods: (state, val) => {
      state.food = val.map((item) => {
        item.img = imgs[Math.floor(Math.random() * (imgs.length - 1))];
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
      state.foodFavorite.push(val);
    },
    removeFoodFavorite: (state, id) => {
      state.foodFavorite = state.foodFavorite.filter((item) => item.id !== id);
    },
  },
  actions: {
    logout: (context) => { // если нужны аргументы, то добавляем payload
      setTimeout(() => {
        context.commit('resetProfile');
      }, 3000);
    },
  },
});
