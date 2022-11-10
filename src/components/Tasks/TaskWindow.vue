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
        <router-link :to="'/task/'+currentTask" >Train</router-link>
      </button>
      <button class="simple-button train">
        Skip
      </button>
    </div>
  </div>
  <div class="description-container">
    <div class="description-header">
      <h4 class="description-header-text">Description</h4>
    </div>
    <div class="description-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskWindow',
  data() {
    return {
      currentTask: 0
    }
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
  width: 50px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
}

.button-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
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