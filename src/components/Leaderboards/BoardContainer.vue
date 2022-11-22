<template>
  <table class="scoreboardTable">
    <BoardHeaders />
    <tr class="scoreboardRegularRow" :key="item" v-for="item in items">
      <BoardRows rank="1" :username=item score="2" completed="5"/>
    </tr>
  </table>
</template>

<script>
import BoardHeaders from "@/components/Leaderboards/BoardHeaders";
import BoardRows from "@/components/Leaderboards/BoardRows";
export default {
  name: 'BoardContainer',
  components: {
    BoardHeaders,
    BoardRows
  },
  data() {
    return {
      items: [],
      rawData: ''
    }
  },
  async created() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch("/data-access/get-leaderboards", requestOptions);
    const data = await response.json();
    for (let x in data) {
      this.items.push(data[x])
    }
  },
}

</script>

<style>
.scoreboardTable {
  padding: 0;
  margin: auto;
  border-collapse: collapse;
  width: 80%;
  text-align: center;
  color: black;
}
.scoreboardHeaderRow {
  color: darkorange;
  font-weight: bold;
  height: 50px;
}
.scoreboardRegularRow:hover{
  background-color: darkorange;
}
.scoreboardRegularRow{
  border: 1px solid black;
}
.scoreboardTable tr td {
  height: 25px;
}

</style>