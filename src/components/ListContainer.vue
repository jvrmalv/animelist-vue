<template>
  <div id="list-container">
    <div v-for="i in displayedanime" :key="i.id" class="list-item">
      <div
        v-bind:style="{ backgroundImage: 'url(' + i.image + ')' }"
        class="img-container"
      >
        <p class="title">{{ i.title }}</p>
        <p class="episodes">1/{{ i.episodes }}</p>
        <p class="status">{{ i.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContainer",
  components: {},
  data() {
    return {
      // listSegment: database.data.slice(0, 99),
    };
  },
  props: {
    displayedanime: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#list-container {
  display: flex;
  max-width: 100%;
  padding: 8px;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
}

.list-item {
  margin: 8px;
  max-width: 144px;
  max-height: 200px;
}

.list-item > img {
  min-width: 144px;
  max-width: 144px;
  min-height: 200px;
  max-height: 200px;
}

.img-container {
  position: relative;
  min-width: 144px;
  max-width: 144px;
  min-height: 200px;
  max-height: 200px;
  margin: 16px;
}

.title {
  left: 5%;
}

.episodes {
  top: 50%;
  left: 45%;
}

.status {
  bottom: 0%;
  left: 30%;
}
</style>