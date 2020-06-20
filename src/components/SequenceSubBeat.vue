<template>
  <div class="sub-beat">
  </div>
</template>

<style lang="scss" scoped>
.sub-beat {
  background-color: palegreen;
  flex: 1 1 0;

  &:not(:last-child) {
    border-right: 1px dotted black;
  }
}
</style>