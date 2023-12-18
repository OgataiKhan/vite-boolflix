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
    // This method represents the api call taking as its arguments the "movie" or "tv" property and the array to which it assigns the fetched data. It also displays a relevant message if the search returns no results.
    makeApiCall(searchKeyword, resultArray) {
      axios.get(`${store.apiMovieDB.defaultURL}${store.apiMovieDB.search}${searchKeyword}`, {
        params: {
          api_key: store.apiMovieDB.apiKey,
          query: store.searchKey,
        }
      }).then((response) => {
        store[resultArray] = response.data.results;
        if (store[resultArray].length === 0) {
          store[`${resultArray}NoResults`] = true;
        }
      }).catch((error) => {
        console.error(`Error fetching ${resultArray}:`, error);
      });
    },
    // This method resets any extant "no results" messages and inovokes makeApiCall to make the two api calls. It automatically displays the movie results by default.
    search() {
      if (store.searchKey.trim() !== '') {
        store.filmsNoResults = false;
        store.seriesNoResults = false;
        this.makeApiCall(store.apiMovieDB.filmsKeyword, 'films');
        this.makeApiCall(store.apiMovieDB.seriesKeyword, 'series');
        // Display movie results
        store.page = 'movie';
      }
    },
    // This method fetches a list of movie/tv genres for the genre selector
    makeGenresCall(type, genresArray) {
      axios.get(`${store.apiMovieDB.defaultURL}genre/${type}/list`, {
        params: {
          api_key: store.apiMovieDB.apiKey,
        }
      }).then((response) => {
        store[genresArray] = response.data.genres;
      }).catch((error) => {
        console.error(`Error fetching ${resultArray}:`, error);
      });
    },
    makePopularMoviesCall() {
      axios.get(`${store.apiMovieDB.defaultURL}discover/movie`, {
        params: {
          api_key: store.apiMovieDB.apiKey,
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc',
        }
      }).then((response) => {
        store.popularFilms = response.data.results;
      }).catch((error) => {
        console.error(`Error fetching popular movies:`, error);
      });
    },
  },
  created() {
    this.makeGenresCall('movie', 'movieGenres');
    this.makeGenresCall('tv', 'tvGenres');
    this.makePopularMoviesCall();
  },
};
</script>

<template>
  <!-- Api call trigger -->
  <Header @searchTrigger="search" />
  <Main />
</template>

<style scoped lang="scss"></style>
