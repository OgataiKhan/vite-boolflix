<script>
import { store } from '../store';
import LanguageFlag from './LanguageFlag.vue';

export default {
  name: 'MainElement',
  props: {
    title: String,
    originaltitle: String,
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
    };
  },
  computed: {
    // This property converts the average score from decimals to fifths, rounding up
    convertVote() {
      return Math.ceil(this.vote / 2);
    }
  }
};

</script>

<template>
  <li class="card" :class="{ cardborder: img === null }">
    <div class="poster-box">
      <img v-if="img !== null" :src="store.apiMovieDB.defaultImageURL + img" :alt="title">
      <img v-else src="../assets/img/poster-not-found.png" alt="Poster Not Found">
      <div class="media-details">
        <h3><span class="data-title">Title: </span> {{ title }}</h3>
        <h4><span class="data-title">Original title: </span> {{ originaltitle }}</h4>
        <p><span class="data-title">Language: </span>
          <LanguageFlag :languageCode="lang" />
        </p>
        <p><span class="data-title">Average score: </span>
          <!-- Average score representation with full and empty stars -->
        <ul class="star-list">
          <li v-for="i in convertVote">
            <font-awesome-icon icon="fa-solid fa-star" />
          </li>
          <li v-for="i in 5 - convertVote">
            <font-awesome-icon icon="fa-regular fa-star" />
          </li>
        </ul>
        </p>
        <p :class="{ missing: overview === '' }"><span class="data-title">Overview: </span> {{ overview }}</p>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

.card {
  width: calc((100% - ($card-column-gap * 5)) / 6);
  position: relative;
  font-weight: 400;
  &:hover .media-details {
      display: block;
    }

  .media-details {
    background-color: $primary-color;
    padding: 20px 10px;
    overflow-y: auto;
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    h3, h4 {
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
.cardborder {
  border: 1px solid darkgray;
}
.missing {
  display: none;
}

@media screen and (max-width: 1199px) {
  .card {
    width: calc((100% - ($card-column-gap * 3)) / 4);;
  }
}

@media screen and (max-width: 767px) {
  .card {
    width: calc((100% - ($card-column-gap * 1)) / 2);;
  }
}

</style>