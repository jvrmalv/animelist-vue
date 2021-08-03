<template>
  <nav id="nav-bar">
    <div id="logo">
      <img type="image/png" src="@/assets/logo.png" alt="test" />
    </div>
    <div class="sub-nav-bar">
      <div>
        <div><a href="">Watching</a></div>
      </div>
      <div>
        <div><a href="">Completed</a></div>
      </div>
      <div>
        <div><a href="">Plan to Watch</a></div>
      </div>
      <div>
        <vue-bootstrap-typeahead
          @hit="$emit('item-click', $event)"
          v-model="query"
          :data="typeAheadList"
          :serializer="animeSerializer"
        ></vue-bootstrap-typeahead>
      </div>
    </div>
  </nav>
</template>

<script>
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";

export default {
  name: "NavBar",
  components: { VueBootstrapTypeahead },
  data() {
    return {
      query: "",
    };
  },
  props: {
    typeAheadList: Array,
  },
  methods: {
    animeSerializer: (anime) => anime.title,
    // itemClickEmit: (anime) => this.$emit("item-click", anime),
  },
};
</script>

<style scoped>
.sub-nav-bar {
  display: flex;
  flex-direction: row;
  background: #2b2d42;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 100;
  height: 2em;
}
.sub-nav-bar > div {
  padding-left: 20em;
}

a {
  color: bisque;
  text-decoration: none;
}

img {
  height: 2em;
  padding-right: 4em;
  justify-content: none;
}

#logo {
  position: absolute;
}
</style>