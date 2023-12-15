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
    search() {
      axios.get(store.apiMovieDB.defaultURL + store.apiMovieDB.filmsKeyword + store.apiMovieDB.apiKey,
        {
          params: {
            query: store.searchKey,
          }
        }
      ).then((response) => {
        store.films = response.data.results;
      });
      axios.get(store.apiMovieDB.defaultURL + store.apiMovieDB.seriesKeyword + store.apiMovieDB.apiKey, {
        params: {
          query: store.searchKey,
        }
      }
      ).then((response) => {
        store.series = response.data.results;
      });
    },
  },
};
</script>

<template>
  <Header @searchTrigger="search" />
  <Main />
</template>

<style scoped lang="scss"></style>
