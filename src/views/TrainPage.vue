<template>
  <div class="container">
    <div>
      <h1>Complete this task!</h1>
    </div>
    <div>
      <TaskDescription />
    </div>
    <div>
      <UppaalCanvas :task-id=taskid />
    </div>
  </div>
</template>

<script>
import TaskDescription from "@/components/Tasks/TaskDescription";
import UppaalCanvas from "@/components/Tasks/UppaalCanvas";
export default {
  name: 'TaskPage',
  props: {
    taskid: Number
  },
  components: {
    TaskDescription,
    UppaalCanvas,
  },
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