<template>
  <div class="task-window">
    <div class="task-header">
      <p class="challenge">Your next challenge </p>
    </div>
    <div class="difficulty-select">
      <select name="difficulty" id="difficulty">
        <option value="" disabled selected hidden>Choose task type</option>
        <option value="fundamentals">Fundamentals</option>
        <option value="RankUp">Rank Up</option>
        <option value="PandR">Practice & Repeat</option>
        <option value="random">Random</option>
      </select>
    </div>
    <div class="button-container">
      <button class="btn">
        <router-link class="btnlink" :to="'/task/'+ex_id">TRAIN</router-link>
      </button>
      <button class="btn" @click="skipToNextExercise">
        SKIP
      </button>
    </div>
  </div>
  <div class="description-container">
    <div class="description-header">
      <h4 class="description-header-text">{{ exerciseName }}</h4>
    </div>
    <div class="description-text">
      {{ exerciseDescription }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskWindow',
  data() {
    return {
      exerciseName: "",
      exerciseDescription: "",
      allExercises: [],
      ex_id: 1
    }
  },
  created() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/exercise-provider/avalable-exercises", requestOptions)
        .then(response => response.json())
        .then(data => (this.allExercises = data))
        .then(random => (this.ex_id = random[Math.floor(Math.random() * this.allExercises.length)]))
        .then(this.getExerciseDescription)
  },
  methods: {
    async getExerciseDescription() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ex_id: this.ex_id})
      };
      const response = await fetch("/data-access/get-exercise-description", requestOptions);
      const data = await response.json();
      this.exerciseDescription = data.description
      this.exerciseName = data.name
    },
    skipToNextExercise() {
      let newNumber = this.allExercises[Math.floor(Math.random() * this.allExercises.length)]
      while (newNumber === this.ex_id){
        newNumber = this.allExercises[Math.floor(Math.random() * this.allExercises.length)]
      }
      this.ex_id = newNumber
      this.getExerciseDescription()
    }
  }
}
</script>

<style scoped>
.task-window {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  height: 230px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 3px;
  min-width: 35%;
  max-width: 35%;
  border-right: 1px solid black;
  padding-right: 10%;

}

.btn {
  background-color: rgba(53, 53, 49, 0.954);
  color: white;
  height: 40px;
  width: 100px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  margin-right: 7.5%;
  border: none;
  color: white;
  text-decoration: none;
  transition: 1s;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
}

.btnlink {
  text-decoration: none;
  color: white;
}

.btnlink:hover {
  text-decoration: none;
  color: #6ddbb8;
  transition: 1s;
}

.btn:hover {
color: #6ddbb8;
transition: 1s;
}
.button-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  padding-top: 90px;
}

.task-header {
  display: flex;
  justify-content: flex-start;

}

p {
  margin: 0;
}

.difficulty-select {
  margin-top: 10px;
  
}

#difficulty {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 18px;
  border-radius: 5px;
  background-color: white;
  font-family: "Montserrat", sans-serif;
  padding-left: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
}

.challenge {
  color: #6ddbb8;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
}

.description-container {
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 50%;
  height: 200px;
  width: 47%;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
}

.description-text {
  overflow-y: scroll;
}

.description-header-text {
  margin: 0;
  border-bottom: 1px solid black;
}

router-link {
  text-decoration: none;
}




</style>