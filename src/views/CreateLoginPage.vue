<template>

<form action="action_page.php">
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>

      <label for="username"><b>Username</b></label>
      <input type="text" v-model="username" placeholder="Username" name="email" id="email" required>
  
      <label for="email"><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" name="email" id="email" required>
      
      <label for="about"><b>About</b></label>
      <input type="text" v-model="about" placeholder="Write about yourself" name="about" id="about">
      <hr>

      <button type="submit" class="registerbtn">Register</button>
    </div>
  
    <div class="container signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>
  </form>

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