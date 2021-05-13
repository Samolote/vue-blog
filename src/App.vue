<template>
  <v-app>
    <TheNavbar />
    <v-main class="ma-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  components: { TheNavbar },
  name: 'App',
  methods: mapActions(['fetchPosts']),
  created() {
    this.fetchPosts();
  },
};
</script>
