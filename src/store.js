import { reactive } from 'vue';

export const store = reactive ({
  searchKey: '',
  films: [],
  apiURLBase: 'https://api.themoviedb.org/3/search/movie?api_key=2496cebd18ad416a44cb57ed3238e896',
});