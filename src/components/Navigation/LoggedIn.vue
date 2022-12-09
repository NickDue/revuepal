<template>
  <div class="container"> 
    <input type="image" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" class="btnimg">
    <router-link :to="'/user/'+ username" class="fa-solid fa-wave-square">User</router-link>
  </div>
</template>

<script>
export default {
  name: 'LoggedIn',

  data() {
    return {
      username: ""
    }
  },

  created() {
      try {
        const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        };
        fetch("/data-access/user-profile-info", requestOptions)
            .then(response => response.json())
            .then(rj => (this.username = rj.name))
        
      }

      catch(e) {
        console.log("Exception: " + e)
      }
  }
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

.btnimg {
  border-radius: 50%;
  border: 2px solid white;
  background-color: #089e7f;
  width: 30px;
  height: 30px;
  
  
}

</style>