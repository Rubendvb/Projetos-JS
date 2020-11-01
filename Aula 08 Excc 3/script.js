let registro = []

while (true) {
    let nome = window.prompt('Digite o nome: ')
    let idade
    while (true) {
        idade = Number(window.prompt(`Digite a idade de ${nome}: `))
        if (! Number.isNaN(idade)) {
            break
        }
        alert('Idade invalida')
    }
    let cor = window.prompt(`Digite a cor favorita de ${nome}: `).toLowerCase()
    
    let pessoa = {
        nome: nome, 
        idade: idade,
        cor: cor
    }

    registro.push(pessoa)

    let outroRegistro = window.confirm('Deseja registrar outra pessoa? ')
    if (outroRegistro === false) {
        break
    }
} 

console.table(registro)
console.log(registro)

let mVelho = maisVelho(registro)
console.log(`A pessoa mais velha é ${mVelho.nome}`)

let corGru = agrupamentoCores(registro) 
for (let cor of Object.keys(corGru)) {
    console.log(`Pessoas que gostam da cor ${cor}:`)
    for (let pesssoa of corGru[cor]) {
        console.log(`- ${pesssoa.nome}`)
    }
}

function maisVelho(registros) {
    let maisVelho = registro[0]
    
    for (let registro of registros)//for (let i; i < registros.length; i++)
        if (registro.idade > maisVelho.idade){
            maisVelho = registro
        }
        return maisVelho
}

function agrupamentoCores(registros) {
    let grupoCores = {}

    for (let registro of registros) {
        if (typeof grupoCores[registro.cor] === 'undefined') {
        grupoCores[registro.cor] = [ registro ]
        } else {
        grupoCores[registro.cor].push(registro)
    }
}
return grupoCores
}