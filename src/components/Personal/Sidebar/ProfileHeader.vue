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
  margin-top: 20px;
  border-radius: 50%;
  width: 40%;
}
.user-header {
  margin: 0;
}

</style>