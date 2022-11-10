<template>
  <div class="description-container">
    <LoremIpsum class="description-text" add="3p" />
  </div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';
export default {
  name: 'TaskDescription',
  components: {
    LoremIpsum
  }
}
</script>

<style scoped>
.description-container {
  border: 1px solid black;
  display: flex;
  height: 220px;
}

.description-text {
  overflow: scroll;
}
</style>