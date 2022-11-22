<template>
  <NavBar :is-logged-in="true" username="USER-NAME" />
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/Navigation/NavBar";
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
      username: {
        type: String,
        default: "Revuppaal User"
      }
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
