<script>
import { store } from '../store';
import MainFilm from './MainFilm.vue';


export default {
  name: 'Main',
  components: {
    MainFilm,
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
    <ul>
      <MainFilm v-for="film in store.films" :title="film.title" :originaltitle="film.original_title" :lang="film.original_language" :vote="film.vote_average" />
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>