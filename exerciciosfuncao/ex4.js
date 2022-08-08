/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/
function divisao(dividendo, divisor) {
    return{
       resultado: dividendo / divisor,
        resto: dividendo % divisor
    }
}

console.log(divisao(50, 2))
console.log(divisao(9, 3))
console.log(divisao(33, 2))

