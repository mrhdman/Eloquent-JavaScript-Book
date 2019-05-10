let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");

class Rabbit {
    constructior(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit say '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let underwaterRabbit = new Rabbit("underwater");