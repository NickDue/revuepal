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
  height: 850px;
  border: 1px solid black;
  background-color: gray;
}

.content-divider {
  display: block;
  border: 1px solid black;
  margin-right: 2%;
}

.sidebar-container {
  display: flex;
  width: 35%;
  margin-right: 2%;
  overflow: auto;
}

.main-content-container {
  display: flex;
  align-content: stretch;
  flex-direction: column;
  width: 59%;
}


</style>