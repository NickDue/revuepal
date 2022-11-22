<template>
  <div class="container">
    <div> Hello {{ username }} </div>
  </div>
</template>

<script>
export default {
  name: 'LoggedIn',
  props: {
    username: String
  }
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

</style>