<template>
  <div class="stats-container">
    <div class="stats-field">
      <h4 class="stats-item">{{ statName }}:</h4>
      <h4 class="stats-item">{{ statValue }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatField',
  props: {
    statName: String,
    statValue: String
  }
}

</script>

<style scoped>
.stats-container {
  display: flex;
}
.stats-field {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
.stats-item {
  margin: 3px;
}

</style>