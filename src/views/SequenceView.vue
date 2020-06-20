<template>
  <div class="sequence-view">
    <SequenceSettings :bpm="this.bpm" :timeIndex="this.timeIndex" />
    <SequenceBar :index="this.indexMap['Kick']" />
    <SequenceBar :index="this.indexMap['Snare']" />
    <SequenceBar :index="this.indexMap['Hat']" />
    <SequenceBar :index="this.indexMap['Crash']" />
    <button class="sequence-view__play-button" @click="togglePlaying()">
      {{ this.isPlaying ? "STOP" : "PLAY" }}
    </button>
  </div>
</template>

<script>
import data from "@/data/drums.json";
import SequenceSettings from "@/components/SequenceSettings.vue";
import SequenceBar from "@/components/SequenceBar.vue";
export default {
  components: {
    SequenceSettings,
    SequenceBar
  },
  data() {
    return {
      indexMap: data.indexMap,
      bpm: 120,
      timeIndex: 1,
      isPlaying: false
    }
  },
  methods: {
    togglePlaying() {
      this.isPlaying = !this.isPlaying;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins.scss";

.sequence-view {
  @include view-layout;
  flex-direction: column;

  &__play-button {
    width: 100px;
    height: 30px;
    font-size: 18px;
    align-self: center;
  }
}
</style>