<template>
  <td class="rankItem">{{rank}}</td>
  <td class="usernameItem"><router-link :to="'/user/' + username">{{username}}</router-link></td>
  <td class="scoreItem">{{ score }}</td>
  <td class="completedItem">{{ completed }}</td>
</template>

<script>
export default {
  name: 'BoardRow',
  props: {
    rank: {
      type: Number,
      default: -333
    },
    username: {
      type: String,
      default: "Default"
    },
    score: {
      type: Number,
      default: -666
    },
    completed: {
      type: Number,
      default: -999
    }
  }
}

</script>

<style>
.scoreboardRegularRow {
    border: 1px solid black;
    background-color: #333333;
    color: white;
    font-size: 13px;
    font-weight: 600;

  }

  .scoreboardRegularRow:nth-child(2n){
    background-color: gray;
  }

  .scoreboardTable tr td {
    height: 30px;
  }

</style>

<style scoped>
a {
    color: white;
    text-decoration: none;
    font-weight: 700;
    
  }
</style>