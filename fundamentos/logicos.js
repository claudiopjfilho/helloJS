function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || "ou" usa dois pipes
    const comprarTV50 = trabalho1 && trabalho2 // && significa "e"
   // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor (ou exclusivo que opera em cima de bit a bit)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv32, comprarTV50, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false , false))

