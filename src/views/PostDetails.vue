<template>
  <v-container grid-list-xs>
    <v-card>
      <v-card-title primary-title>
        <h3 class="text-h5">
          Post id {{ this.$route.params.id }}
        </h3>
      </v-card-title>
      <v-card-text>
        <p class="mb-0">
          body
        </p>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-btn color="primary" depressed>Edit</v-btn>
        <v-btn color="error" depressed>Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'PostDetails',
};
</script>
