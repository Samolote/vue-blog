<template>
  <v-app-bar app>
    <router-link to="/">
      <v-app-bar-title class="text-h4 text-uppercase primary--text">
        <span class="font-weight-light">Vue</span>
        <span class="font-weight-medium">Post</span>
      </v-app-bar-title>
    </router-link>
    <v-spacer />
    <PostDialog />
  </v-app-bar>
</template>

<script>
import PostDialog from '@/components/PostDialog.vue';

export default {
  name: 'TheNavbar',
  components: { PostDialog },
};
</script>
