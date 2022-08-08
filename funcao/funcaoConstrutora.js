function Caminhonete(velocidadeMaxima = 275, delta = 6) {
     // atributo privado
    let velocidadeAtual = 0


    // metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }   else {
            velocidadeAtual = velocidadeMaxima
        }
    }


    //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}

const toro = new Caminhonete
toro.acelerar()
console.log(toro.getVelocidadeAtual())

const hillux = new Caminhonete(220, 30)
hillux.acelerar()
hillux.acelerar()
hillux.acelerar()
console.log(hillux.getVelocidadeAtual())



