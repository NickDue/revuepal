<template>
  <div class="card">
    <h2 class="card-header">{{ title }}</h2>
    <div class="card-content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    title: String,
    content: String,
  }
}
</script>

<style scoped>

.card-header {
  display: flex;
  justify-content: center;
  align-content: stretch;
  margin-top: 10px;
  margin-bottom: 10px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  margin-top: 10px;
  margin-right: 5px;
  margin-left: 5px;
  padding: 10px;
}

</style>