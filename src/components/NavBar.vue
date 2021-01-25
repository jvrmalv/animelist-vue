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
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  background: #2b2d42;
}
.sub-nav-bar {
  flex: 50%;
  display: flex;
  flex-direction: row;
  background: #2b2d42;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 100;
}
.sub-nav-bar > div {
  padding-left: 1em;
}
img {
  height: 2em;
  padding-right: 4em;
  justify-content: none;
}
#logo {
  flex: 1;
}
</style>