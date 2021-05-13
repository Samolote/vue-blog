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
  },
  mutations: {
    setPosts: (state, payload) => { state.posts = payload; },
  },
  modules: {
  },
});
