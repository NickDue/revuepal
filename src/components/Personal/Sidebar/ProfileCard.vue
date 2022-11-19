<template>
  <div>
    <div class="profile-header">
      <ProfileHeader :username="username" :title=title />
    </div>
    <div class="stats-main">
      <StatField stat-name="Total Score" stat-value="2000"/>
      <StatField stat-name="Achievements" stat-value="2"/>
      <StatField stat-name="# Completed" stat-value="20"/>
      <StatField stat-name="Created" :stat-value=createdAt />
    </div>
    <div class="socials-panel">
      <OtherSocials
        facebook="fa-brands fa-facebook-square fa-xl"
        instagram="fa-brands fa-instagram-square fa-xl"
        github="fa-brands fa-github-square fa-xl"
        gitlab="fa-brands fa-gitlab-square fa-xl"
        linkedin="fa-brands fa-linkedin fa-xl"
      />
    </div>
  </div>
</template>

<script>
import StatField from "@/components/Personal/Sidebar/StatField";
import ProfileHeader from "@/components/Personal/Sidebar/ProfileHeader";
import OtherSocials from "@/components/Personal/Sidebar/OtherSocials";
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
    OtherSocials
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
}

.socials-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
}

</style>