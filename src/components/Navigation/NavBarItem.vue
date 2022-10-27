<template>
  <div class="nav-item">
    <i class="fas fa-times"></i>
    Hello
  </div>

</template>

<script>

export default {
  name: 'NavBarItem',
  props: {
    icon: {
      type: String,

    }
  }
}

</script>

<style scoped>

.nav-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  gap: 7px;

  border: 2px solid black;
}

</style>