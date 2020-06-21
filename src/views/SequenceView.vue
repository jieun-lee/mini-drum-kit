<template>
  <div class="sequence-view">
    <SequenceSettings :bpm="this.bpm" :timeIndex="this.timeIndex" />
    <SequenceBar
      v-for="(sequenceArray, index) in sequences"
      :key="keyPrefix + '-' + index"
      :type="index"
      :sequenceArray="sequenceArray"
      :isPlaying="isPlaying"
      @clicked-sequence="sequenceClicked" />
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
import { makeEmptySequenceSet } from "@/utils.js";
export default {
  components: {
    SequenceSettings,
    SequenceBar
  },
  data() {
    return {
      keyPrefix: 0,
      indexMap: data.indexMap,
      bpm: 120,
      timeIndex: 1,
      isPlaying: false,
      sequences: makeEmptySequenceSet(4, 4, 4)
    }
  },
  methods: {
    togglePlaying() {
      this.isPlaying = !this.isPlaying;
    },
    resetSequence() {
      this.sequences = makeEmptySequenceSet(4, 4, 4);
    },
    sequenceClicked(type, beat, subBeat, value) {
      this.sequences[type][beat][subBeat] = value;
      this.keyPrefix++;
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