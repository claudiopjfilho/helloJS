Array.prototype.forEach2 = function(callback) {
    for(i = 0; i <this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ['Agatha', 'João', 'José', 'Camila']

aprovados.forEach2(function(nome, indice,/* array, x*/){
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array) 
    //console.log(x) undefined
})
