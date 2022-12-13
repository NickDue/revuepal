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
  display: flex;
  flex-direction: column;
  height: 180px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0.2);
  overflow-y: hidden;
  overflow-x: disabled;
  background-color: #6ddbb8;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 81.7%;
  margin: auto;
  color: white;
  padding: 30px;
  padding-top: 0px;
  text-align: justify;
  box-shadow: 0 0 4px 0 rgba(0,0,0.2);
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