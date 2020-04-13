// returns the keycode for the given event
var getDefaultKeyCode = function(type) {
    switch(type) {
        case "Kick":
            return 69; // "e"
        case "Snare":
            return 70; // "f"
        case "Hat":
            return 74; // "j"
        case "Crash":
            return 73; // "i"
    }
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
            keycode: getDefaultKeyCode(this.type),
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
