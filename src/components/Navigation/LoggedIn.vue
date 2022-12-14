<template>
  <button class="btn" @click="logoutUser(); logOut()">
      Logout
    </button>
  <div>
    <button class="signOutBtn" @click="enterMenu">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" class="btnimg">   
    <router-link :to="'/user/' + username"/>
  </button>
  </div>
</template>

<script>



export default {
  name: 'LoggedIn',

  data() {
    return {
      username: "",
      showMenu: true
    }
  },

  created() {
      this.verifyUser();
  }, 

  methods: {
    logoutUser() {
      console.log("Hi")
      var hej = this.$cookies.remove('access_token');
      console.log(hej)
      this.$cookies.remove('refresh_token');
    },

    enterMenu() {
      this.verifyUser();
      this.$router.push('/user/' + this.username)
    },

    verifyUser() {
      try {
        const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin"
        };
        fetch("/data-access/user-profile-info", requestOptions)
            .then(response => response.json())
            .then(rj => (this.username = rj.name))
        
      }

      catch(e) {
        console.log("Exception: " + e)
      }
    },
    
    

  }
}

</script>

<script setup>
  import {defineEmits} from 'vue'
  const emit = defineEmits(['logsout'])
  const logOut = () => {
    emit('logsout', false);
  }

</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 19%;
  padding-top: 4px;
}


.btn {
  background-color: #4b4b4b;
  margin-right: 20px;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: #4b4b4b;
  cursor: pointer;
  color: white;
  box-shadow: 0 0 4px 0 rgba(0,0,0.2);
}

.signOutBtn {
  background-color: #4b4b4b;
  border: none;
}

.btnimg {
  background-color: #4b4b4b;
  border: none;
  margin-right: 20px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  outline: none;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 0 4px 0 rgba(0,0,0.2);
}

.btnimg:hover{
  color: #6ddbb8;
  border: 2px solid #6ddbb8;
  transition: 1s;
}

.btn:hover{
  color: #6ddbb8;
  transition: 1s;
}

</style>