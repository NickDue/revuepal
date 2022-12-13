<template>
    <div class="wrapper">
    <form>
      <h1 class="headline">Register</h1>
      <p class="signintxt">Please fill in the form to sign up</p>
      
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
            <p>Already have an account? <a href="#">Sign in</a>.</p>
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
  background: #fff;
  padding: 34px;
  margin-top: 100px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}

.wrapper form{
  margin-top: 30px;
}
.wrapper form .input-box{
  height: 52px;
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
  border: 1.5px solid #C7BEBE;
  border-bottom-width: 2.5px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.input-box {
    margin-bottom: 10px;
}

.registerbtn {
    margin-top: 20px;
    width: 30%;
    height: 25px;
    border-radius: 4px;
    background-color:#6ddbb8;
}

.registerbtn:hover {
    background-color: white;
    cursor: pointer;
}

.headline {
    font-size: 26px;
}

.signintxt {
    font-size: 14px;
}


</style>