<template>
  <v-app>
    <Header/>
    <keep-alive>
      <router-view class="mt-15"/>
    </keep-alive>
  </v-app>
</template>

<script>

import Header from "./views/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
