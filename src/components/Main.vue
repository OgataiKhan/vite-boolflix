<script>
import { store } from '../store';
import MainFilm from './MainFilm.vue';
import MainSeries from './MainSeries.vue';


export default {
  name: 'Main',
  components: {
    MainFilm,
    MainSeries,
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
    <h2>Film</h2>
    <ul>
      <MainFilm v-for="film in store.films" :title="film.title" :originaltitle="film.original_title" :lang="film.original_language" :vote="film.vote_average" />
    </ul>
    <h2>TV Series</h2>
    <ul>
      <MainSeries v-for="series in store.series" :title="series.name" :originaltitle="series.original_name" :lang="series.original_language" :vote="series.vote_average" />
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>