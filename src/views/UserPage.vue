<template>
  <div class="profile-container">
    <div class="sidebar-container">
      <ProfileCard :username=username />
    </div>
    <div class="content-divider"></div>
    <div class="main-content-container">
      <ContentCard
        title="About me"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/Personal/Sidebar/ProfileCard";
import ContentCard from "@/components/Personal/Content/ContentCard";
  export default {
    props: {
      username: String
    },
    components: {
      ProfileCard,
      ContentCard
    }
  }
</script>

<style>
.profile-container {
  display: flex;
  flex-direction: row;
  height: 850px;
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