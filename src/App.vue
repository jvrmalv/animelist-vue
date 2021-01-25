<template>
  <div id="app">
    <NavBar></NavBar>
    <ListContainer></ListContainer>
  </div>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
</style>

<script>
import ListContainer from "./components/ListContainer.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    ListContainer,
    NavBar,
  },
};
</script>
