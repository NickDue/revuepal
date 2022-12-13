<template>
  <div class="button-container">
    <TaskButton text="Submit" />
    <TaskButton text="Skip" />
  </div>
</template>

<script>
import TaskButton from "@/components/Tasks/TaskButton";
export default {
  name: 'TaskButtons',
  components: {
    TaskButton
  }
}
</script>

<style scoped>
.button-container {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
</style>