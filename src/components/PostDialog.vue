<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{on, attrs}">
      <v-btn color="primary" depressed v-bind="attrs" v-on="on">
        <span>Create</span>
        <v-icon right>mdi-pencil-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Create new post</span>
      </v-card-title>
      <v-form class="mx-5 pb-4" ref="form">
        <v-text-field label="Title" v-model="post.title" :rules="titleRules"></v-text-field>
        <v-textarea label="Content" v-model="post.body" :rules="bodyRules"></v-textarea>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" depressed @click="dialog = false">Confirm</v-btn>
        <v-btn color="error" depressed @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'PostDialog',
  data() {
    return {
      dialog: false,
      post: {
        title: '',
        body: '',
      },
      titleRules: [
        (value) => value.length >= 5 || 'Minimum length is 5 characters.',
      ],
      bodyRules: [
        (value) => value.length >= 50 || 'Minimum length is 50 characters.',
      ],
    };
  },
};
</script>
