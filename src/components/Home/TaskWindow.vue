<template>
  <div class="task-window">
    <div class="task-header">
      <p>Your next challenge </p>
    </div>
    <div class="difficulty-select">
      <select name="difficulty" id="difficulty">
        <option value="" disabled selected hidden>Choose task type</option>
        <option value="fundamentals">Fundamentals</option>
        <option value="RankUp">Rank Up</option>
        <option value="PandR">Practice & Repeat</option>
        <option value="random">radnom</option>
      </select>
    </div>
    <div class="button-container">
      <button class="simple-button train">
        <router-link :to="'/task/'+currentTask" class="fa-solid fa-wave-square">Train</router-link>
      </button>
      <button class="simple-button train">
        <i class="fa-solid fa-forward">Skip</i>
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
      currentTask: 0,
      exerciseName: "",
      exerciseDescription: ""
    }
  },
  props: {
    exerciseId: Number
  },
  async created() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ex_id: this.exerciseId })
    };
    const response = await fetch("/data-access/get-exercise-description", requestOptions);
    const data = await response.json();
    this.exerciseDescription = data.description
    this.exerciseName = data.name
  }
}
</script>

<style scoped>
.task-window {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  height: 200px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 3px;
  min-width: 35%;
  max-width: 35%;
  border-right: 1px solid black;
  padding-right: 10%;
}

.simple-button {
  border: 2px solid #d2bdff;
  height: 30px;
  width: 80px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
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
  border-radius: 15px;
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
}

.description-text {
  overflow: scroll;
}

.description-header-text {
  margin: 0;
  border-bottom: 1px solid black;
}

router-link {
  text-decoration: none;
}


</style>