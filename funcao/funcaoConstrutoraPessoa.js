function pessoa(nome) {

    this.getnome = function() {
        return falar = `Olá meu nome é: ${nome}`
    }   
}

const individuo = new pessoa('Clóvis')
individuo.getnome()
console.log(individuo.getnome())

