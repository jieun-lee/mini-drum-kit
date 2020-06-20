<template>
  <div class="play-view">
    <h1>Mini Drum Kit</h1>
    <p class="play-view__description">Audio Files from the Focusrite Drum Pack</p>
    <p class="play-view__description">Works best on Google Chrome (desktop version)</p>
    <div class="play-view__drums">
      <Drum :index="this.indexMap['Kick']" />
      <Drum :index="this.indexMap['Snare']" />
      <Drum :index="this.indexMap['Hat']" />
      <Drum :index="this.indexMap['Crash']" />
    </div>
  </div>
</template>

<script>
import data from "@/data/drums.json";
import Drum from '@/components/Drum.vue';
export default {
  components: {
    Drum
  },
  data() {
    return {
      indexMap: data.indexMap
    }
  }
}
</script>

<style lang="scss" scoped>
.play-view {
  text-align: center;
  display: flex;
  flex-direction: column;

  &__description {
    margin-top: 0;
    margin-bottom: 4px;
  }

  &__drums {
    display: flex;
    max-width: 600px;
    margin: auto;
    margin-top: 8px;
  }
}
</style>