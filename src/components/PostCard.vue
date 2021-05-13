<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="text-h5">
        {{ title.slice(0, 20) }}
      </h3>
    </v-card-title>
    <v-card-text>
      <p class="mb-0">
        {{ body ? body.slice(0, 100) : body }}
        </p>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn
        text
        small
        color="primary"
        :to="`/post/${id}`"
      >
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    title: {
      typeof: String,
      required: true,
    },
    body: {
      typeof: String,
      required: false,
    },
    id: {
      typeof: Number,
      required: true,
    },
  },
};
</script>
