<template>
  <div>
    <h1>Welcome back! {Username}</h1>
  </div>
  <div class="task-container">
    <TaskWindow />
  </div>
</template>

<script>
import TaskWindow from "@/components/Home/TaskWindow";
export default {
  name: 'HomePage',
  components: {
    TaskWindow
  }
}

</script>

<style>
.task-container {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  width: 100%;
  border-radius: 25px;
  overflow: auto;
}

</style>