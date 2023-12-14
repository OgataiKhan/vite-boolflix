<script>
// import { store } from '../store';

export default {
  name: 'MainFilm',
  props: {title: String, originaltitle: String, lang: String, vote: Number},
  // data() {
  //   return {
  //     store,
  //   };
  // },
};

</script>

<template>
    <li>
      <h3><span>Title: </span> {{ title }}</h3>
      <h4><span>Original title: </span> {{ originaltitle }}</h4>
      <p><span>Language: </span> {{ lang }}</p>
      <p><span>Average score: </span> {{ vote }}</p>
    </li>
</template>

<style lang="scss" scoped>

</style>