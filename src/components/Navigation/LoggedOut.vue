<template>
  <div class="loginBtnArea">
    <GoogleLogin :callback="callback">
      <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="btnimg" v-on:click="openLoginMenu()"/>
    </GoogleLogin>
  </div>
</template>

<script>
export default {
  name: 'LoggedOut'
}

</script>

<style scoped>




.btnimg {
  border-radius: 50%;
  border: 2px solid white;
  padding: 10%;
  width: 25px;
  height: 25px;
  
}

.btnimg:hover{
  border-color: #12ff94;
  transition: 0.8s;
  
}

.btntext {
  border: none;
  background-color: #4B4B4B;
  cursor: pointer;
  color: white;
}

.btntext:hover {
  color: #42B983;
  transition: 0.8s;
}

.loginBtnArea {
  display: inline-block;
  background-color: #4B4B4B;
  padding-left: 10px;
  padding-right: 30px;
  padding-bottom: 7px;
  padding-top: 10px;
  margin-left: 450px;
  
}

</style>