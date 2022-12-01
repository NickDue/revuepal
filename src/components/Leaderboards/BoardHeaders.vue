<template>
  <tr class="scoreboardHeaderRow">
    <th class="scoreboardHeader">Rank</th>
    <th class="scoreboardHeader">Username</th>
    <th class="scoreboardHeader">Score</th>
    <th class="scoreboardHeader"># Completed</th>
  </tr>
</template>

<script>
export default {
  name: 'BoardHeaders'
}

</script>

<style scoped>
.scoreboardHeaderRow {
  color: #6ddbb8;
  font-size: 13px;
  height: 40px;
  border: 1px solid black;
  background-color: #333333;
}

.scoreboardHeader th {
  height: 20px;
}

</style>