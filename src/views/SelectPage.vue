<template>
    <div>
      <h1>Welcome back! {{ username }}</h1>
    </div>
    <div class="task-container">
      <TaskWindow/>
    </div>
  </template>
  
  <script>
  import TaskWindow from "@/components/Home/TaskWindow";
  export default {
    name: 'HomePage',
    components: {
      TaskWindow
    },
    data() {
      return {
        ex_id: 0,
        allExercises: []
      }
    },
    props: {
      username: String
    },
  }
  
  </script>
  
  <style>
  .task-container {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    width: 100%;
    border-radius: 5px;
    overflow: auto;
    background-color: #4b4b4b;
    color: white;
  }
  
  </style>