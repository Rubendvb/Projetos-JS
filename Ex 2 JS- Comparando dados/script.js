var nome1 = window.prompt('Digite o nome da primera pessoa: ')
var nome2 = window.prompt('Digite o nome da segunda pessoa: ')
var idade1 = Number(window.prompt(`Digite a idade de ${nome1}: `))
var idade2 = Number(window.prompt(`Digite a idade de ${nome2}: `))
var cor1 = window.prompt(`Digite a cor favorita de ${nome1}: `)
var cor2 = window.prompt(`Digite a cor favorita de ${nome2}: `)

console.log(`Registros de ${nome1} e ${nome2}!`)
console.log(`A idade de ${nome1} é ${idade1}.`)
console.log(`A idade de ${nome2} é ${idade2}.`)

if (idade1 === idade2){
    console.log(`${nome1} e ${nome2}, tem a mesma idade.`)
} else if (idade1 > idade2){
    console.log(`${nome1} é mais velho/a que ${nome2}`)
} else {
    console.log(`${nome2} é mais velho/a que ${nome1}`)
}

if (cor1.toUpperCase() === cor2.toUpperCase()){
    console.log(`${nome1} e ${nome2} gostam da mesma cor ${cor1}`)
} else {
    console.log(`${nome1} e ${nome2} gostam de diferentes cores`)
}
