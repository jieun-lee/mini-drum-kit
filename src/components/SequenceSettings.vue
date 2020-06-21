<template>
  <div class="settings">
    <div class="settings__label settings__metronome">
      BPM: <div class="settings__metronome__value">{{ this.bpm }}</div>
    </div>
    <div class="settings__label settings__time">
      Time:
      <select class="settings__time__menu">
        <option v-for="(time, index) in times" :key="index" :selected="index === timeIndex">
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
    // TODO: disable setting changes while playing
    isPlaying: Boolean
  },
  data() {
    return {
      times: timeData.timeSignatures
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.settings {
  align-self: flex-end;
  text-align: left;
  margin-bottom: $margin-default;

  &__label {
    font-weight: 700;
    font-size: 18px;
  }

  &__time {
    &__menu {
      padding: 2px;
      font-size: 18px;
    }
  }

  &__metronome {
    &__value {
      display: inline-block;
    }
  }
}
</style>