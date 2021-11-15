<template>
  <v-app-bar app dense>
    <v-btn
      :to="{name: 'home'}"
      exact
      icon
    >
      <v-icon>home</v-icon>
    </v-btn>
    <v-toolbar-title>{{ $route.meta.desc }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge
      color="green"
      offset-y="20"
      offset-x="20"
      overlap
      :content="foodFavoriteCount"
      :value="!!foodFavoriteCount"
    >
      <v-btn
        :to="{name: 'favorite'}"
        icon
      >
        <v-icon>favorite_border</v-icon>
      </v-btn>
    </v-badge>
    <v-badge
      color="green"
      overlap
      offset-y="20"
      offset-x="20"
      :content="foodCartCount"
      :value="!!foodCartCount"
    >
      <v-btn
        :to="{name: 'cart'}"
        icon
      >
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  computed: {
    foodCartCount() {
      return this.$store.state.foodCart.length;
    },
    foodFavoriteCount() {
      return this.$store.state.foodFavorite.length;
    },
  },
};
</script>

<style>

</style>
