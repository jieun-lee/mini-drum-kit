<template>
  <div class="beat">
    <div
      v-for="(isSelected, index) in subBeats"
      :key="index"
      :class="[ isSelected ? baseClasses + ' sub-beat--selected' : baseClasses ]"
      @click="toggleSubBeat(index, isSelected)"
    >
      <div class="sub-beat__playing" v-if="isSelected && (currentSubBeat === index)">&#x25CF;</div>
  </div>
  </div>
</template>

<script>
import data from "@/data/drums.json";
export default {
  props: {
    type: Number,
    beat: Number,
    subBeats: Array,
    isPlaying: Boolean
  },
  data() {
    return {
      baseClasses: "sub-beat sub-beat--" + data.drums[this.type]["type"].toLowerCase(),
      currentSubBeat: 0
    }
  },
  methods: {
    toggleSubBeat(subBeat, isSelected) {
      if (!this.isPlaying) {
        this.$emit("clicked-beat", this.beat, subBeat, !isSelected);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
.beat {
  flex: 1 1 0;
  text-align: left;
  display: flex;
  border: 1px solid black;
}

.sub-beat {
  background-color: white;
  flex: 1 1 0;

  &:not(:last-child) {
    border-right: 1px dotted black;
  }

  &__playing {
    color: white;
    font-size: 48px;
    text-align: center;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  // drum colors
  &--kick {
    &:hover {
      background-color: $color-kick-hover;
    }
    &.sub-beat--selected {
      background-color: $color-kick;
    }
  }
  &--snare {
    &:hover {
      background-color: $color-snare-hover;
    }
    &.sub-beat--selected {
      background-color: $color-snare;
    }
  }
  &--hat {
    &:hover {
      background-color: $color-hat-hover;
    }
    &.sub-beat--selected {
      background-color: $color-hat;
    }
  }
  &--crash {
    &:hover {
      background-color: $color-crash-hover;
    }
    &.sub-beat--selected {
      background-color: $color-crash;
    }
  }
}
</style>