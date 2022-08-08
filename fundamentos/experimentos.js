let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'


console.log(a)
console.log(global.a) 
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando variavel maluca sem var e let 
abc = 123 // não faça isso
console.log(global.abc)


//module.exports = { f: 456, g: false, h: 'teste' }




