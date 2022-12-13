<template>
  <div class="wrapper2">
    <div class="profile-header">
      <ProfileHeader :username="username" :title=title />
    </div>
    <div class="stats-main">
      <StatField stat-name="Total Score" stat-value="2000"/>
      <StatField stat-name="Achievements" stat-value="2"/>
      <StatField stat-name="# Completed" stat-value="20"/>
      <StatField stat-name="Created" :stat-value=createdAt />
    </div>
  </div>
</template>

<script>
import StatField from "@/components/Personal/Sidebar/StatField";
import ProfileHeader from "@/components/Personal/Sidebar/ProfileHeader";
export default {
  name: 'ProfileCard',
  props: {
    username: String,
    title: String,
    createdAt: String,
  },
  components: {
    StatField,
    ProfileHeader,
  }
}
</script>

<style scoped>

.stats-main {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  column-gap: 2px;
  box-shadow: 0 0 3px 0 rgba(0,0,0.2);
  background-color: #575555;
  color: white;
  padding: 30px;
}

.wrapper2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}



</style>