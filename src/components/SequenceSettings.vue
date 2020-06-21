<template>
  <div class="settings">
    <div class="settings__label settings__metronome">
      BPM:<div class="settings__metronome__value">{{ this.bpmValue }}</div>
      <input type="range" min="14" max="40" value="20" v-model="bpmSlider" @change="onBpmChanged">
    </div>
    <div class="settings__label settings__time">
      Time:
      <select class="settings__time__menu" @change="onTimeSignatureChanged">
        <option v-for="(time, index) in times" :key="index" :selected="index === timeIndex" :value="index">
          {{ time.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import timeData from "@/data/times.json";
export default {
  props: {
    bpm: Number,
    timeIndex: Number,
    isPlaying: Boolean
  },
  data() {
    return {
      times: timeData.timeSignatures,
      bpmSlider: this.bpm / 4,
    }
  },
  methods: {
    onTimeSignatureChanged(event) {
      this.$emit("time-signature-changed", event.target.value);
    },
    onBpmChanged() {
      this.$emit("bpm-changed", this.bpmValue);
    }
  },
  computed: {
    bpmValue() {
      return this.bpmSlider * 4;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.settings {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: $margin-default;
  margin-left: $sequence-label-size;

  &__label {
    font-weight: 700;
    font-size: 18px;
  }

  &__time {
    &__menu {
      padding: 2px;
      font-size: 16px;
    }
  }

  &__metronome {
    display: flex;

    &__value {
      text-align: left;
      margin-left: 2px;
      width: 36px;
    }
  }
}
</style>