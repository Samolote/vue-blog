<template>
  <v-app>
    <TheNavbar />
    <v-main class="ma-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: { TheNavbar },
  name: 'App',
};
</script>
