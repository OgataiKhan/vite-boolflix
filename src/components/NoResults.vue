<script>

export default {
  name: 'NoResults',

};

</script>

<template>
  <p>Oops, thre's nothing here! Try searching for something else.</p>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partial/variables' as *;
p {
  color: $font-primary;
  font-size: 2.5rem;
}
</style>