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
      <form @submit.prevent="$emit('searchTrigger')" class="search-box">
        <label for="searchbar">Search</label>
        <input type="search" id="searchbar" placeholder="Search" v-model="store.searchKey" />
        <button type="submit" class="search-button">
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
  justify-content: space-between;
  padding: 20px 40px;

  .header-left {
    display: flex;

    .logo {
      max-width: 200px;
      min-width: 100px;
      margin-right: 30px;
      display: flex;
      align-items: center;
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
    justify-items: flex-end;
    width: 30%;
    min-width: 200px;
    .search-box {
      padding-right: 20px;
      padding-left: 8px;
      display: flex;
      width: 100%;
      label[for="searchbar"] {
        display: none;
      }

      #searchbar {
        background-color: #323232;
        border: none;
        text-align: center;
        line-height: 2.5;
        width: 90%;
        color: $font-primary;
        border-top-left-radius: $search-border-radius;
        border-bottom-left-radius: $search-border-radius;
        &:focus {
          outline: none;
        }
      }
      .search-button {
        padding-left: 10px;
        padding-right: 10px;
        background-color: #323232;
        border: none;
        cursor: pointer;
        border-top-right-radius: $search-border-radius;
        border-bottom-right-radius: $search-border-radius;
      }
    }
  }
}</style>