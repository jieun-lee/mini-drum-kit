var keyCodes = {
    "Kick": ["e", 69],
    "Hat": ["j", 74],
    "Snare": ["f", 70],
    "Crash": ["i", 73]
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
            <p class="drum-letter">{{ keyLetter }}</p>
        </div>
    `,
    data() {
        return {
            name: this.type,
            sound: "audio/" + this.type + ".wav",
            keyLetter: keyCodes[this.type][0],
            keyCode: keyCodes[this.type][1],
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
            if(event.keyCode === this.keyCode) {
                this.highlightDrum();
            }
        });
        window.addEventListener('keyup', (event) => {
            if(event.keyCode === this.keyCode) {
                this.playSound();
            }
        });
    }
});

var app = new Vue({
    el: '#app'
});
