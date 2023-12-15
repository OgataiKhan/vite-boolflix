import { createApp } from 'vue';
//flag icons css
import "/node_modules/flag-icons/css/flag-icons.min.css";
//fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';
//fontawesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//fontawesome import specific icons
import { faStar, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';
//file di partenza stili progetto
import './assets/scss/style.scss';
//file di partenza Vue
import App from './App.vue';

//fontawesome add icons to library
library.add(faStar, faStarReg, faMagnifyingGlass, faBell);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
