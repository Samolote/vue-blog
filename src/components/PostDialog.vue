<template>
  <v-dialog v-model="dialog" max-width="800px">
    <template v-slot:activator="{on, attrs}">
      <v-btn color="primary" depressed v-bind="attrs" v-on="on">
        <span>{{ buttonText }}</span>
        <v-icon right v-if="!edit">mdi-pencil-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ headingText }}</span>
      </v-card-title>
      <v-form class="mx-5 pb-4" ref="form">
        <v-text-field label="Title" v-model="post.title" :rules="titleRules"></v-text-field>
        <v-textarea label="Content" v-model="post.body" :rules="bodyRules"></v-textarea>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" depressed @click="handleClickConfirm">Confirm</v-btn>
        <v-btn color="error" depressed @click="handleClickCancel">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PostDialogEdit',
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'Click',
    },
    headingText: {
      type: String,
      required: false,
      default: 'Headline',
    },
    edit: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      titleRules: [
        (value) => value.length >= 5 || 'Minimum length is 5 characters.',
      ],
      bodyRules: [
        (value) => value.length >= 50 || 'Minimum length is 50 characters.',
      ],
      post: {
        title: this.title,
        body: this.body,
        id: this.id,
      },
    };
  },
  methods: {
    ...mapActions(['addPost', 'updatePost']),
    handleClickConfirm() {
      if (this.$refs.form.validate()) {
        this.dialog = false;
        if (this.edit) {
          this.updatePost(this.post);
        } else {
          this.addPost(this.post);
        }
      }
    },
    handleClickCancel() {
      this.dialog = false;
    },
  },
};
</script>
