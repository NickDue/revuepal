<template>
  <a :href="refer">
    <i :class="classname"></i>
  </a>
</template>

<script>
export default {
  name: 'SocialField',
  props: {
    classname: String,
    refer: String
  }
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}


</style>