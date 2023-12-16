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
  <main>
    <div class="container">
      <!-- Film list -->
      <h2>Film</h2>
      <ul class="media-list">
        <MainElement v-for="film in store.films" :title="film.title" :originaltitle="film.original_title"
          :lang="film.original_language" :vote="film.vote_average" :overview="film.overview" :img="film.poster_path" />
      </ul>
      <!-- TV shows list -->
      <h2>TV Shows</h2>
      <ul class="media-list">
        <MainElement v-for="series in store.series" :title="series.name" :originaltitle="series.original_name"
          :lang="series.original_language" :vote="series.vote_average" :overview="series.overview" :img="series.poster_path" />
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
@use '../assets/scss/partial/mixins.scss' as *;

main {
  padding: 40px;

  .container {
    @include container;
    .media-list {
      display: flex;
      flex-wrap: wrap;
      column-gap: $card-column-gap;
      row-gap: 20px;
    }
  }
}
</style>