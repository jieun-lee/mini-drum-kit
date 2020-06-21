<template>
  <div class="sequence-view">
    <SequenceSettings :bpm="this.bpm" :timeIndex="this.timeIndex" :isPlaying="isPlaying" />
    <SequenceBar
      v-for="(sequenceArray, index) in sequences"
      :key="keyPrefix + '-' + index"
      :type="index"
      :sequenceArray="sequenceArray"
      :isPlaying="isPlaying"
      :currBeat="currBeat"
      :currSubBeat="currSubBeat"
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
import times from "@/data/times.json";
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
      bpm: 120,
      subBeats: 4,
      timeIndex: 1,
      sequences: makeEmptySequenceSet(4, 4, 4),
      isPlaying: false,
      timer: 0,
      currBeat: -1,
      currSubBeat: -1,
    }
  },
  methods: {
    togglePlaying() {
      if (this.isPlaying) {
        this.resetTimer();
      } else {
        this.timer = setInterval(this.updateSubBeat, this.msPerSubBeat);
      }
      this.isPlaying = !this.isPlaying;
    },
    resetTimer() {
      // TODO: stop timer when going to another page
      clearInterval(this.timer);
      this.currBeat = -1;
      this.currSubBeat = -1;
    },
    updateSubBeat() {
      // update beat
      this.currSubBeat = (this.currSubBeat >= 3) ? 0 : (this.currSubBeat + 1);
      if (this.currSubBeat === 0) {
        this.currBeat = (this.currBeat >= 3) ? 0 : (this.currBeat + 1);
      }
      // play sound
      // console.log(this.currBeat + "-" + this.currSubBeat);
    },
    resetSequence() {
      if (!this.isPlaying) {
        this.sequences = makeEmptySequenceSet(4, 4, 4);
      }
    },
    sequenceClicked(type, beat, subBeat, value) {
      this.sequences[type][beat][subBeat] = value;
      this.keyPrefix++;
    }
  },
  computed: {
    numBeats() {
      return times.timeSignatures[this.timeIndex]["numerator"];
    },
    msPerSubBeat() {
      return 60000 / this.bpm / this.subBeats;
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