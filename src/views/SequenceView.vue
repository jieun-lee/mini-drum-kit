<template>
  <div class="sequence-view">
    <SequenceSettings :bpm="this.bpm" :timeIndex="this.timeIndex" />
    <SequenceBar :typeIndex="this.indexMap['Kick']" />
    <SequenceBar :typeIndex="this.indexMap['Snare']" />
    <SequenceBar :typeIndex="this.indexMap['Hat']" />
    <SequenceBar :typeIndex="this.indexMap['Crash']" />
    <div>
      <button class="sequence-view__button" @click="togglePlaying()">
        {{ this.isPlaying ? "STOP" : "PLAY" }}
      </button>
      <button class="sequence-view__button" @click="resetSequence()">
        RESET
      </button>
    </div>
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
    },
    resetSequence() {
      console.log("reset");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins.scss";

.sequence-view {
  @include view-layout;
  flex-direction: column;

  &__button {
    width: 100px;
    height: 30px;
    font-size: 18px;
    align-self: center;
    margin: 0 6px;
  }
}
</style>