<template>
  <div class="profile-container">
    <div class="sidebar-container">
      <ProfileCard :username=username :title=title :created-at=createdAt />
    </div>
    <div class="content-divider"></div>
    <div class="main-content-container">
      <ContentCard
        title="About me"
        :content=about
      />
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/Personal/Sidebar/ProfileCard";
import ContentCard from "@/components/Personal/Content/ContentCard";
  export default {
    data() {
      return {
        title: '',
        createdAt: '',
        about: ''
      }
    },
    props: {
      username: String
    },
    components: {
      ProfileCard,
      ContentCard
    },
    async created() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: this.username })
      };
      const response = await fetch("/data-access/get-user-info", requestOptions);
      const data = await response.json();
      this.about = data.about;
      this.createdAt = data.createdAt
      this.title = data.title
    }
  }
</script>

<style>
.profile-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: white;
  margin-top: 100px;
  overflow: none;
}

.sidebar-container {
  display: flex;
  width: 50%;
  height: 70%;
  margin-right: 30px;
  overflow: auto;
  border: 1px solid black;
  box-shadow: 0 0 4px 0 rgba(0,0,0.2);
  margin-left: 30px;
  padding: 30px;
  background-color: #4b4b4b;
}

.main-content-container {
  display: flex;
  width: 40%;
  height: 70%;
  margin-right: 30px;
  overflow: auto;
  border: 1px solid black;
  box-shadow: 0 0 4px 0 rgba(0,0,0.2);
  border: none;
  margin-left: 30px;
  padding: 30px;
  background-color: #4b4b4b;
  color: white;
}


</style>