<template>
  <div class="loginBtnArea">
    <button class="login" @click="$router.push({name: 'Create'})">Sign Up</button>
    <GoogleLogin :callback="callback">
      <button class="login">Login</button>
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
      headers: { "Content-Type": "application/json" }
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
  display: flex;
  background-color: #4B4B4B;
  padding-left: 10px;
  padding-right: 30px;
  padding-bottom: 7px;
  padding-top: 10px;
  margin-left: 450px;
  
}

.login {
  background-color: #4b4b4b;
  margin-right: 20px;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: #4b4b4b;
  cursor: pointer;
  color: white;
  box-shadow: 0 0 4px 0 rgba(0,0,0.2);
}

.login:hover{
  color: #42B983;
  transition: 1s;
}

</style>
