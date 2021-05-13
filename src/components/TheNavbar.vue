<template>
  <v-app-bar app>
    <router-link to="/">
      <v-app-bar-title class="text-h4 primary--text">
        <span class="font-weight-light">Vue</span>
        <span>Post</span>
      </v-app-bar-title>
    </router-link>
    <v-spacer />
    <v-btn depressed color="primary">Create</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>
