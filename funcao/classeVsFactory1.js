class people {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new people('Jane')
p1.speak()

const criatepeople = name => {
    return {
        speak: () => console.log(`My name is ${name}`)
    }
}

const p2 = criatepeople('John')
p2.speak()