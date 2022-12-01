<template>
  <div class="itemContainer">
    <router-link :to="{path: route}" class="link">{{name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    name: String,
    route: String
  }
}

</script>

<style scoped>
.itemContainer {
  display: flex;
  align-items: center;
  align-content: flex-start;
  margin: auto;
}

.link {
  float: left;
  display: flex;
  color: white;
  align-content: center;
  padding: 14px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
}

.link:hover {
  color: #6ddbb8;
  transition: 0.8s;
}


</style>