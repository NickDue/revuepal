<template>
  <div class="loginBtnArea">
    <button class="login" @click="$router.push({name: 'Create'})">SIGN UP</button>
    <GoogleLogin :callback="callback">
      <button class="login">LOGIN</button>
    </GoogleLogin>
  </div>
  
</template>

<script setup>
  import {defineEmits} from 'vue'
  const emit = defineEmits(['logsin', 'getUsername'])

  const callback = (response) => {
    console.log("Handle the response", response)
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "code": String(response.code) })
    };  
    
    fetch("/auth", requestOptions)
        .then(usernameFetch())
        .then(myFunction())
  }

  const myFunction = () => {
    emit('logsin', true)
  }

  const emitJson = (jData) => {
    emit('getUsername', jData.name)
  }

  const usernameFetch= () => {
    const requestOptions2 = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin"
    }
    fetch("/data-access/user-profile-info", requestOptions2)
          .then(response => { if(response.status == 404) { newFunc();  
          console.log("Entered if");
          console.log(response.status) } else { emitJson(response.json())
          console.log("Error, else entered")} } )

  }

  const newFunc = () => {
    this.$router.push({name: 'Create'});
  }

</script>

<style>

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
  display: flex;
  background-color: #4B4B4B;
  padding-left: 10px;
  padding-right: 30px;
  padding-bottom: 7px;
  padding-top: 10px;
  
}

.login {
  background-color: #4b4b4b;
  color: white;
  height: 35px;
  width: 100px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  transition: 0.6s;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  margin-right: 7.5%;
  box-shadow: 0 0 4px 0 rgba(0,0,0.2);
  border: none;
  color: white;
}

.login:hover{
  color: #6ddbb8;
  transition: 1s;
}

</style>
