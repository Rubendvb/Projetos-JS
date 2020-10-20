var nome = window.prompt('Digite seu nome: ')
var sobreNome = window.prompt('Digite seu sobrenome: ')
var idade = window.prompt('Digite sua idade: ')

console.log(`Olá, ${nome}!`)
console.log(`Nome e sobrenome: ${nome} ${sobreNome}`)
console.log(`Idade: ${idade}`)

console.table({
    Nome: `${nome}`,
    Sobrenome: `${sobreNome}`,
    Idade: `${idade}`
})