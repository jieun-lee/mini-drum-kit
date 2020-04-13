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

Vue.component('drum', {
    props: ['type'],
    template: `
        <div>
            <div
                class="drum"
                :style="pressed ? { backgroundColor: this.colour } : ''"
                @click="dehighlightDrum"
                @mousedown="playSound"
            >
                <h2>{{ name }}</h2>
                <p class="drum-letter">{{ keyLetter }}</p>
            </div>
            <div>
                <input type="range" min="0" max="10" value="5" class="slider" v-model="volSlider">
            </div>
        </div>
    `,
    data() {
        return {
            name: this.type,
            sound: "audio/" + this.type + ".wav",
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
});

var app = new Vue({
    el: '#app'
});
