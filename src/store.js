import { reactive } from 'vue';

export const store = reactive({
  searchKey: '',
  popularFilms: [],
  films: [],
  series: [],
  movieGenres: [],
  tvGenres: [],
  movieSelectedGenre: '',
  tvSelectedGenre: '',
  movieVisible: false,
  tvVisible: false,
  homeVisible: true,
  filmsNoResults: false,
  seriesNoResults: false,
  apiMovieDB: {
    defaultURL: 'https://api.themoviedb.org/3/',
    search: 'search/',
    filmsKeyword: 'movie',
    seriesKeyword: 'tv',
    apiKey: '2496cebd18ad416a44cb57ed3238e896',
    defaultImageURL: 'https://image.tmdb.org/t/p/w342',
  },
});