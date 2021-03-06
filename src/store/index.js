import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  getters: {
    postsChronological: (state) => state.posts.reverse(),
    getPostById: (state) => (id) => state.posts.find((post) => post.id === id),
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6');
        commit('setPosts', data);
      } catch (error) {
        console.log('Something went wrong while fetching posts from database.\n', error);
      }
    },
    async addPost({ commit }, post) {
      try {
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts?_limit=6', post);
        commit('addPost', data);
      } catch (error) {
        console.log('Something went wrong while adding post to database.\n', error);
      }
    },
    async deletePost({ commit }, id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit('deletePost', id);
      } catch (error) {
        console.log('Something went wrong while deleting post from database.\n', error);
      }
    },
    async updatePost({ commit }, post) {
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
        commit('updatePost', post);
      } catch (error) {
        console.log('Something went wrong while updating post in database.\n', error);
      }
    },
  },
  mutations: {
    setPosts: (state, payload) => { state.posts = payload; },
    addPost: (state, payload) => { state.posts.push(payload); },
    deletePost: (state, payload) => {
      const index = state.posts.findIndex((post) => post.id === payload);
      state.posts.splice(index, 1);
    },
    updatePost: (state, payload) => {
      const index = state.posts.findIndex((post) => post.id === payload.id);
      state.posts.splice(index, 1, payload);
    },
  },
  modules: {
  },
});
