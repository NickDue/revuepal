<template>
  <div class="container">
    <div>
      <h1>Complete this task!</h1>
    </div>
    <div>
      <TaskDescription />
    </div>
    <div>
      <UppaalCanvas />
    </div>
    <div>
      <TaskButtons />
    </div>
  </div>
</template>

<script>
import TaskDescription from "@/components/Tasks/TaskDescription";
import UppaalCanvas from "@/components/Tasks/UppaalCanvas";
import TaskButtons from "@/components/Tasks/TaskButtons";
export default {
  name: 'TaskPage',
  props: {
    taskid: Number
  },
  components: {
    TaskDescription,
    UppaalCanvas,
    TaskButtons
  }
}

</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

</style>