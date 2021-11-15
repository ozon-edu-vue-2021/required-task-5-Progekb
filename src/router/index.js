import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        desc: "Магазин",
      },
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      meta: {
        desc: "Корзина",
      },
      component: () => import("@/views/Cart.vue"),
    },
    {
      path: "/favorite",
      name: "favorite",
      meta: {
        desc: "Избранное",
      },
      component: () => import("@/views/Favorite.vue"),
    },
    {
      path: "*",
      meta: {
        desc: "404",
      },
      component: () => import("@/views/error404.vue"),
    },
  ],
});
