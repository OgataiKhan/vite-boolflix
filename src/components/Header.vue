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
  <header>
    <div class="header-left">
      <div class="logo">
        <img src="/public/img/boolflix-logo.webp" alt="Boolflix logo">
      </div>
      <ul class="navbar">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
      </ul>
    </div>
    <div class="header-right">
      <form @submit.prevent="$emit('searchTrigger')">
        <label for="searchbar">Search</label>
        <input type="search" id="searchbar" placeholder="Search" v-model="store.searchKey" />
        <button type="submit">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
      <div class="notifications">
        <font-awesome-icon icon="fa-solid fa-bell" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;

header {
  display: flex;

  .header-left {
    display: flex;
    padding: 20px 40px;

    .logo {
      max-width: 200px;
      margin-right: 30px;
    }

    .navbar {
      display: flex;
      align-items: center;
      gap: 18px;
      li {
        padding-top: 10px;
        padding-bottom: 10px;
        &:hover {
        cursor: pointer;
      }
      }
      
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    label[for="searchbar"] {
      display: none;
    }
    // #searchbar {

    // }
  }
}</style>