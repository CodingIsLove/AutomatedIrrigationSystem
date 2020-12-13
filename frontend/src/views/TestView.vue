<template>
  <div class="testView">
    <AddPlant id="addPlant"></AddPlant>
    <PlantList id="plantList"></PlantList>
  </div>
</template>

<script>
import AddPlant from "../components/AddPlant";
import PlantList from "../components/PlantList";

export default {
  name: "testView",
  components: {
    AddPlant,
    PlantList
  }
};
</script>

<style scoped>
.testView {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
}

#addPlant {
  background-color: pink;
  flex: 1;
}

#plantList {
  background-color: blue;
  flex: 1;
}
</style>
