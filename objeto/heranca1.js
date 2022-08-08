const ferari = {
    modelo: 'F50',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax:220
}

console.log(ferari.__proto__)
console.log(ferari.__proto__=== Object.prototype)
console.log(volvo.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__ === null)

function myObject() {}
console.log(typeof Object, typeof myObject)
console.log(Object.prototype, myObject.prototype) 
