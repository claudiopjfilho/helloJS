function people(name) {
    this.name = name
    this.speak = () => console.log(`My name is ${this.name}`)
    
}

const p1 = new people('Jane')
p1.speak()  