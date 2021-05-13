<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col v-for="{title, body, id} in postsChronological" :key="id" cols="4">
        <PostCard
          :title="title"
          :body="body"
          :id="id"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import PostCard from '@/components/PostCard.vue';

export default {
  name: 'Home',
  components: { PostCard },
  computed: mapGetters(['postsChronological']),
};
</script>
