let idade = 0
function Pessoa () {
    this.idade = 0


    const self = this
    let intervalo = setInterval(function() {
        self.idade++
        console.log(self.idade)
        if (idade++ >= 6) clearInterval(intervalo);
    }/*.bind(this)*/ ,1000)
}

new Pessoa()
