<template>
  <div id="anime-list">
    <nav-bar
      :typeAheadList="animeSetter"
      @item-click="addAnimeToList"
    ></nav-bar>
    <list-container v-bind:displayedanime="animeSetter1"></list-container>
  </div>
</template>

<script>
import ListContainer from "./ListContainer.vue";
import NavBar from "./NavBar.vue";
import database from "@/data.json";
// const animeFilterer = (anime) => {
//   const regex = new RegExp("battle", "i");
//   return regex.test(anime.title);
// };
const animeGetter = (
  { picture: image, title, episodes, id },
  status = "watching"
) => {
  return {
    id,
    image,
    title,
    episodes,
    status,
  };
};
export default {
  name: "AnimeList",
  data() {
    return {
      animeList: [],
    };
  },
  components: {
    ListContainer,
    NavBar,
  },
  computed: {
    animeSetter() {
      return Object.values(database).map((anime) => animeGetter(anime));
    },
    animeSetter1() {
      return this.animeList;
    },
  },
  methods: {
    addAnimeToList(anime) {
      console.log(this.animeList, anime);
      this.animeList = [...this.animeList, anime];
    },
  },
};
</script>

<style>
</style>