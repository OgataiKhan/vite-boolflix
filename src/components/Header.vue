<script>
import { store } from '../store';

export default {
  name: 'Header',
  emits: ['searchTrigger'],
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <form @submit.prevent="$emit('searchTrigger')">
    <label for="searchbar">Search</label>
    <input type="text" id="searchbar" placeholder="Search" v-model="store.searchKey"/>
    <button type="submit">Search</button>
  </form>
</template>

<style lang="scss" scoped></style>