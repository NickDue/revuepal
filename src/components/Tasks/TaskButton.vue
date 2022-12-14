<template>
  <button class="btns" @click="$emit('clicked')">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "TaskButton",
  props: {
    text: String
  }
}
</script>

<style scoped>

.btns {
background-color: #4b4b4b;
color: white;
height: 40px;
width: 100px;
font-weight: 600;
font-size: 12px;
cursor: pointer;
transition: 0.6s;
border-radius: 4px;
font-family: "Montserrat", sans-serif;
margin-right: 7.5%;
box-shadow: 0 0 4px 0 rgba(0,0,0.2);
border: none;
color: #6ddbb8;
}

.btns:hover {
color: #6ddbb8;
transition: 0.4s;
}
</style>