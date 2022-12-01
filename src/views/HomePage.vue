<template>
  <div class="task-container">
    <LogoBar/>   
  </div>
  <div class="img-container">
    <SelectOptions class="select-imgs" filename="home-login.jpg" imgText="Sign Up Here"/>
    <SelectOptions class="select-imgs" filename="home-github.jpg" imgText="REVUPPAAL Github"/>
    <SelectOptions class="select-imgs" filename="home-docs.jpg" imgText="Learn more"/>
  </div>
</template>

<script>
import LogoBar from "@/components/Navigation/LogoBar";
import SelectOptions from "@/components/Home/SelectOptions";
export default {
  name: 'HomePage',
  components: {
    LogoBar,
    SelectOptions
  }
}

</script>

<style>

.img-container {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.select-imgs{
  width: 33%;
  padding: 50px;
  
  
}

.select-imgs:after {
  content: "";
  clear: both;
  display: table;
}

.task-container {
  overflow: hidden;
}

</style>