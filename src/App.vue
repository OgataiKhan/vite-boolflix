<script>
import axios from 'axios';
import { store } from './store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'DefaultTemplate',
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <Header />
  <Main />
  <!-- <h1>{{ text }}</h1>
  <p><font-awesome-icon icon="fa-solid fa-star" /></p>
  <p><font-awesome-icon icon="fa-regular fa-star" /></p> -->
</template>

<style scoped lang="scss"></style>
