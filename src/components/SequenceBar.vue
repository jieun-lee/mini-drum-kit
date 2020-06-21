<template>
  <div class="sequence-bar">
    <div class="sequence-bar__name">{{ this.name }}</div>
    <div class="sequence-bar__beats">
      <SequenceBeat
        v-for="(beatData, index) in sequenceArray"
        :key="index"
        :type="type"
        :beat="index"
        :subBeats="beatData"
        :isPlaying="isPlaying"
        :isCurrBeat="currBeat === index"
        :currSubBeat="currSubBeat"
        @clicked-beat="beatClicked" />
    </div>
  </div>
</template>

<script>
import data from "@/data/drums.json";
import SequenceBeat from "@/components/SequenceBeat";
export default {
  components: {
      SequenceBeat
  },
  props: {
    type: Number,
    sequenceArray: Array,
    isPlaying: Boolean,
    currBeat: Number,
    currSubBeat: Number
  },
  data() {
    return {
      name: data.drums[this.type]["type"]
    }
  },
  methods: {
    beatClicked(beat, subBeat, value) {
      this.$emit("clicked-sequence", this.type, beat, subBeat, value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.sequence-bar {
  display: flex;
  height: $sequence-label-size;
  margin-bottom: $margin-default;

  &__name {
    width: $sequence-label-size;
    color: black;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: auto 0;
  }

  &__beats {
      flex: 1 1 0;
      display: flex;
      height: 100%;
      border: 1px solid black;
  }
}
</style>