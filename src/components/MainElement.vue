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
        <p><span>Average score: </span> {{ vote }}</p>
      </div>
      <img v-if="img !== null" :src="store.apiMovieDB.defaultImageURL + img" :alt="title">
      <img v-else src="../assets/img/poster-not-found.png" alt="Poster Not Found">
    </div>
  </li>
</template>

<style lang="scss" scoped></style>