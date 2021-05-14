<template>
  <v-container grid-list-xs>
    <v-card v-if="post">
      <v-card-title primary-title>
        <h3 class="text-headline">{{ post.title }}</h3>
      </v-card-title>
      <v-card-text class="text-body-1">
        <p class="mb-0">{{ post.body }}</p>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <PostDialog
          buttonText="Edit"
          headingText="Edit post"
          :edit="true"
          :title="post.title"
          :body="post.body"
          :id="post.id"
        />
        <v-btn class="ml-2" color="error" depressed @click="handleClickDelete">Delete</v-btn>
      </v-card-actions>
    </v-card>
    <p v-else>Loading post...</p>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostDialog from '@/components/PostDialog.vue';

export default {
  name: 'PostDetails',
  components: { PostDialog },
  computed: {
    ...mapGetters(['getPostById']),
    post() {
      return this.getPostById(Number(this.$route.params.id));
    },
  },
  methods: {
    ...mapActions(['deletePost']),
    handleClickDelete() {
      this.deletePost(Number(this.$route.params.id));
      this.$router.push('/');
    },
  },
};
</script>
