<script>
import { store } from '../store';

export default {
  name: 'GenreSelector',
  props: {
    type: String,
  },
  data() {
    return {
      store,
    };
  }
};

</script>

<template>
  <label :for="`${type}-genre-selector`">Choose a genre:</label>
  <select name="genre" :id="`${type}-genre-selector`" v-model="store[`${type}SelectedGenre`]"
    @change="$emit(`${type}GenreSelection`)">
    <option selected value="">Select Genre...</option>
    <option v-for="genre in store[`${type}Genres`]" :value="genre.id">{{ genre.name }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

label {
  display: none;
}
select {
  margin-bottom: 30px;
  background-color: #323232;
  color: $font-primary;
  border: none;
  border-radius: $search-border-radius;
  padding: 5px 20px;
}
</style>