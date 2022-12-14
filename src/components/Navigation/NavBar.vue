<template>
  <div class="navContainer">
    <div class="logo">
      <ruLogo/>
    </div>
    <div class="navs">
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
          route="/data-access/create-user"
      />
      <NavBarItem v-if="isLoggedIn === true"
          name="LEADERBOARDS"
          route="/leaderboards"
      />
      <NavBarItem v-if="isLoggedIn === false"
          name="LEADERBOARDS"
          route="/data-access/create-user"
      />
      <NavBarItem
          name="ABOUT"
          route="/about"
      />
    </div>
    <div class="auth">
    <LoggedOut @logsin="logsin" @getUsername="getUsername" @redirect="redirect()" v-if="isLoggedIn === false"/>
    <LoggedIn @logsout="logsin" v-if="isLoggedIn === true"/>
    </div>
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
    },
    
    redirect(value){
      console.log(value)
      this.$router.push('/data-access/create-user')
    }
  }
}

</script>

<style scoped>
.navContainer {
  min-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  overflow: hidden;
  background-color: #4B4B4B;
  box-shadow: 0 2px 4px 0 rgba(0,0,0.2);
  
}

.logo {
  top: 0;
  display: flex;
  left: 0;
  height: 75px;
  width: 220px;
}

.auth {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.navs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
}

</style>
