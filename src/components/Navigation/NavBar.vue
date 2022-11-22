<template>
  <div class="navContainer">
    <NavBarItem
        name="Home"
        route="/"
    />
    <NavBarItem v-if="isLoggedIn === true"
        name="Train"
        route="/train"
    />
    <NavBarItem v-if="isLoggedIn === true"
        name="Leaderboards"
        route="/leaderboards"
    />
    <NavBarItem
        name="About"
        route="/about"
    />
    <LoggedOut v-if="isLoggedIn === false"/>
    <LoggedIn v-if="isLoggedIn === true" :username=username />
  </div>
</template>

<script>
import NavBarItem from "@/components/Navigation/NavBarItem";
import LoggedOut from "@/components/Navigation/LoggedOut";
import LoggedIn from "@/components/Navigation/LoggedIn";
export default {
  name: 'NavBar',
  props: {
    isLoggedIn: {
      type: Boolean,
      default: true
    },
    username: String
  },
  components: {
    LoggedIn,
    NavBarItem,
    LoggedOut
  }
}

</script>

<style scoped>
.navContainer {
  min-width: 100%;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  overflow: hidden;
  background-color: aqua;
}

</style>