<template>
  <div class="beat">
    <SequenceSubBeat />
    <SequenceSubBeat />
    <SequenceSubBeat />
    <SequenceSubBeat />
  </div>
</template>

<script>
import SequenceSubBeat from "@/components/SequenceSubBeat";
export default {
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