<template>
  <DropDown/>
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

.img_user {
  border-radius: 50%;
  border: 2px solid white;
  background-color: #089e7f;
  width: 35px;
  height: 35px;
  margin-top: .3.5rem;
  
  
}

</style>