<template>
  <div>
    <div
      class="drum"
      :style="pressed ? { backgroundColor: this.color } : ''"
      @mousedown="playSound"
      @click="dehighlightDrum"
    >
      <h2>{{ name }}</h2>
      <p class="drum__letter">{{ keyLetter }}</p>
    </div>
    <div>
      <input type="range" min="0" max="10" value="5" class="slider" v-model="volSlider">
    </div>
  </div>
</template>

<script>
import data from "@/data/drums.json";
export default {
  props: {
    index: Number
  },
  data() {
    return {
      name: data.drums[this.index]["type"],
      sound: require("@/assets/audio/"+ data.drums[this.index]["type"] + ".wav"),
      keyLetter: data.drums[this.index]["keyLetter"],
      keyCode: data.drums[this.index]["keyCode"],
      color: data.drums[this.index]["color"],
      volSlider: 5,
      pressed: false
    }
  },
  computed: {
    volume() {
      return this.volSlider / 10;
    }
  },
  methods: {
    playSound() {
      var sound = new Audio(this.sound);
      sound.volume = this.volume;
      sound.play();
      this.pressed = true;
    },
    dehighlightDrum() {
      this.pressed = false;
    }
  },
  mounted() {
    window.addEventListener('keydown', (event) => {
      if(event.keyCode === this.keyCode) {
        this.playSound();
      }
    });
    window.addEventListener('keyup', (event) => {
      if(event.keyCode === this.keyCode) {
        this.dehighlightDrum();
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.drum {
  width: 110px;
  padding: 8px;
  margin: 8px;
  padding-bottom: 16px;
  border: $border-default;

  &__letter {
    font-size: 18px;
    font-weight: 600;
    font-family: sans-serif;
    text-transform: capitalize;
  }
}
</style>