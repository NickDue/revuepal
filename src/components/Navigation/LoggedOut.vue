<template>
  <div class="container">
    <router-link to="/login" class="link" id="loginButton">Login</router-link>
    <router-link to="/register" class="link">Register</router-link>
  </div>
</template>

<script>
export default {
  name: 'LoggedOut'
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

.link {
  float: left;
  display: flex;
  color: black;
  align-content: center;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  border-right: 1px solid black;
}

.link:hover {
  background-color: aliceblue;
}

#loginButton {
  border-left: 1px solid black;
}

</style>