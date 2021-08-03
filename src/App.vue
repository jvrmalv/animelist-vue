<template>
  <div id="app">
    <anime-list></anime-list>
  </div>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  max-width: 100%;
  min-width: 100%;
}
html {
  overflow-x: hidden;
}
</style>

<script>
import AnimeList from "./components/AnimeList.vue";
export default {
  name: "App",
  components: {
    AnimeList,
  },
};
</script>
