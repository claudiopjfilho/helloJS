console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Ana', 'Roberto', 'Joana')
console.log(aprovados)
aprovados = ['Ana', 'Roberto', 'Joana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Kevin'
aprovados.push('Abner')
console.log(aprovados.length)
aprovados[9] = 'Leticia'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log('==========================================')

aprovados = ['Ana', 'Roberto', 'Joana']
aprovados.splice(1, 1)
console.log(aprovados)
