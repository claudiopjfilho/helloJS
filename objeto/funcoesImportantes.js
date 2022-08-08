const pessoa = {
    nome: 'Ana',
    idade: 3,
    peso: 15
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} ${valor}`)
});

/*
Object.entries(pessoa).forEach(e => {
    console.log(`${e[1]} ${e[2]}`)
})
*/

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: 01/01/2019,
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign ES 2015

const dest = {a: 1}

const o1 = { b: 2}

const o2 = {c: 3, a: 5, b: 4}

const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)
obj.c = 1234
console.log(obj)