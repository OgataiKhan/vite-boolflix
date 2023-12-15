<script>
import axios from 'axios';
import { store } from './store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'DefaultTemplate',
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    makeApiCall(searchKeyword, resultArray) {
      axios.get(`${store.apiMovieDB.defaultURL}${searchKeyword}${store.apiMovieDB.apiKey}`, {
        params: {
          query: store.searchKey,
        }
      }).then((response) => {
        store[resultArray] = response.data.results;
      }).catch((error) => {
        console.error(`Error fetching ${resultArray}:`, error);
      });
    },

    search() {
      this.makeApiCall(store.apiMovieDB.filmsKeyword, 'films');
      this.makeApiCall(store.apiMovieDB.seriesKeyword, 'series');
    },
  },
};
</script>

<template>
  <Header @searchTrigger="search" />
  <Main />
</template>

<style scoped lang="scss"></style>
