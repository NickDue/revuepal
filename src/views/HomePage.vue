<template>
  <div class="task-container">
    <LogoBar/>   
  </div>
  <div class="img-container">
    <SelectOptions class="select-imgs" filename="home-login.jpg" imgText="Sign Up Here" link="/data-access/create-user"/>
    <SelectOptions class="select-imgs" filename="home-github.jpg" imgText="REVUPPAAL Github" link="/NickDue/revuepal" value="https://www.github.com"/>
    <SelectOptions class="select-imgs" filename="home-docs.jpg" imgText="Learn more" link="/about"/>
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
  justify-content: stretch;
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