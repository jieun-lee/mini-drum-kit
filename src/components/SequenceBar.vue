<template>
  <div class="sequence-bar">
    <div class="sequence-bar__name">{{ this.name }}</div>
    <div class="sequence-bar__beats">
      <SequenceBeat :typeIndex="this.typeIndex" />
      <SequenceBeat :typeIndex="this.typeIndex" />
      <SequenceBeat :typeIndex="this.typeIndex" />
      <SequenceBeat :typeIndex="this.typeIndex" />
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
    typeIndex: Number
  },
  data() {
    return {
      name: data.drums[this.typeIndex]["type"]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

$name-box-size: 75px;

.sequence-bar {
  display: flex;
  height: $name-box-size;
  margin-bottom: $margin-default;

  &__name {
    width: $name-box-size;
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