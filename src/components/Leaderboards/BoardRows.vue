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

<style scoped>

</style>