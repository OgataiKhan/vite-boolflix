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
    // This method represents the api call taking as its arguments the "movie" or "tv" property and the array to which it assigns the fetched data
    makeApiCall(searchKeyword, resultArray) {
      axios.get(`${store.apiMovieDB.defaultURL}${store.apiMovieDB.search}${searchKeyword}`, {
        params: {
          api_key: store.apiMovieDB.apiKey,
          query: store.searchKey,
        }
      }).then((response) => {
        store[resultArray] = response.data.results;
      }).catch((error) => {
        console.error(`Error fetching ${resultArray}:`, error);
      });
    },
    // This method inovokes makeApiCall to make the two api calls 
    search() {
      this.makeApiCall(store.apiMovieDB.filmsKeyword, 'films');
      this.makeApiCall(store.apiMovieDB.seriesKeyword, 'series');
    },
  },
};
</script>

<template>
  <!-- Api call trigger -->
  <Header @searchTrigger="search" />
  <Main />
</template>

<style scoped lang="scss"></style>
