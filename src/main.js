import { createApp } from 'vue';
// Google font Roboto
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
//flag icons css
import "/node_modules/flag-icons/css/flag-icons.min.css";
//fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';
//fontawesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//fontawesome import specific icons
import { faStar, faMagnifyingGlass, faBell, faBellSlash, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';
//file di partenza stili progetto
import './assets/scss/style.scss';
//file di partenza Vue
import App from './App.vue';

//fontawesome add icons to library
library.add(faStar, faStarReg, faMagnifyingGlass, faBell, faBellSlash, faChevronUp, faChevronDown);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
