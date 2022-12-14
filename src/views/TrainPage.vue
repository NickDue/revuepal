<template>
  <div class="container">
    <div class="tds">
      <TaskDescription :description=description :exerciseName=exerciseName />
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
  data() {
    return {
      exerciseName: '',
      description: ''
    }
  },
  name: 'TaskPage',
  props: {
    taskid: Number,
  },
  components: {
    TaskDescription,
    UppaalCanvas,
  },
  async created() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ex_id: this.taskid})
    };
    const response = await fetch("/data-access/get-exercise-description", requestOptions);
    const data = await response.json();
    this.description = data.description
    this.exerciseName = data.name
  }
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