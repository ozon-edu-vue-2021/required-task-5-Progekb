import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import ru from "vuetify/es5/locale/ru";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";
import axios from "axios";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify({
    lang: {
      locales: { ru },
      current: "ru",
      defaultLocale: "ru",
    },
  }),
  axios,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
