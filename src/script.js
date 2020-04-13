var keyCodes = {
    "Kick": 69,     // "e"
    "Hat": 74,      // "j"
    "Snare": 70,    // "f"
    "Crash": 73     // "i"
}

var colourCodes = {
    "Kick": '#7abeeb',
    "Hat": '#fff9a1',
    "Snare": '#c6f2a7',
    "Crash": '#fc92a4',
}

Vue.component('drum', {
    props: ['type'],
    template: `
        <div
            class="drum"
            :style="pressed ? { backgroundColor: this.colour } : ''"
            @click="playSound"
            @mousedown="highlightDrum"
        >
            <h2>{{ name }}</h2>
            <p>{{ keycode }}</p>
        </div>
    `,
    data() {
        return {
            name: this.type,
            sound: "audio/" + this.type + ".wav",
            keycode: keyCodes[this.type],
            colour: colourCodes[this.type],
            pressed: false
        }
    },
    methods: {
        playSound() {
            var sound = new Audio(this.sound);
            sound.play();
            this.pressed = false;
        },
        highlightDrum() {
            this.pressed = true;
        }
    },
    mounted() {
        window.addEventListener('keydown', (event) => {
            if(event.keyCode === this.keycode) {
                this.highlightDrum();
            }
        });
        window.addEventListener('keyup', (event) => {
            if(event.keyCode === this.keycode) {
                this.playSound();
            }
        });
    }
});

var app = new Vue({
    el: '#app'
});
