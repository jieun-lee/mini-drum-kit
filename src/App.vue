<template>
  <div class="app">
    <div class="app__nav">
      <router-link :to="{ name: 'Play' }">Play</router-link> |
      <router-link :to="{ name: 'Sequence' }">Sequence</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  &__nav {
    padding: 30px;

    & a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
