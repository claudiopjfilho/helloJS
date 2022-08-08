// Cadeia de protótipos (Prototype chain)
Object.prototype.attr0 = '0' //Não recomendado
const avo = {attr1: 'A'}
const pai = {__proto__: avo ,attr2: 'B', attr3: '3'}
const filho = {__proto__:pai ,attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 320,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `Está a ${this.velAtual}Km/h de ${this.velMax}Km/h`
    }   
}

const wolkswaggen = {
    modelo: 'Golf', 
    velMax: 280 //shadowing
}
const ford ={
    modelo: 'Ford GT',
    status() {
        return ` ${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(wolkswaggen, carro) //Função importante
Object.setPrototypeOf(ford, carro)
console.log(wolkswaggen)
console.log(ford)
console.log('==========================')

ford.acelerarMais(120)
console.log(ford.status())
wolkswaggen.acelerarMais(230)
console.log(wolkswaggen.status())
