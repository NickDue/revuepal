<template>
  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
       class="profile-image">
  <div class="username-header">
    <h2 class="user-header">{{username}}</h2>
    <h5 class="user-header">{{ title }}</h5>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: {
    username: String,
    title: String
  }
}

</script>

<style scoped>
.profile-image {
  margin-top: 10%;
  border-radius: 50%;
  width: 40%;
  display: flex;
  margin: auto;
  border: 2px solid #6ddbb8;
  box-shadow: 0 0 4px 0 rgba(0,0,0.2);
  margin-bottom: 10px;
  background-color: white;
}
.user-header {
  margin: 0;
  margin: auto;
  color: white;
}

</style>