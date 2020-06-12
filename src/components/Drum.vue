<template>
  <div>
    <div
      class="drum"
      :style="pressed ? { backgroundColor: this.colour } : ''"
      @click="dehighlightDrum"
      @mousedown="playSound"
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
var keyCodes = {
  "Kick": ["e", 69],
  "Snare": ["f", 70],
  "Hat": ["j", 74],
  "Crash": ["i", 73]
}

var colourCodes = {
  "Kick": '#7abeeb',
  "Snare": '#fff9a1',
  "Hat": '#c6f2a7',
  "Crash": '#fc92a4',
}

export default {
  props: ['type'],
  data() {
    return {
      name: this.type,
      sound: require("@/assets/audio/" + this.type + ".wav"),
      keyLetter: keyCodes[this.type][0],
      keyCode: keyCodes[this.type][1],
      colour: colourCodes[this.type],
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
.drum {
  width: 110px;
  padding: 8px;
  margin: 8px;
  padding-bottom: 16px;
  border: 2px solid black;

  &__letter {
    font-size: 18px;
    font-weight: 600;
    font-family: sans-serif;
    text-transform: capitalize;
  }
}
</style>