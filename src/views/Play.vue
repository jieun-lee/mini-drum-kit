<template>
  <div id="app">
    <h1>Mini Drum Kit</h1>
    <p class="description">Audio Files from the Focusrite Drum Pack</p>
    <p class="description">Works best on Google Chrome (desktop version)</p>
    <div class="drums-wrapper">
      <drum type="Kick"></drum>
      <drum type="Snare"></drum>
      <drum type="Hat"></drum>
      <drum type="Crash"></drum>
    </div>
  </div>
</template>

<script>
import Drum from '@/components/Drum.vue';
export default {
  components: { Drum }
}
</script>

<style lang="scss" scoped>
#app {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.description {
  margin-bottom: 4px;
}

.drums-wrapper {
  display: flex;
  max-width: 600px;
  margin: auto;
  margin-top: 8px;
}

p {
  margin-top: 0;
}
</style>