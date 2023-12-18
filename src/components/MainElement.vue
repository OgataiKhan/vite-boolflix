<script>
import axios from 'axios';
import { store } from '../store';
import LanguageFlag from './LanguageFlag.vue';

export default {
  name: 'MainElement',
  props: {
    title: String,
    type: String,
    id: Number,
    genreIds: Array,
    originalTitle: String,
    lang: String,
    vote: Number,
    overview: String,
    img: String,
  },
  components: {
    LanguageFlag,
  },
  data() {
    return {
      store,
      showDetails: false,
      cast: [],
      genres: [],
      castVisible: false,
      genresVisible: false,
      chevronOpen: false,
    };
  },
  computed: {
    // This property converts the average score from decimals to fifths, rounding up
    convertVote() {
      return Math.ceil(this.vote / 2);
    }
  },
  methods: {
    // This method represents the API call that can fetch the first five cast members and genres of a given movie or tv series
    makeDetailsApiCall(mediaType, resultKey, targetData) {
      return axios.get(`${store.apiMovieDB.defaultURL}${mediaType}/${this.id}${resultKey}`, {
        params: {
          api_key: store.apiMovieDB.apiKey,
        }
      }).then((response) => {
        return response.data[targetData].slice(0, 5);;
      }).catch((error) => {
        console.error(`Error fetching data:`, error);
      });
    },
    // This method executes the API call above targetting cast members and saves the results in the relevant variable
    searchCast() {
      this.makeDetailsApiCall(this.type, '/credits', 'cast').then(data => {
        this.cast = data;
      });;
    },
    // This method executes the API call above targetting genres and saves the results in the relevant variable 
    searchGenres() {
      this.makeDetailsApiCall(this.type, '', 'genres').then(data => {
        this.genres = data;
      });;
    },
    // This method handles clicking on the "Show more" button, triggering the API call if the relevant arrays are empty and only toggling visibility if they are not. The "else if" is there to handle the case of movies/series with no genres or cast members in the data.
    handleMoreClick() {
      if (this.cast.length === 0 && this.genres.length === 0 && !this.chevronOpen) {
        this.searchCast();
        this.searchGenres();
        this.castVisible = true;
        this.genresVisible = true;
        this.chevronOpen = true;
      } else if (this.cast.length === 0 && this.genres.length === 0 && this.chevronOpen) {
        this.castVisible = false;
        this.genresVisible = false;
        this.chevronOpen = false;
      } else {
        this.castVisible = !this.castVisible;
        this.genresVisible = !this.genresVisible;
        this.chevronOpen = !this.chevronOpen;
      }
    }
  },
};

</script>

<template>
  <li v-if="genreIds.includes(store[`${type}SelectedGenre`]) || store[`${type}SelectedGenre`] === ''" class="card">
    <div class="poster-box">
      <!-- Poster -->
      <div class="media-img" :class="{ cardborder: img === null }">
        <img v-if="img !== null" :src="store.apiMovieDB.defaultImageURL + img" :alt="title">
        <img v-else src="../assets/img/poster-not-found.png" alt="Poster Not Found">
      </div>
      <!-- /Poster -->
      <!-- Flipcard backside -->
      <div class="media-details">
        <!-- Title -->
        <h3><span class="data-title">Title: </span> {{ title }}</h3>
        <!-- Original title -->
        <h4 v-if="title !== originalTitle"><span class="data-title">Original title: </span> {{ originalTitle }}</h4>
        <!-- Language flag -->
        <p><span class="data-title">Language: </span>
          <LanguageFlag :languageCode="lang" />
        </p>
        <!-- Average score representation with full and empty stars -->
        <p><span class="data-title">Average score: </span>
        <ul class="star-list">
          <li v-for="i in convertVote">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
          <li v-for="i in 5 - convertVote">
            <font-awesome-icon icon="fa-regular fa-star" />
          </li>
        </ul>
        </p>
        <!-- Overview -->
        <p :class="{ missing: overview === '' }"><span class="data-title">Overview: </span> {{ overview }}</p>
        <!-- Additional details -->
        <p @click="handleMoreClick" class="data-title clickable">Show more <font-awesome-icon v-if="!chevronOpen"
            icon="fa-solid fa-chevron-down" /><font-awesome-icon v-if="chevronOpen" icon="fa-solid fa-chevron-up" /></p>
        <p v-if="castVisible">
          <span class="data-title">Cast: </span>
          <span v-for="(actor, index) in cast">
            {{ actor.name }}<span v-if="index < cast.length - 1">, </span>
          </span>
        </p>
        <p v-if="genresVisible">
          <span class="data-title">Genres: </span>
          <span v-for="(genre, index) in genres">
            {{ genre.name }}
            <span v-if="index < genres.length - 1">, </span>
          </span>
        </p>
        <!-- /Additional details -->
      </div>
      <!-- /Flipcard backside -->
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.card {
  width: calc((100% - ($card-column-gap * 5)) / 6);
  height: 24vw;
  font-weight: 400;
  perspective: 1000px;

  &:hover .poster-box {
    transform: rotateY(180deg);
  }

  .poster-box {
    height: 100%;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .media-img,
    .media-details {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; // Safari
      backface-visibility: hidden;

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .media-details {
    background-color: $primary-color;
    padding: 20px 10px;
    overflow-y: auto;
    transform: rotateY(180deg);

    h3,
    h4 {
      font-weight: 400;
      font-size: .875rem;
    }

    .star-list {
      display: inline-block;

      li {
        display: inline-block;
      }
    }

    .data-title {
      font-weight: 700;
    }
  }
}

.clickable {
  cursor: pointer;
}

.cardborder {
  border: 1px solid darkgray;
}

.missing {
  display: none;
}

@media screen and (max-width: 1199px) {
  .card {
    width: calc((100% - ($card-column-gap * 3)) / 4);
    height: 35vw;
  }
}

@media screen and (max-width: 767px) {
  .card {
    width: calc((100% - ($card-column-gap * 1)) / 2);
    height: 68vw;
  }
}
</style>