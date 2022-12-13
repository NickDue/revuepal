<template>
  <div class="navContainer">
    <ruLogo/>
    <NavBarItem
        name="HOME"
        route="/"
    />
    <NavBarItem v-if="isLoggedIn === true"
        name="TRAIN"
        route="/select"
    />

    <NavBarItem v-if="isLoggedIn === false"
        name="TRAIN"
        route="/create"
    />
    <NavBarItem v-if="isLoggedIn === true"
        name="LEADERBOARDS"
        route="/leaderboards"
    />
    <NavBarItem v-if="isLoggedIn === false"
        name="LEADERBOARDS"
        route="/create"
    />
    <NavBarItem
        name="ABOUT"
        route="/about"
    />
    <LoggedOut @logsin="logsin" @getUsername="getUsername" v-if="isLoggedIn === false"/>
    <LoggedIn @logsout="logsin" v-if="isLoggedIn === true"/>
  </div>
</template>

<script>
import NavBarItem from "@/components/Navigation/NavBarItem";
import LoggedOut from "@/components/Navigation/LoggedOut";
import LoggedIn from "@/components/Navigation/LoggedIn";
import ruLogo from "@/components/Navigation/RevuppaalLogo";

export default {
  name: 'NavBar',
  data() {
    return {
      isLoggedIn: true,
      username: ""
    }
  },
  components: {
    LoggedIn,
    NavBarItem,
    LoggedOut,
    ruLogo
  },

  methods: {
    logsin(value){
      this.isLoggedIn = value
    },

    getUsername(value){
      console.log(value)
      this.username = value
    }
  }
}

</script>

<style scoped>
.navContainer {
  min-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  overflow: hidden;
  background-color: #4B4B4B;
  box-shadow: 0 2px 4px 0 rgba(0,0,0.2);
  
}

</style>