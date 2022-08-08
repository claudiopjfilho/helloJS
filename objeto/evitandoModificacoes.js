//Object.preventExtensions

const produto = Object.preventExtensions({
    nome:'Qualquer' , preco: 1.99, tag: 'Promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) //pode excluir atributos mas não pode adicionar os atributos

//Object.seal

const pessoa = {nome : 'Alice', idade: 36}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Barros'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes