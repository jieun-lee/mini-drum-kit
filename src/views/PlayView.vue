<template>
  <div class="play-view">
    <h1>Mini Drum Kit</h1>
    <p class="play-view__description">Audio Files from the Focusrite Drum Pack</p>
    <p class="play-view__description">Works best on Google Chrome (desktop version)</p>
    <div class="play-view__drums">
      <PlayDrum :index="this.indexMap['Kick']" />
      <PlayDrum :index="this.indexMap['Snare']" />
      <PlayDrum :index="this.indexMap['Hat']" />
      <PlayDrum :index="this.indexMap['Crash']" />
    </div>
  </div>
</template>

<script>
import data from "@/data/drums.json";
import PlayDrum from '@/components/PlayDrum.vue';
export default {
  components: {
    PlayDrum
  },
  data() {
    return {
      indexMap: data.indexMap
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins.scss";

.play-view {
  text-align: center;
  display: flex;
  flex-direction: column;

  &__description {
    margin-top: 0;
    margin-bottom: 4px;
  }

  &__drums {
    @include view-layout;
  }
}
</style>