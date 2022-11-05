<template>
  <SocialField :classname="facebook" refer="_blank"/>
  <SocialField :classname="instagram" refer="_blank"/>
  <SocialField :classname="github" refer="_blank"/>
  <SocialField :classname="gitlab" refer="_blank"/>
  <SocialField :classname="linkedin" refer="_blank"/>
</template>

<script>
import SocialField from "@/components/Personal/Sidebar/SocialField";
export default {
  name: 'OtherSocials',
  props: {
    facebook: String,
    instagram: String,
    github: String,
    gitlab: String,
    linkedin: String
  },
  components: {
    SocialField
  }
}
</script>

<style scoped>

</style>