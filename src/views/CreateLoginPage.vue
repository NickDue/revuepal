<template>
    <div class="wrapper">
    <form>
      <h1 class="headline">Register</h1>
      <p class="signintxt">Please fill in the form to sign up</p>
      <p class="signintxt2"> The email must be a valid Google account</p>
      
      <div class="input-box">
        <label for="username"><b>Username</b></label>
        <input type="text" v-model="username" placeholder="Username" name="username" required>
      </div>
      <div class="input-box">
        <label for="email"><b>Email</b></label>
        <input type="text" v-model="email" placeholder="Enter Email" name="email" required>
      </div>

      <div class="input-box">
        <label for="about"><b>About</b></label>
        <input type="text" v-model="about" placeholder="Write about yourself" name="about">
      </div>
        <button type="submit" class="registerbtn">Register</button>
        
        <div class="container signin">
        </div> 
  </form>
</div>

</template>

<script>
    export default {
        
        data() {
            return {
               username: '',
               email: '',
               about: '', 
            }
        },
    

        methods: {
            async getExerciseDescription() {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 'username': this.username, 'email': this.email, 'about': this.about })
                };
                const response = await fetch("/data-access/create-user", requestOptions);

                if(response.ok) {
                    this.$router.push('/');
                }

                else {
                    alert("You no has Gogle account!!");
                }
               
            }
        }
        
    }
</script>

<style>

.wrapper{
  margin: auto;
  max-width: 430px;
  width: 100%;
  padding: 34px;
  margin-top: 100px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  background-color: #4b4b4b;
  color: white;
  border: none;
}

.wrapper form{
  margin-top: 30px;
  
}
.wrapper form .input-box{
  height: 40px;
  margin: 18px 0;
  margin-bottom: 40px;
  
}
form .input-box input{
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  font-weight: 400;
  color: #333;
  border: 1px solid #C7BEBE;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  border-radius: 6px;
  margin-top: 8px;
}

.input-box {
    margin-bottom: 10px;
}

.registerbtn {
    background-color: rgba(63, 63, 63, 0.755);
    color: white;
    height: 40px;
    width: 100px;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    transition: 0.6s;
    border-radius: 4px;
    font-family: "Montserrat", sans-serif;
    box-shadow: 0 0 4px 0 rgb(33, 33, 33);
    border: none;
    color: #6ddbb8;
    margin-top: 40px;
    margin-bottom: 25px;
}

.registerbtn:hover {
    color: white;
    cursor: pointer;
    transition: 1s;
}

.headline {
    font-size: 26px;
    color: #6ddbb8
}

.signintxt {
    font-size: 14px;
}

.signintxt2 {
    font-size: 14px;
    margin-bottom: 50px;
}


</style>