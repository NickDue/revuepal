<template>
  <button class="simple-button">
    <i :class=icon>{{ text }}</i>
  </button>
</template>

<script>
export default {
  name: "TaskButton",
  props: {
    icon: String,
    text: String
  }
}
</script>

<style scoped>
.simple-button {
  border: 2px solid #d2bdff;
  height: 30px;
  width: 90px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  margin-left: 2px;
}
</style>