<template>
  <table class="scoreboardTable">
    <BoardHeaders />
    <tr class="scoreboardRegularRow" v-bind:key="item" v-for="item in items">
      <component :is="item"/>
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
      items: []
    }
  },
  mounted() {
    /* TODO: For-loop here when we can get data from a database */
    this.items.push(<BoardRows rank="1" username="Nicholas" score="2" completed="5"/>)
    this.items.push(<BoardRows rank="2" username="Lasse" score="2" completed="5"/>)
  }
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