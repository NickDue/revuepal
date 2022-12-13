<template>
  <div class="flex-container">
    <div class="flex-left">
      <h1 class="headline">ABOUT</h1>
      <hr class="underline">
        <p>
         REVUPPAAL is an online assessment platform, enabling users to train their UPPAAL skills,
         and on the same time compete alongside other users, based on their ability to complete different UPPAAL exercises.
        </p>
        <p>
         The REVUPPAAL project is an open source project, developed by students at Aalborg University. You can access
         the Github repository below.
        </p>
        <p>
         According to UPPAALs own website, it is an <i>"integrated tool environment for modeling, validation
         and verification of real-time systems modeled as networks of timed automata"</i>. For more information,
         visit the official UPPAAL website below.
        </p>
        <p>
         The REVUPPAAL website provides an interactive UPPAAL interface, allowing users to design their own UPPAAL
         models, based on given queries, and thereby train their abilities in using UPPAAL. The assignment can be verified
         by the user, in order to determine if a given query has been verified. The user is rewarded XP upon completion
         of exercises, and can compete with friends and other users through the leaderboard, showing which users have made
         the most progression.
        </p>
    </div>
    <div class="flex-right">
    <img src="../assets/img/about-img.jpg" class="image"/>
    </div>  
  </div>
  <div class="bottomBoxes">
    <div class="bBox">
      <h1 class="headline">GITHUB</h1>
      <hr class="underline2">
      <p>REVUPPAAL is an open source assessment tool, and the code is therefore available on GITHUB.
        Follow the link below in order to view it.
      </p>
      <button class="btn">GITHUB</button>
      </div>
    <div class="bBox">
      <h1 class="headline">UPPAAL</h1>
      <hr class="underline2">
      <p>Follow the link below in order to visit the UPPAAL website. There you can read more about UPPAAL and 
        access their documentation.
      </p>
      <button class="btn">UPPAAL</button>
    </div>
    <div class="bBox">
      <h1 class="headline">CONTACT</h1>
      <hr class="underline2">
      <p><b><u>e-mail:</u></b></p>
      <p><b>revuppaal@gmail.com</b></p>
    </div>
  </div>

  
</template>

<script>
// functionalities
</script>

<style scoped>

.flex-container {
display: flex;
color: white;
flex-direction: row;
justify-content: center;
margin-top: 110px;
height: 400px;

}

.btn {
background-color: #4b4b4b;
color: white;
border: 2px solid #6ddbb8;
height: 40px;
width: 100px;
font-weight: 600;
font-size: 12px;
cursor: pointer;
transition: 0.6s;
align-items: center;
vertical-align: bottom;
bottom:10%;
margin-left: 5%;
margin-top: 5%;

}

.btn:hover {
color: #6ddbb8;
transition: 0.4s;
}

.image {
height: 100%;
width: 40%;
opacity: 100%;
}
.underline {
width: 50%;
height: 3px;
background-color: #6ddbb8;
border: none;
margin: 0px;
}
.underline2 {
width: 50%;
height: 3px;
background-color: black;
border: none;
margin: 0px;
overflow: hidden;
}

.headline {
text-align: left;
margin: 10px;
font-weight: 700;
}

.flex-left {
width: 33%;
background-color: #4b4b4b;
text-align: justify;
padding: 30px;
padding-left: 100px;
padding-right: 100px;
box-shadow: 0 0 4px 0 rgba(0,0,0.2);
border: none;
overflow: hidden;

}

.flex-right {
display: flex;
box-shadow: 0 0px 4px 0 rgba(0,0,0.2);
background-color: #4b4b4b;
justify-content: center;
align-items: center;
height: auto;
width: 30%;

}

.image {
height: 100%;
width: 100%;
object-fit: cover;
}

.bottomBoxes {
display: flex;
justify-content: center;
align-items: center;
margin: auto;
}

.bBox {
border: 1px solid black;
padding: 40px;
margin: 50px;
width: 318px;
height: 230px;
background-color: #6ddbb8;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
color: black;
text-align: justify;
display: table;
}

</style>
