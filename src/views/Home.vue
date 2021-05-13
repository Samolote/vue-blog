<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col v-for="post in postsChronological" :key="post.id" cols="4">
        <v-card>
          <v-card-title primary-title>
            <h3 class="text-h5">{{ post.title.slice(0, 20) }}</h3>
          </v-card-title>
          <v-card-text>
            <p class="mb-0">{{ post.body.slice(0, 100) }}</p>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn flat color="primary">Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: mapGetters(['postsChronological']),
};
</script>
