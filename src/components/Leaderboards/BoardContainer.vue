<template>
  <table class="scoreboardTable">
    <BoardHeaders />
    <tr class="scoreboardRegularRow" v-for="item of items" :key="item.name">
      <BoardRows :rank=item.rank :username=item.name :score=item.xp :completed=item.total />
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
      rawData: '',
    }
  },
  created() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/data-access/get-user-scores", requestOptions)
        .then(response => (response.json()))
        .then(data => this.fillItems(data));

  },
  methods: {
    fillItems(data){
      for (let x in data) {
        this.items.push({"rank": x, "name": data[x][0], "xp":data[x][1], "total":data[x][2]})
      }
    }
  }
}

</script>

<style>
.scoreboardTable {
    padding: 0;
    margin: auto;
    border-collapse: collapse;
    width: 60%;
    text-align: center;
    color: black;
    margin-top: 110px;
  }

.table {
  box-shadow: 0 2px 4px 0 rgba(0,0,0.2);
}


</style>