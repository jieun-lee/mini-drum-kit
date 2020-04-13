// returns the keycode for the given event
var getDefaultKeyCode = function(type) {
    switch(type) {
        case "Kick":
            return 69; // "e"
            break;
        case "Snare":
            return 70; // "f"
            break;
        case "Hat":
            return 74; // "j"
            break;
        case "Crash":
            return 73; // "i"
            break;
        default:
            return 32; // spacebar
    }
}

//////////////////////////////////////////////////////////////////////////

Vue.component('drum', {
    props: ['type'],
    template: `
        <div>
        <h2>{{ name }}</h2>
        <p>{{ file }}</p>
        <p>{{ keycode }}</p>
        </div>
    `,
    data() {
        return {
            name: this.type,
            file: "/audio/" + this.type + ".wav",
            keycode: getDefaultKeyCode(this.type),
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        title: 'Mini Drum Kit'
    }
});
