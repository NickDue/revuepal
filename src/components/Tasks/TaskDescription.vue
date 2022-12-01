<template>
  <div class="description-container">
    <LoremIpsum class="description-text" add="3p" />
  </div>
</template>

<script>
import LoremIpsum from 'vue-lorem-ipsum';
export default {
  name: 'TaskDescription',
  components: {
    LoremIpsum
  }
}
</script>

<style scoped>
.description-container {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 220px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0.2);
  overflow: scroll;
  background-color: #6ddbb8;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 70.5%;
  margin: auto;
  color: white;
  padding: 30px;
  text-align: justify;
  margin-top: 70px;
}

.underline {
  width: 28%;
  height: 4px;
  background-color: #6ddbb8;
  border: none;
  margin: 0px;
}

.headline {
  text-align: left;
  margin: 10px;
  font-size: 28px;
}


</style>