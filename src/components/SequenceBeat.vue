<template>
  <div class="beat">
    <SequenceSubBeat :typeIndex="this.typeIndex" />
    <SequenceSubBeat :typeIndex="this.typeIndex" />
    <SequenceSubBeat :typeIndex="this.typeIndex" />
    <SequenceSubBeat :typeIndex="this.typeIndex" />
  </div>
</template>

<script>
import SequenceSubBeat from "@/components/SequenceSubBeat";
export default {
  props: {
    typeIndex: Number
  },
  components: {
    SequenceSubBeat
  }
}
</script>

<style lang="scss" scoped>
.beat {
  flex: 1 1 0;
  text-align: left;
  display: flex;
  border: 1px solid black;
}
</style>