var keycodes = {
    "Kick": 69,     // "e"
    "Snare": 70,    // "f"
    "Hat": 74,      // "j"
    "Crash": 73     // "i"
}

//////////////////////////////////////////////////////////////////////////

Vue.component('drum', {
    props: ['type'],
    template: `
        <div>
            <h2>{{ name }}</h2>
            <p>{{ keycode }}</p>
            <button @click="playSound">Play {{ name }}</button>
        </div>
    `,
    data() {
        return {
            name: this.type,
            sound: "audio/" + this.type + ".wav",
            keycode: keycodes[this.type],
        }
    },
    methods: {
        playSound() {
            var sound = new Audio(this.sound);
            sound.play();
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        title: 'Mini Drum Kit'
    }
});
