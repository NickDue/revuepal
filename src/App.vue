<template>
  <header>
    <NavBar :is-logged-in="false"/>
  </header>
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/Navigation/NavBar";
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
      
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>


@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
