<script>
import { store } from '../store';
import MainElement from './MainElement.vue';


export default {
  name: 'Main',
  components: {
    MainElement,
  },
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <div class="container">
    <!-- Film list -->
    <h2>Film</h2>
    <ul>
      <MainElement v-for="film in store.films" :title="film.title" :originaltitle="film.original_title" :lang="film.original_language" :vote="film.vote_average" :img="film.poster_path" />
    </ul>
    <!-- TV shows list -->
    <h2>TV Shows</h2>
    <ul>
      <MainElement v-for="series in store.series" :title="series.name" :originaltitle="series.original_name" :lang="series.original_language" :vote="series.vote_average" :img="series.poster_path" />
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>