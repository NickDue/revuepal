<template>
  <div class="container">
    <div class="tds">
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
  gap: 10px;
}

.tds {
  margin-top: 60px;
}
</style>