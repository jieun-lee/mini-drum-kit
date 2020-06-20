<template>
  <div :class="classString" @click="toggleSelected()"></div>
</template>

<script>
import data from "@/data/drums.json";
export default {
  props: {
    typeIndex: Number
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    toggleSelected() {
      this.isSelected = !this.isSelected;
    }
  },
  computed: {
    classString() {
      var mainClasses = "sub-beat sub-beat--" + data.drums[this.typeIndex]["type"].toLowerCase();
      return mainClasses + (this.isSelected ? " sub-beat--selected" : "");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.sub-beat {
  background-color: white;
  flex: 1 1 0;

  &:not(:last-child) {
    border-right: 1px dotted black;
  }

  &:hover {
    cursor: pointer;
  }

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