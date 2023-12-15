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
  <li>
    <div>
      <div>
        <h3><span>Title: </span> {{ title }}</h3>
        <h4><span>Original title: </span> {{ originaltitle }}</h4>
        <p><span>Language: </span>
          <LanguageFlag :languageCode="lang" />
        </p>
        <p><span>Average score: </span>
          <!-- Average score representation with full and empty stars -->
          <ul>
            <li v-for="i in convertVote">
              <font-awesome-icon icon="fa-solid fa-star" />
            </li>
            <li v-for="i in 5 - convertVote">
              <font-awesome-icon icon="fa-regular fa-star" />
            </li>
          </ul>
        </p>
      </div>
      <img v-if="img !== null" :src="store.apiMovieDB.defaultImageURL + img" :alt="title">
      <img v-else src="../assets/img/poster-not-found.png" alt="Poster Not Found">
    </div>
  </li>
</template>

<style lang="scss" scoped></style>