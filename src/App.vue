<script>
export default {
  name: 'DefaultTemplate',

  data() {
    return {
      text: 'Template VueJS',
    };
  },
};
</script>

<template>
  <h1>{{ text }}</h1>
  <p><font-awesome-icon icon="fa-solid fa-star" /></p>
  <p><font-awesome-icon icon="fa-regular fa-star" /></p>
</template>

<style scoped lang="scss"></style>
