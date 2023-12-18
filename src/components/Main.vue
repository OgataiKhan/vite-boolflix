<script>
import { store } from '../store';
import MainElement from './MainElement.vue';
import GenreSelector from './GenreSelector.vue';
import NoResults from './NoResults.vue';


export default {
  name: 'Main',
  components: {
    MainElement,
    GenreSelector,
    NoResults,
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
      <div class="homepage">
      <!-- Homepage with popular films -->
      <h2>Popular Movies</h2>
      <ul class="media-list">
          <MainElement v-for="film in store.popularFilms" :title="film.title" :type="'movie'" :id="film.id" :genreIds="film.genre_ids" :originalTitle="film.original_title" :lang="film.original_language" :vote="film.vote_average"
            :overview="film.overview" :img="film.poster_path" />
        </ul>
      </div>
      <div class="movies">
        <!-- Film list -->
        <h2>Movies</h2>
        <GenreSelector :type="'movie'" />
        <NoResults v-if="store.filmsNoResults" />
        <ul class="media-list">
          <MainElement v-for="film in store.films" :title="film.title" :type="'movie'" :id="film.id" :genreIds="film.genre_ids" :originalTitle="film.original_title" :lang="film.original_language" :vote="film.vote_average"
            :overview="film.overview" :img="film.poster_path" />
        </ul>
      </div>
      <div class="series">
        <!-- TV shows list -->
        <h2>TV Shows</h2>
        <GenreSelector :type="'tv'" />
        <NoResults v-if="store.seriesNoResults" />
        <ul class="media-list">
          <MainElement v-for="series in store.series" :title="series.name" :type="'tv'" :id="series.id" :genreIds="series.genre_ids" :originalTitle="series.original_name" :lang="series.original_language" :vote="series.vote_average"
            :overview="series.overview" :img="series.poster_path" />
        </ul>
      </div>
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
    h2 {
      padding: 50px 0 15px;

      &:first-child {
        padding-top: 0;
      }
    }

    .media-list {
      display: flex;
      flex-wrap: wrap;
      column-gap: $card-column-gap;
      row-gap: 20px;
    }
  }
}
</style>